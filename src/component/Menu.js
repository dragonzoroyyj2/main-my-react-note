import {Link} from 'react-router-dom'
import '../css/Home.css';

export default function Headers(){
   return (
   <div className="menu">
        <Link to="/board" className="link">board</Link>
        <Link to="/board_add" className="link">b_add</Link>
        <Link to="/test_react" className="link">test</Link>
        <Link to="/table_test1_add" className="link">add</Link>
        <Link to="/table_test1" className="link">List</Link>
        <Link to="/create_word" className="link">상품추가</Link>
        <Link to="/create_day" className="link">카테고리 추가</Link>
    </div>   
   )
}