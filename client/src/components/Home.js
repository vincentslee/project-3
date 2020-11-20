/* eslint-disable */
import Axios from 'axios';
//import { response } from 'express';
import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
//import axios from 'axios';

function Home(props){

    

    const [state, setState] = useState({
        date : "",
        bloodPU: "",
        bloodPL : ""
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        
        const payload={
            "date":state.date,
            "bloodPU":state.bloodPU,
            "bloodPL":state.bloodPL
        }

        Axios.post('/api/submitdata', payload)
        
        
        
    }

    //JSX component code. Currectly placeholder
    return(
        <div className="mt-2">
            <form>
                <div className="form-group text-left">
                    <label>Date</label>
                    <input 
                    type="date"
                    id="date"
                    placeholder="Date"
                    value={state.date}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label>Systolic Blood Pressure (Upper Number)</label>
                    <input
                    type="number"
                    id="bloodPU"
                    placeholder="Systolic"
                    min="10"
                    max="200"
                    value={state.bloodPU}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label>Diastolic Blood Pressure (Lower Number)</label>
                    <input
                    type="number"
                    id="bloodPL"
                    placeholder="Diastolic"
                    min="10"
                    max="200"
                    value={state.bloodPL}
                    onChange={handleChange}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
                <div>
                </div>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
        </div>
    )
}

export default withRouter(Home);
