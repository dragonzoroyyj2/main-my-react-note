import {Link} from 'react-router-dom'
import '../css/Home.css';

export default function Headers(){
   return <div className="header">
            <Link to="/">
                <h2>Header.</h2>
            </Link>
   </div> 
}