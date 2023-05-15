import '../css/SearchTab.css';
import { Component } from 'react';
import queryString from 'query-string';
import axios from "axios";
import PostList from "./PostList";
import Pagination from "./Pagination";

class BoardClass extends Component{
    constructor(props){
        super(props);
        this.state ={
            boardList:[],
            currentPage :1,
            boardPerPage:5,
        }

        this.chgCurrentPage = this.chgCurrentPage.bind(this);
    }

    componentDidMount(){
        const queryObj = queryString.parse(window.location.search);
        console.log(queryObj.query)
        const searchText = queryObj.query;

        this.getBoad(searchText);
    }

    getBoad = async(searchText)=> {
        // const result = await axios.get(`/board?query=${searchText}`);
        // console.log(result.data)//Array
 
        // GET 요청은 params에 실어 보냄
        const result = await axios.get('/board', {
         params: { searchText: searchText }  
        });
 
         this.setState({boardList:result.data});
     }

     currentBoadList = () =>{
        const startIndex = (this.state.currentPage-1) * this.state.boardPerPage;
        const endIdex = startIndex+this.state.boardPerPage;

        const slicedList = this.state.boardList.slice(startIndex, endIdex);
        //0,3 - 0,1,2
        //3,6 - 3,4,5
        return slicedList;
    }


    chgCurrentPage(page) {      
        this.setState({ currentPage: page })
    }

    render(){
        return(
            <div className="board">
            <h3>검색결과</h3>
           <PostList boardList={this.currentBoadList(this.state.boardList)}/>
           <Pagination total={this.state.boardList.length}  
                       boardPerPage={this.state.boardPerPage}
                       chgCurrentPage={this.chgCurrentPage}/>
       </div>
        )
    }

}
export default BoardClass;