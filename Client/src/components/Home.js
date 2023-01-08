import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Welcom to jwt strategy app...</h1>
            <button><Link to='/login' >Login</Link></button>
        </div>
    )
}

export default Home