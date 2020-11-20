/* eslint-disable */
import React from 'react';
import { withRouter } from "react-router-dom";

function Header(props) {

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    let title = capitalize(props.location.pathname.substring(1, props.location.pathname.length))
    if (props.location.pathname === '/') {
        title = 'Healthy Ways'
    }

    //Renders logout button if user is on home page
    function renderLogout() {
        if (props.location.pathname === '/home') {
            return ( <
                div className = "ml-auto" >
                <
                button className = "btn btn-danger"
                onClick = {
                    () => handleLogout() } > Logout < /button> <
                /div>
            )
        }
    }

    //Function for 
    function handleLogout() {
        console.log("Logout function")
    }


    //JSX for component
    return ( <
        nav className = "navbar navbar-dark bg-primary" >
        <
        div className = "row col-12 d-flex justify-content-center text-white" >
        <
        span className = "h3" > { props.title || title } < /span> { renderLogout() } <
        /div> <
        /nav>
    )
}
export default withRouter(Header);