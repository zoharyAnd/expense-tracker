import React, { useRef, useState } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { expenseData } from '../utils/constants';

// export interface Props {
// }

// export function App (props: IAppProps) {
const CustomDataTable = () => {
  const dt = useRef(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [globalFilter, setGlobalFilter] = useState('');
  const [data] = useState<any[]>(expenseData);

  const reset = () => {
    setSelectedDate(null);
    setGlobalFilter('');
    dt.current.reset();
  };

  const onDateChange = (e) => {
    dt.current.filter(e.value, 'date', 'custom');
    setSelectedDate(e.value);
  };

  // #region templates
  const header = (
    <div className="table-header">
      <Button type="button" label="Clear" className="p-button-outlined" icon="pi pi-filter-slash" onClick={reset} />
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
      </span>
    </div>
  );

  const dateBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Date</span>
        <span>{rowData.date}</span>
      </>
    );
  };

  const categoryBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Category</span>
        {rowData.category}
      </>
    );
  };

  const commentsBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Comments</span>
        {rowData.comments}
      </>
    );
  };

  const priceBodyTemplate = (rowData) => {
    return (
      <>
        <span className="p-column-title">Price</span>
        <p className="price-wrapper">{`${rowData.price} €`}</p>
      </>
    );
  };

  // #endregion templates

  const dateFilter = <Calendar value={selectedDate} onChange={onDateChange} dateFormat="yy-mm-dd" className="p-column-filter" placeholder="Registration Date" />;

  const formatDate = (date) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${date.getFullYear()}-${month}-${day}`;
  };

  const filterDate = (value, filter) => {
    if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
      return true;
    }

    if (value === undefined || value === null) {
      return false;
    }

    return value === formatDate(filter);
  };

  return (
    <div className="datatable-filter-demo datatable-responsive-demo">
      <div className="card">
        <DataTable
          ref={dt}
          value={data}
          paginator
          rows={5}
          header={header}
          className="p-datatable-filter-demo p-datatable-responsive-demo"
          globalFilter={globalFilter}
          emptyMessage="No expenses found."
          selectionMode="single"
        >
          <Column
            field="date"
            header="Date"
            body={dateBodyTemplate}
            sortable
            filter
            filterElement={dateFilter}
            filterFunction={filterDate}
          />

          <Column
            field="category"
            header="Category"
            body={categoryBodyTemplate}
            sortable
            sortField="category"
            filter
            filterPlaceholder="Search by category"
          />

          <Column
            field="comments"
            header="Comments"
            sortable
            body={commentsBodyTemplate}
            filter
            filterPlaceholder="Search by comments"
          />

          <Column
            field="price"
            header="Price"
            sortable
            body={priceBodyTemplate}
            filter
            filterPlaceholder="Filter by price"
          />

        </DataTable>
      </div>
    </div>
  );
};

export default CustomDataTable;
