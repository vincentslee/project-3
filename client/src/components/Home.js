/* eslint-disable */
import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
//import axios from 'axios';

function Home(props){

    useEffect(()=>{
//AXIOS POST REQUEST HERE
/////////////////////////
    })

    function redirectToLogin(){
        props.history.push('/login');
    }

    //JSX component code. Currectly placeholder
    return(
        <div className="mt-2">
            Home Page Content
        </div>
    )
}

export default withRouter(Home);
