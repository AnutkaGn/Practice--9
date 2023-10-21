import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Sidebar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <Header title="Header"/>
      <div>
        <Sidebar title="Sidebar"/>
        <Content title="Content"/>
      </div>
      <Footer title="Footer"/>
    </>
  );
}

export default App;
