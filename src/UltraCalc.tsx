import React from 'react'

const UltraCalc: React.FC = () => {
    let [message, setMessage] = React.useState<string>("Hello")

    return (
        <div>
            {message}
            <hr />
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} ></input>
        </div>
    )
}

export default UltraCalc