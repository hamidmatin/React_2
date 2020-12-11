import React from 'react'

export default function Login(props) {
    return (
        <div className='container'>
            <button className='waves-effect waves-light btn' onClick={props.onLogin}>Login</button>
        </div>
    )
}
