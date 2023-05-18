const express = require('express');
const bodyParser = require("body-parser"); // 요청정보 처리
const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // 객체 형식 처리

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

    var sql = 'select * from test_react.board order by id desc limit ?, ?';

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

app.post('/board_add', (req, res)=>{
    console.log('/board_add');
    console.log('/req' , req.body);
    const title = req.body.title;
    const content = req.body.content;
    const wname = req.body.wname;

    var sql = 'insert into test_react.board(title, content, wname, admission_date) values(?, ?, ?, SYSDATE() )';

    db.query(sql, [title,  content, wname], (err, result)=> {

        if(!err){
           res.send(result);//응답을 클라이언트 쪽으로 보낸다.
        }else{
            console.log(err);
        }
    })
});


app.post("/board_detail", (req, res) => {
      var key_id = parseInt(req.body.key_id);
    
      const sqlQuery =
        "select id, title, content, wname, date_format(admission_date,'%y-%m-%d') as admission_date from test_react.board where id = ?";

      db.query(sqlQuery, [key_id], (err, result) => {
        res.send(result);
      });
    });

app.post("/board_update", (req, res) => {


    console.log('update : ' , req.body)

    var key_id = req.body.id;
    var title = req.body.title;
    var content = req.body.content;
    var wname = req.body.wname;
  
    const sql= 'update test_react.board set title=?, content=?, wname=? where id=31';

    // ?에 title, content, num 파라미터 전달 -> db에 수정이 일어남
    db.query(sql, [title, content, wname, key_id], (err, result) => {
      // result에 아무것도 없음. update는 반환되는 값없음. 그래서 사실 안보내도됨
      res.send(result);
    });
  });

app.post("/board_delete", (req, res) => {
    const id = req.body.id;
    console.log("/delete(id) => ", id);
  
    const sqlQuery = "delete from test_react.board where id = ?;";
    db.query(sqlQuery, [id], (err, result) => {
      console.log(err);
      res.send(result);
    });
  });


app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`);
})