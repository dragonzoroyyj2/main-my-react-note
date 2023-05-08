//import dummy from '../db/data.json'
import { useParams } from 'react-router-dom';
import Word from './Word';
//import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';


export default function Day(){
    //dummy.words
    //const day = useParams().day;
    const {day} = useParams();

   // const wordList = dummy.words.filter(word => word.day === Number(day));
  
   /* Day.js, DayList.js 호출부분 공통으로뺌
   const [words, setWords] = useState([]);

   useEffect(()=> {
    //fetch('http://localhost:3300/words?day=1')
    fetch(`http://localhost:3300/words?day=${day}`)
    .then(res => {
         return res.json();
    })
    .then(data => {
        setWords(data);
    })
    }, [day]);
    */

    const words = useFetch(`http://localhost:3300/words?day=${day}`)

    return (
    <>
    <h2>Day {day}</h2>
    {words.length === 0 && <span>Loading...</span>}
    <table>
        <tbody>
            {words.map(word=>(
             <Word word={word} key={word.id}/> 
            ))}
            
        </tbody>
    </table>
    
    </>
    );
}