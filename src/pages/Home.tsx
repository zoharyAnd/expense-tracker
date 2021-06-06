import React, { useState } from 'react';
import CustomChart from '../components/Chart';
import CustomDataTable from '../components/DataTable';
import FormCategory from '../components/forms/FormCategory';
import FormExpense from '../components/forms/FormExpense';

const Home = () => {
  const [showChart, setShowChart] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const [from, setFrom] = useState('2021-05-30');
  const [to, setTo] = useState('2021-06-06');

  const toggle = () => {
    setShowChart(!showChart);
    setShowTable(!showTable);
  };

  return (
    <>
      <header>
        <h1>My expense tracker</h1>
        <div className="btn-wrapper container">
          <button type="button" className={`btn btn-tab ${showChart ? 'active' : ''}`} onClick={() => { toggle(); }}>Chart view</button>
          <button type="button" className={`btn btn-tab ${showTable ? 'active' : ''}`} onClick={() => { toggle(); }}>Table view</button>
        </div>
      </header>

      <div className="main-content container">
        <FormCategory />
        <FormExpense />

        {showChart ? <CustomChart from={from} to={to} /> : null}
        {showTable ? <CustomDataTable /> : null}
      </div>
    </>
  );
};

export default Home;
