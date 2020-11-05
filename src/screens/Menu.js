import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <footer className="footer-menu container-fluid py-2 bg-primary">
            <div className="d-flex align-items-center align-content-center container-fluid  ">
            <Link className="btn btn-sm text-white" to="/more">More Posts</Link>
            <Link className="btn btn-sm ml-3 text-white"  to="/api-posts">Api Posts</Link>
            </div> 
     </footer>
    )
}
