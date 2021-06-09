import React from 'react'

interface SolverBoxProps {
    name: string;
    description: string;
    image: string;
    onSelect: () => void;
}

const SolverBox: React.FC<SolverBoxProps> = (props) => {
    const { name, description, image, onSelect } = props;

    return (        
        <div>
            <img src={image} onClick={onSelect} width="350px"/>
            <div id="nameText" onClick={onSelect}> {name}</div>
            <div id="descriptionText" onClick={onSelect}> {description}</div>
        </div>
    )
}

export default SolverBox;
