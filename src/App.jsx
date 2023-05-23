import React from 'react';
import Header from './components/Header';
import RichTextEditor from './components/RichTextEditor';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <RichTextEditor />
        <Sidebar />
      </div>
    </>
  );
};

export default App;
