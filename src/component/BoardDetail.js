import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function BoardDetail(){
    let navigate = useNavigate();
    const {id} = useParams();
    const [board, setBoard] = useState({
        id:"",
        title:"",
        content:"",
        wname:"",
        admission_date:""
    });

    useEffect(()=>{
        getInitBody();
    }, []);

    const getInitBody = async () => {
        axios.post('/board_detail', {key_id:id})        
        .then((res) => {
          const { data } = res;
          console.log("handleUpdateForm =>", data);
          if (res.data.length > 0) {
           setBoard({
              ...board,
              id: data[0].id,
              title: data[0].title,
              content: data[0].content,
              wname: data[0].wname,
              admission_date: data[0].admission_date,
            }); 
          }
        })
        .catch((e) => {
          console.error(e);
        });
      };


    const onInputChange = (e)=>{
        setBoard( {...board, [e.target.name] : e.target.value} );
    }

    const onFormCheck = async(e)=>{
        e.preventDefault();

       const result =  await axios.post('/board_update',{
              id: board.id,
              title: board.title,
              content: board.content,
              wname: board.wname,
            }
        );
        if(result.data) {
            alert('수정 되었습니다.')
            navigate("/board");;
          }
    }

    return (   
        <form onSubmit={(e) => onFormCheck(e)}>
            <h2>상세</h2>
            <div className="input_area">
                <label>Title</label>
                <input type="text" placeholder="Title" name="title" value={board.title} onChange={ (e)=> onInputChange(e) }/>
            </div>

            <div className="input_area">
                <label>Content</label>
                <input type="text" placeholder="Content" name="content" value={board.content} onChange={ (e)=> onInputChange(e) }/>
            </div>
            <div className="input_area">
                <label>Wname</label>
                <input type="text" placeholder="Wname" name="wname" value={board.wname} onChange={ (e)=> onInputChange(e) }/>
            </div>
            <div className="input_area">
                <label>Wname</label>
                <label>{board.admission_date}</label>
            </div>
            <button>저장</button>
        </form>
    )
}