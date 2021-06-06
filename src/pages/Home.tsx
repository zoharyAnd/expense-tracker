import React, { useState } from 'react';
import CustomChart from '../components/Chart';
import CustomDataTable from '../components/DataTable';

const Home = () => {
  const [showChart, setShowChart] = useState(true);
  const [showTable, setShowTable] = useState(false);

  const toggle = () => {
    setShowChart(!showChart);
    setShowTable(!showTable);
  };
  return (
    <>
      <header>
        <h1>My expenses</h1>
        <div className="btn-wrapper container">
          <button type="button" className={`btn btn-tab ${showChart ? 'active' : ''}`} onClick={() => { toggle(); }}>Chart view</button>
          <button type="button" className={`btn btn-tab ${showTable ? 'active' : ''}`} onClick={() => { toggle(); }}>Table view</button>
        </div>
      </header>

      <div className="main-content container">
        {showChart ? <CustomChart /> : null}
        {showTable ? <CustomDataTable /> : null}
      </div>
    </>
  );
};

export default Home;
