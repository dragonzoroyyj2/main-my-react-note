import '../css/SearchTab.css';
import { Component } from 'react';


class SearchTabClass extends Component{
    constructor(props){
        super(props);

        this.state ={
            query:''
        }
    }

    searchData=()=>{
        const {query} = this.state;//비구조 할당
        //window.location.href='/board';
        
        //const trim_query = query.trim();

        /*
        if(trim_query === ''){
            alert("검색어를 입력하세요!");
            return null;
        }*/

        window.location.href=`/board?query=${query}&ie=utf8`;
    }

    inputChange=(e)=>{
        console.log(e.target.value)
        this.setState({query:e.target.value});
    }

    render(){
        return(
            <div id="serach-tab">
                {/* <input type='text' onChange={e=>setSearchText(e.target.value)} placeholder='검색어 입력'/> */}
                <input type='text' onChange={this.inputChange} placeholder='검색어 입력'/>
                <button onClick={this.searchData}>검색</button>
            </div>
        )
    }

   /*  const [searchText, setSearchText] = useState('');

    const searchData=()=>{
        alert(searchText +  '  검색!')
        //window.location.href='/board';
        window.location.href=`/board?query=${searchText}&ie=utf8`;
    }

    return(
        <div id="serach-tab">
            <input type='text' onChange={e=>setSearchText(e.target.value)}/>
            <button onClick={searchData}>검색</button>
        </div>
    ) */
}


export default SearchTabClass;