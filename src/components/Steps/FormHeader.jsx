import React from 'react'

const FormHeader = ({ title, info }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{info}</p>
        </div>
    )
}

export default FormHeader
