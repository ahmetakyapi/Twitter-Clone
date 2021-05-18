import React from "react";
import Container from "./Layout/Container";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Widgets from "./Layout/Widgets";

const App = () => {
   return (
       <div className="max-w-7xl mx-auto px-16 py-2">
           <Container>
               <Sidebar/>
               <Content/>
               <Widgets/>
             </Container>
           
       </div>

   )
}
export default App