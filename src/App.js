import React from 'react'
import './App.css';
// import Hero from './componentss/Hero';
// import Nav from './componentss/Navigation'
import Search from './componentss/Search';
import Stories from './componentss/Stories';
import Pagination from './componentss/Pagination';

// import {UseContext} from 'react'
// import {AppContext} from './context'
import { useGlobalContext } from './context'

function App() {
  // const data = useGlobalContext();
  return (
    <div className="App container">
      {/* <div>{data}</div> */}
      <Search></Search>
      <Pagination ></Pagination>
      <Stories></Stories>
    </div>

  );
}

export default App;
