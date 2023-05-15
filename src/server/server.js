const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');


app.get('/' , (req, res)=>{
    console.log('root')
});


app.get('/movies', (req, res)=>{
    console.log('/movies');

    db.query("select * from movie", (err, data)=> {

        if(!err){
            //console.log(data);
            res.send(data);//응답을 클라이언트 쪽으로 보낸다.
        }else{
            console.log(err);
        }
    })
})

app.get('/movie/:id', (req, res)=>{
    console.log('/movie/:id');

    const id = req.params.id;

    console.log(id);

    db.query(`select * from movie where id = ?`,[id], (err, data)=> {

        if(!err){
            //console.log(data);
            res.send(data);//응답을 클라이언트 쪽으로 보낸다.
        }else{
            console.log(err);
        }
    })
});



//---------------------------------------------------------------------------
// 게시판
//---------------------------------------------------------------------------
app.get('/board', (req, res)=>{
    console.log('/board');
    //const title = req.query.searchText+ "%";
    const title = ''+ "%";
    console.log('title : ' , title );

    var sql = 'select * from board where title like ?';

    db.query(sql, [title], (err, data)=> {

        if(!err){
            //console.log(data);
            res.send(data);//응답을 클라이언트 쪽으로 보낸다.
        }else{
            console.log(err);
        }
    })
});



app.get('/paginatedBoard', (req, res)=>{
    console.log('/paginatedBoard');
    //const title = req.query.searchText+ "%";
    const title = ''+ "%";
    const currentPage = parseInt(req.query.currentPage);
    const boardPerPage = parseInt(req.query.boardPerPage);
   
    const startIndex = (currentPage-1) * boardPerPage;
    const endIndex = startIndex+boardPerPage;

    console.log('currentPage : ' , currentPage );
    console.log('startIndex : ' , startIndex)
    console.log('endIndex : ' , endIndex)
    console.log('boardPerPage : ' , boardPerPage)
    console.log('parseInt(req.query.totalCount) : ' , req.query.totalCount)

    var sql = 'select * from board limit ?, ?';

    db.query(sql, [startIndex,  boardPerPage], (err, data)=> {

        if(!err){
            //console.log(data);

            

            
            const results = {};
            results.totalCount = parseInt(req.query.totalCount);
            results.boardPerPage = boardPerPage;
            results.currentPage = currentPage;
            results.endPage = Math.ceil(results.totalCount/boardPerPage);;
            console.log('aaa data ' , data)
            //results.result =  data.slice(startIndex, endIndex); 
            results.result =data;

            console.log(results.result)


           res.send(results);//응답을 클라이언트 쪽으로 보낸다.
        }else{
            console.log(err);
        }
    })
});







app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})