import { useRef, useState } from "react";
import { useNavigate  } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord(){

    //selectbox days
    const days =  useFetch("http://localhost:3300/days");
    //const history = useHistory();
    let navigate = useNavigate();

    //여러번 동시 클릭 방지
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(e){
        e.preventDefault();

        //console.log(engRef.current.value);
        //console.log(korRef.current.value);
        //console.log(dayRef.current.value);
    
        /* json 정보
        words": [
            {
            "id": 1,
            "day": 1,
            "eng": "book",
            "kor": "책",
            "isDone": true
            },
        */
        //if(!isLoading){
        if(!isLoading && dayRef.current.value && engRef.current.value && korRef.current.value){

            setIsLoading(true);

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch(`http://localhost:3300/words/`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day ,
                    eng ,
                    kor ,
                    isDone: false,
                }),
            })
            .then(res => {
                if(res.ok){
                    alert('생성이 완료 되었습니다');
                    navigate(`/day/${dayRef.current.value}`);
                    setIsLoading(false);
                }
            })
        }

    }

    //form 항목 세팅 - useRef : dom의 접근하게 해준다.
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
            <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day =>(
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={{
                opacity: isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "저장"}</button>
        </form>

    );
}