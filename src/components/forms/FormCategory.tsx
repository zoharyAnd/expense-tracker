import React, { useMemo, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';

const FormCategory = () => {
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState<any>({
    name: '',
    color: null,
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
  };

  return (
    <div className="form-wrapper">
      <p>Add a category</p>
      <InputText
        value={category.name}
        onChange={(e) => setCategory({ ...category, name: e.target.value })}
        placeholder="Comment"
      />

      <ColorPicker
        value={category.color}
        onChange={(e) => setCategory({ ...category, color: e.value })}
      />

      <Button
        label="Add category"
        icon="pi pi-check"
        loading={loading}
        onClick={handleAddCategory}
      />
    </div>
  );
};
export default FormCategory;
