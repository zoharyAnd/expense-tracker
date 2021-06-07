import React, { useMemo, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { formatDate } from '../../utils/formatData';

export interface Props {
  refresh: any;
}

const FormExpense = ({ refresh }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dateTouched, setDateTouched] = useState<boolean>(false);
  const [expense, setExpense] = useState<any>({
    category: '',
    date: new Date(),
    comments: '',
    price: 0,
  });

  const localCategories = useMemo(() => {
    return JSON.parse(localStorage.getItem('categories')) !== null ? JSON.parse(localStorage.getItem('categories')) : [];
  }, [refresh]);

  const localExpenses = useMemo(() => {
    return JSON.parse(localStorage.getItem('expenses')) !== null ? JSON.parse(localStorage.getItem('expenses')) : [];
  }, [refresh]);

  const handleCHangeDate = (e) => {
    setDateTouched(true);
    const date = new Date(e.value);
    setExpense({ ...expense, date: formatDate(date) });
  };

  const handleAddExpense = () => {
    setLoading(true);

    if (!dateTouched) {
      localExpenses.push({
        ...expense,
        date: formatDate(expense.date),
      });
    } else {
      localExpenses.push(expense);
    }

    localStorage.setItem('expenses', JSON.stringify(localExpenses));
    refresh();
    setLoading(false);
  };

  return (
    <div className={`form-wrapper ${open ? 'open' : ''}`}>
      <button type="button" className="btn btn-toggle" onClick={() => setOpen(!open)}>Add an expense</button>
      {open ? (
        <div className="form-content">
          <Calendar
            value={expense.date}
            onChange={(e) => handleCHangeDate(e)}
            showIcon
            dateFormat="dd MM yy"
          />

          <Dropdown
            value={expense.category}
            options={localCategories}
            onChange={(e) => setExpense({ ...expense, category: e.value })}
            placeholder="Select a Category"
          />

          <InputText
            value={expense.comments}
            onChange={(e) => setExpense({ ...expense, comments: e.target.value })}
            placeholder="Comment"
          />

          <InputNumber
            value={expense.price}
            onValueChange={(e) => setExpense({ ...expense, price: e.value })}
            mode="currency"
            currency="EUR"
            locale="de-DE"
          />

          <Button
            label="Add expense"
            icon="pi pi-check"
            iconPos="right"
            loading={loading}
            onClick={handleAddExpense}
          />
        </div>
      ) : null}
    </div>
  );
};
export default FormExpense;
