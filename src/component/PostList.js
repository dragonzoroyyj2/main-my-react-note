import '../css/PostList.css';
import Post from './Post';


export default function PostList(props){

    const result = props.boardList.map(
        (data)=>(<Post key={data.id} id={data.id} title={data.title} content={data.content} wname={data.wname} chgPageNum={props.chgPageNum} currentPage={props.currentPage}/>)

    )


    return(
        <div id="post-list">
            {result}
        </div>
    )
}