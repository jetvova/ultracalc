# Container image for cleanly building Ultracalc
FROM ubuntu:20.04

# Installing basic utilities
RUN echo "Updated 9/26/2022" && apt-get update && \
    apt-get install -y \
        curl \
        wget \
        git \
        nano

# Installing Node 16
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs
