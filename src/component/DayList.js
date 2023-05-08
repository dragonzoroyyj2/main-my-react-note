//import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
//import dummy from '../db/data.json'

export default function DayList(){
   /*  공통으로뺌
   
   const [days, setDays] = useState([]);

     
    useEffect(()=> {
       fetch('http://localhost:3300/days')
       .then(res => {
            return res.json();
       })
       .then(data => {
            setDays(data);
       })
    }, []);

    */

    const days = useFetch("http://localhost:3300/days");

    if(days.length === 0){
        return <span>Loading...</span>;
    }

    return (
        <ul className='list_day'>
            {days.map(day=>(
            <li key={day.id}>
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
        </ul>
    ); 
}