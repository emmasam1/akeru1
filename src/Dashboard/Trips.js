import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Trips(){
    return(
        <>
        <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between w370">
                <Link to="admin-dashboard/new-request" className="link-dark text-decoration-none link-dashboard-style">New request</Link>
                <Link to="#" className="link-dark text-decoration-none link-dashboard-style">Ongoing trips</Link>
                <Link to="#" className="link-dark text-decoration-none link-dashboard-style">Completed trips</Link>
            </div>
            <div></div>
        </div>
        <Outlet />
        </>
    );
}
export default Trips