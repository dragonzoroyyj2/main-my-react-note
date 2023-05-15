import '../css/Post.css';
import {Link} from 'react-router-dom'
import axios from "axios";
export default function Post(props){
    //console.log(props)

    const onDelclick = async(e) => {
        if(window.confirm(props.id + '번 행을 삭제 하시겠습니까?')){
            await axios.post('/board_delete', { id: props.id } );
         //navigate("/board");
         props.chgPageNum(props.currentPage);
        }
         
      };

    return(
        <div id="post">
            <span>
                {props.id}
            </span>
            <span>
                {props.title}
            </span>
            <span>
                {props.content}
            </span>
            <span>
                {props.wname}
            </span>
            <span>
                <Link to={`/board_detail/${props.id}`}> 상세 </Link>
            </span>
            <span>
                <button onClick={ (e)=> onDelclick(e) }>삭제</button>
            </span>
        </div>
    )
}