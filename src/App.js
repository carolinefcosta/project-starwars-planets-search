import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import MyProvider from './provider/myProvider';
import './App.css';

function App() {
  return (
    <MyProvider>
      <Filters />
      <Table />
    </MyProvider>
  );
}

export default App;
