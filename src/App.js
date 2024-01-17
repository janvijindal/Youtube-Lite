import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {AppContext} from "./context/contextApi"
import Feed from "./components/Feed"
import Header from "./components/Header";
import SearchResult from "./components/SearchResult"
import VideoPlayer from "./components/VideoPlayer";


function App() {
  return ( 
  <AppContext>
      <BrowserRouter>
           <div className="flex flex-col h-full ">
                 <Header></Header>
                  <Routes>
                       <Route path="/" element={<Feed/>}/>
                       <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
                       <Route path="/video/:id" element={<VideoPlayer/>}/>
                  </Routes>
           </div>
      </BrowserRouter>
   </AppContext>
    
  );
}

export default App;
