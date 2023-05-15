import '../css/PostList.css';
import Post from './Post';


export default function PostList(props){

    const result = props.boardList.map(
        (data)=>(<Post key={data.id} id={data.id} title={data.title}/>)

    )


    return(
        <div id="post-list">
            {result}
        </div>
    )
}