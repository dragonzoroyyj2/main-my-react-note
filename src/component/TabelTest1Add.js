import { useRef, useState } from "react";
import { useNavigate  } from "react-router-dom";
export default function TabelTest1Add(){
/*
  "myData": [
    {
      "id": 1,
      "name": "ryu1",
      "nickName": "dragon1",
      "age": 46
    },
*/
    let navigate = useNavigate();

    //여러번 저장 버튼 실행 방지
    const [isAdd, setIsAdd] = useState(false);

    //form 항목 ref
    const nameRef = useRef(null);
    const nickNameRef = useRef(null);
    const ageRef = useRef(null);


    function onSubmit(e){
        e.preventDefault();

        if(!isAdd){
            setIsAdd(true);

            fetch(`http://localhost:3300/myData/`, {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name : nameRef.current.value,
                        nickName : nickNameRef.current.value ,
                        age : ageRef.current.value ,
                    }),
                })
                .then(res => {
                    if(res.ok){
                        alert('생성이 완료 되었습니다');
                        navigate(`/table_test1`);
                        setIsAdd(false);
                    }
                })
        }
        
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Name</label>
                <input type="text" placeholder="computer" ref={nameRef}/>
            </div>
            <div className="input_area">
                <label>NickName</label>
                <input type="text" placeholder="computer" ref={nickNameRef}/>
            </div>
            <div className="input_area">
                <label>Age</label>
                <input type="number" placeholder="computer" ref={ageRef}/>
            </div>
            <button style={ { color : isAdd ? 'red' : 'white'} }>{isAdd? 'wait..' : '저장'}</button>
        </form>
    );
}