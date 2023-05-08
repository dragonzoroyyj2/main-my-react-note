import { useState } from "react";

export default function TabelTest1Row(props){
    const [data, setData] = useState(props.data);


    function fnAge(){
        if(window.confirm('나이를 한살 올리겠습니까?')){
            fetch(`http://localhost:3300/myData/${data.id}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    age: Number(data).age + 1,
                }),
            })
            .then(res => {
                if(res.ok){
                    setData({
                        ...data,
                        age: Number(data.age) + 1
                    })
                }
            })
        }
       }


   function fnDel(){
    //console.log(data.name)
    //console.log(data.id)

        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3300/myData/${data.id}`, {
                method : 'DELETE',
            })
            .then(res => {
                if(res.ok){
                    setData({
                        ...data,
                        id:0   
                    });
                }
            })
        }
   }

   if(data.id === 0){ return <tr><td colSpan={7}>No Data.</td></tr> } 
   

    return(
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.nickName}</td>
            <td>{data.age}</td>
            <td><button onClick={fnAge}>plus</button></td>
            <td><button onClick={fnDel} className="btn_del">del</button></td>
            <td><button onClick={props.fnPAlert}>parent</button></td>
        </tr>
    );
}