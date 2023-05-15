import '../css/Pagination.css';

export default function Pagination(props){
    //const {total, boardPerPage, endPage} = props;//비구조화할당, 구조분해
    const {currentPage, endPage} = props;//비구조화할당, 구조분해

    //const endPage = Math.ceil(total/boardPerPage);
    //27/5->5.4

    let pageNumbers =[];
    for(var i=1; i<=endPage; i++){
        pageNumbers.push(i);
    }

    console.log('pageNumbers : ' , pageNumbers)

    const result = pageNumbers.map(
        (page) => (<span key={page} id="page" onClick={()=>pageClick(page)}>{page}</span>)
    );

    const pageClick=(page)=>{

        console.log('pageClick : ' , page);
       // props.setCurrentPage(page);//Board가 넘기 페이지 설정함수
       props.selectPage(page);
    }


    return(
        <div id="pagination">
            <div id="pagination-inner">
            <span id="page" onClick={()=>{

                if( currentPage > 1){
                    props.selectPage(currentPage-1);
                }

            }}>prev</span>
            {result}
            <span id="page" onClick={()=>{

                if(currentPage < endPage){
                    props.selectPage(currentPage+1);
                }

            }}>next</span>
            </div>
            
        </div>
    )
}