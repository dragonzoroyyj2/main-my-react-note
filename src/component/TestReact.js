import axios from 'axios';//axios 모듈에서 axios함수를 불러온다.($.ajax랑 거의 같다고 보면 된다)
import { useState } from 'react';

export default function TestReach(){

    const [boardList, setBoardList] = useState([]);



    //데이터를 받아올려면 비동기처리를 해야한다.
    const selectAll=async()=>{
        alert('selectAll!');

        //http://localhost:4000/movies
            //-> package.json 추가 함으로 /movies 만써도 연결된다 :   "proxy" :"http://localhost:4000", 
            const result = await axios.get('/movies');

            setBoardList(result.data);

        console.log(result.data);
            
    }


    //데이터를 받아올려면 비동기처리를 해야한다.
    const selectWhere=async()=>{
        alert('selectWhere!');

        const result = await axios.get('/movie/'+2);

        console.log(result);
            
    }

    return (
        <>
        
            <h2>리액트에서 mysql 테스트 </h2>
            <button onClick={selectAll}>전체 조회</button>
            <button onClick={selectWhere}>조건 조회</button>
            <hr />
            <h3>result List</h3>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>running_tiem</th>
                    </tr>
                </thead>
                <tbody>
                     {boardList.map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.running_tiem}</td>
                        </tr>
                    ))}
    
                </tbody>
    
            </table>
        </>
    )
}