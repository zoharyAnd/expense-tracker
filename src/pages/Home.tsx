import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import CustomChart from '../components/Chart';
import CustomDataTable from '../components/DataTable';
import FormCategory from '../components/forms/FormCategory';
import FormExpense from '../components/forms/FormExpense';
import { formatDate } from '../utils/formatData';

const Home = () => {
  const [showChart, setShowChart] = useState<boolean>(true);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);

  const [from, setFrom] = useState<Date>(new Date());
  const [to, setTo] = useState<Date>(new Date());

  const toggle = () => {
    setShowChart(!showChart);
    setShowTable(!showTable);
  };

  const handleCHangeDate = (e, type) => {
    const date = new Date(e.value);
    switch (type) {
      case 'from': setFrom(date);
        break;
      case 'to': setTo(date);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <header>
        <div className="row container header-wrapper">
          <div className="col-lg-3 menu-brand">
            <h1>Expense tracker</h1>
          </div>
          <div className="col-lg-9 menu-content">
            <Button
              label="Chart view"
              icon="pi pi-chart-bar"
              iconPos="right"
              className={`btn-tab p-button-text ${showChart ? 'active' : ''}`}
              onClick={() => { toggle(); }}
            />

            <Button
              label="Table view"
              icon="pi pi-table"
              iconPos="right"
              className={`btn-tab p-button-text ${showTable ? 'active' : ''}`}
              onClick={() => { toggle(); }}
            />

            <div className="date-filter-wrapper">
              <Calendar
                value={from}
                onChange={(e) => handleCHangeDate(e, 'from')}
                showIcon
                dateFormat="dd MM yy"
              />
              <span className="mx-2">to</span>
              <Calendar
                value={to}
                onChange={(e) => handleCHangeDate(e, 'to')}
                showIcon
                dateFormat="dd MM yy"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="main-content container">
        <FormCategory refresh={() => setRefresh(!refresh)} />
        <FormExpense refresh={() => setRefresh(!refresh)} />

        {showChart ? <CustomChart from={formatDate(from)} to={formatDate(to)} refresh={refresh} /> : null}
        {showTable ? <CustomDataTable refresh={refresh} /> : null}
      </div>
    </>
  );
};

export default Home;
