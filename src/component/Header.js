import {Link} from 'react-router-dom'

export default function Headers(){
   return <div className="header">
    <h1>
        <Link to="/">일별 상품(재고)</Link>
    </h1>
    <div className="menu">
    
        <Link to="/table_test1_add" className="link">
            add
        </Link>
        <Link to="/table_test1" className="link">
            List
        </Link>
        <Link to="/create_word" className="link">
            상품추가
        </Link>
        <Link to="/create_day" className="link">
            상품 카테고리 추가
        </Link>
    </div>
   </div> 
}