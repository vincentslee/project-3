/*eslint-disable*/
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
  } from 'recharts';
import Axios from 'axios';
import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

//import { response } from 'express';








function Chart(data){
    let [responseData, setResponseData] =useState('')
    
    Axios.post('/api/getdata').then((response)=>{
        makedata(response.data.response)
        console.log(response.data.response)
        setResponseData(response.data.response)
    })
    
    

    
      
    
    

    
    //console.log(responseData)
    function makedata(data){
        console.log("data we get")
        console.log(data)
        var array = []
        for (var i = 0; i< data.length; i++){
            console.log("Iteration on data[i]")
            console.log(data[i])
            let formatted = {name: data[i].date.slice(0, -14), Upper: parseInt(data[i].bloodPU), Lower: parseInt(data[i].bloodPL)}
            array.push(formatted)
            console.log(formatted)
        }
        console.log("Finished array")
        console.log(array)
        
        return (
            <LineChart width={1000} height={800} data={array}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Upper" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Lower" stroke="#82ca9d" />
            </LineChart>
          );
    }
    
    
    //makedata(responseData);
    
    
    
    return(makedata(responseData))
    
    

}

export default withRouter(Chart)