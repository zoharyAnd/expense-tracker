import React, { useMemo, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';

export interface Props {
  refresh: any;
}

const FormCategory = ({ refresh }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [category, setCategory] = useState<any>({
    name: '',
    color: 'FFFFFF',
  });

  const localCategories = useMemo(() => {
    return JSON.parse(localStorage.getItem('categories')) !== null ? JSON.parse(localStorage.getItem('categories')) : [];
  }, []);

  const handleAddCategory = () => {
    setLoading(true);

    const postedCategory = {
      label: category.name,
      value: category.name.toLowerCase(),
      color: `#${category.color}`,
    };

    localCategories.push(postedCategory);
    localStorage.setItem('categories', JSON.stringify(localCategories));

    setLoading(false);
    refresh();
  };

  return (
    <div className={`form-wrapper ${open ? 'open' : ''}`}>
      <button type="button" className="btn btn-toggle" onClick={() => setOpen(!open)}>Add a category</button>
      {open ? (
        <div className="form-content">
          <InputText
            value={category.name}
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
            placeholder="Category Name"
          />

          <ColorPicker
            value={category.color}
            onChange={(e) => setCategory({ ...category, color: e.value })}
            placeholder="Category color"
          />

          <Button
            label="Add category"
            icon="pi pi-check"
            iconPos="right"
            loading={loading}
            onClick={handleAddCategory}
          />
        </div>
      ) : null}
    </div>
  );
};
export default FormCategory;
