import {useEffect, useState} from "react";

export default function useFetch(url){
    //const [words, setWords] = useState([]);

    const [data, setData] = useState([]);

    useEffect(()=> {
     //fetch('http://localhost:3300/words?day=1')
     //fetch(`http://localhost:3300/words?day=${day}`)
     fetch(url)
     .then(res => {
          return res.json();
     })
     .then(data => {
        setData(data);
     })
     }, [url]);


     return data;
}