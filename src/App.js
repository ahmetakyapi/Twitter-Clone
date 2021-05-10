import React from "react";
import Container from "./Layout/Container";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Widgets from "./Layout/Widgets";

const App = () => {
   return (
       <Container>
        <Sidebar/>
        <Content/>
        <Widgets/>
       </Container>
   )
}
export default App