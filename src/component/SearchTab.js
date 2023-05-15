import '../css/SearchTab.css';
import { useState } from 'react';


export default function SearchTab(){

    const [searchText, setSearchText] = useState('');

    const searchData=()=>{
        alert(searchText +  '  검색!')
        //window.location.href='/board';
        window.location.href=`/board?query=${searchText}&ie=utf8`;
    }

    return(
        <div id="serach-tab">
            <input type='text' onChange={e=>setSearchText(e.target.value)}/>
            <button onClick={searchData}>검색</button>
        </div>
    )
}