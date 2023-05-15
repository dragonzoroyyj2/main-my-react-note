import '../css/Post.css';

export default function Post(props){
    //console.log(props)
    return(
        <div id="post">
            <span>
                {props.id}
            </span>
            <span>
                {props.title}
            </span>
        
        </div>
    )
}