import { useState } from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios";

export default function BoardAdd(){
     let navigate = useNavigate();

     //여러번 동시 클릭 방지
     const [isLoading, setIsLoading] = useState(false);

    const [board, setBoard] = useState({
        title:"",
        content:"",
        wname:""
    });

    const {title, content, wname} = board;

    const onInputChange = (e)=>{
        setBoard( {...board, [e.target.name] : e.target.value} );
    }

    const onFormCheck = async(e)=>{
        e.preventDefault();
        if(!isLoading){

            setIsLoading(true);
            const result = await axios.post('/board_add', board );

            if(result.data) {
                alert('저장 되었습니다.');
                setIsLoading(false);
                navigate("/board");
            }
         }
    }


    
    return (   
        <form onSubmit={(e) => onFormCheck(e)}>
            <h2>신규</h2>
            <div className="input_area">
                <label>Title</label>
                <input type="text" placeholder="Title" name="title" value={title} onChange={ (e)=> onInputChange(e) }/>
            </div>

            <div className="input_area">
                <label>Content</label>
                <input type="text" placeholder="Content" name="content" value={content} onChange={ (e)=> onInputChange(e) }/>
            </div>
            <div className="input_area">
                <label>Wname</label>
                <input type="text" placeholder="Wname" name="wname" value={wname} onChange={ (e)=> onInputChange(e) }/>
            </div>
            <button>저장</button>
        </form>
    )
}