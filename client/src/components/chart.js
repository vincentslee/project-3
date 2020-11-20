/*eslint-disable*/
import { LineChart, Line } from 'recharts';
import Axios from 'axios';
import React from 'react';
import {withRouter} from 'react-router-dom';
//import { response } from 'express';





function getdata() {
    return Axios.post('/api/getdata').then((response)=>{
        console.log("This is the response")
        console.log(response.data.response)
        makechart(response.data.response)
    })
}
console.log(getdata)


function Chart(data){
    


        
    console.log('this is the chart')
    console.log(data)
    return(<LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>)
    

}

export default withRouter(Chart)