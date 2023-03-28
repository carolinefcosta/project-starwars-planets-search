import React from 'react';
import Table from './components/Table';
import MyProvider from './provider/myProvider';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
