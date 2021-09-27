#!/bin/bash -eux
DIR="$(dirname "${BASH_SOURCE[0]}")"  # Get the directory name
DIR="$(realpath "${DIR}")"    # Resolve its full path if need be
SRC="$(dirname "${DIR}")"     # Repo root dir
cd ${SRC}

echo "Testing CI locally"

echo "Building Docker container"

DOCKER_IMAGE_NAME=ultracalc-ci

docker build --tag ${DOCKER_IMAGE_NAME} --file CI/Dockerfile CI

FAKE_HOME=$(mktemp -d -t ci-XXXXXXX)
trap 'rm -rf -- "$FAKE_HOME"' EXIT

docker run \
    -ti \
    --rm \
    --volume ${PWD}:/ultracalc \
    --volume ${FAKE_HOME}:${HOME} \
    --volume /etc/passwd:/etc/passwd:ro \
    --workdir /ultracalc \
    --user $(id -u ${USER}):$(id -g ${USER}) \
    \
    ${DOCKER_IMAGE_NAME} \
    CI/build-ultracalc.sh

docker run \
    -ti \
    --rm \
    --volume ${PWD}:/ultracalc \
    --volume ${FAKE_HOME}:${HOME} \
    --volume /etc/passwd:/etc/passwd:ro \
    --workdir /ultracalc \
    --user $(id -u ${USER}):$(id -g ${USER}) \
    \
    ${DOCKER_IMAGE_NAME} \
    CI/test-ultracalc.sh
