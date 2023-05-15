import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './component/Home';
import Menu from './component/Menu';
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header'
import TabelTest1 from './component/TabelTest1'
import TabelTest1Add from './component/TabelTest1Add'
import TestReact from './component/TestReact'
import Board from './component/Board';
import BoardAdd from './component/BoardAdd';
import BoardDetail from './component/BoardDetail';

function App() {
  return(
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/board" element={<Board />} /> 
          <Route path="/board_add" element={<BoardAdd />} /> 
          <Route path="/Board_detail/:id" element={<BoardDetail />} /> 
          <Route path="/dayList" element={<DayList />} /> 
          <Route path="/day/:day" element={<Day />} /> 
          <Route path="/test_react" element={<TestReact />} /> 
          <Route path="/table_test1_add" element={<TabelTest1Add />} /> 
          <Route path="/table_test1" element={<TabelTest1 />} /> 
          <Route path="/create_word" element={<CreateWord />} /> 
          <Route path="/create_day" element={<CreateDay />} /> 
          <Route path="*" element={<EmptyPage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
