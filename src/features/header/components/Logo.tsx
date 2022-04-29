import React from 'react'

interface Props {
    onClick?: ()=>void
}

const Logo:React.FC<Props> = ({onClick=()=>{}}) => {
    return (
        <h1 style={{margin:0, cursor:"pointer"}} onClick={onClick}>
            LOGO
        </h1>
    )
}

export default Logo
