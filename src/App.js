import React from 'react';

// import styling from antd and custom
import './App.css';
import 'antd/dist/antd.css';

import WebFunnel from './components/WebFunnel'

function App() {
  return (
    <div className="App">
      <WebFunnel 
        logoUrl="https://via.placeholder.com/150"
        groupName="WestingHouse"
        charity="Ronald McDonald"
      />
    </div>
  );
}

export default App;
