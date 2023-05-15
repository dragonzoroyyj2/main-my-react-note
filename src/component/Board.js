import '../css/Board.css';
import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "./PostList";
import Pagination from "./Pagination";
import queryString from 'query-string';

export default function Board(){
    const [boardList, setBoardList] = useState([]);    
    const [searchText, setSearchText] = useState('');
    const [totalCount, setTotalCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [boardPerPage, setBoardPerPage] = useState(5);

    const [endPage, setEndPage] = useState(0);

    //ready, componentDidMount
    useEffect(()=>{
       
        //console.log(window.location);
        console.log(window.location.search)
        const queryObj = queryString.parse(window.location.search);
       // console.log(queryObj.query)
       setSearchText(queryObj.query);
        chgPageNum(currentPage);
    }, []);

    async function getBoad(searchText) {
       // const result = await axios.get(`/board?query=${searchText}`);
       // console.log(result.data)//Array

       // GET 요청은 params에 실어 보냄
       const result = await axios.get('/board', {
        params: {
             searchText: searchText
         }  
       });
       
       console.log(result.data.length)
       //setBoardList(result.data);
       const cnt = result.data.length;
       return cnt;
    }

    const currentBoadList = () =>{
        const startIndex = (currentPage-1) * boardPerPage;
        const endIndex = startIndex+boardPerPage;
        console.log('startIndex : ' , startIndex)
        console.log('endIndex : ' , endIndex)
        const slicedList = boardList.slice(startIndex, endIndex);
        //0,5 - 0,1,2,3,4
        //5,10- ,6,7,8,9,10
        return slicedList;
    }

    const chgPageNum = async(page)=> {
        // const result = await axios.get(`/board?query=${searchText}`);
        // console.log(result.data)//Array

        // 조회 조건 전체 count
        const totCnt = await getBoad(searchText);

        // GET 요청은 params에 실어 보냄
        const res = await axios.get('/paginatedBoard', {
            params: {
                searchText: '',
                currentPage:page,
                boardPerPage:boardPerPage,
                totalCount : totCnt

            }  
        });
        
        
        console.log(res);        
        
        //setTotalCount(res.data.totalCount);
        setCurrentPage(res.data.currentPage);
        setBoardPerPage(res.data.boardPerPage);
        setEndPage(res.data.endPage);
        setBoardList(res.data.result);

    }

    function selectPage(page){

        chgPageNum(page);
    }


    return (

        <div className="board">
             <h3>검색결과</h3>
            <PostList  boardList={boardList}/>
            <Pagination /* total={totalCount}  */ 
                        /* boardPerPage={boardPerPage} */
                        currentPage={currentPage}
                        endPage={endPage}
                        /* setCurrentPage={setCurrentPage} */
                        selectPage={selectPage}
                        />
        </div>

    )
}