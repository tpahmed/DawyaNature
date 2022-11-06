import Conntest from '../server_control/connection';
import {useEffect, useState} from 'react';
import './Chart.css';


export default function Chart(){
    const [data,setdata] = useState('');

    useEffect(() => {
        Conntest(setdata);
    },[setdata]);
    return (
        <div className="Chart">
            {data}
        </div>
    );
}