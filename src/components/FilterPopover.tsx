import { useEffect, useState } from 'react';
import api from '../services/api';
import { CategoryProps } from '../types/categoryTypes';

interface FilterPopoverProps {
  onApply: (selectedCategories: number[]) => void;
}

function FilterPopover({ onApply }: FilterPopoverProps) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [checkedCategories, setCheckedCategories] = useState<number[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/category');
        setCategories(response?.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  function handleCheckboxChange(categoryId: number, isChecked: boolean) {
    setCheckedCategories(prev =>
      isChecked ? [...prev, categoryId] : prev.filter(id => id !== categoryId)
    );
  }

  return (
    <div className='absolute z-10 mt-8 rounded border border-mline bg-mfilter'>
      <div className='flex flex-col p-3'>
        <h1 className='text-center'>Category</h1>
        {categories.map(category => (
          <div
            key={category.id}
            className='flex items-center justify-start gap-2'
          >
            <input
              type='checkbox'
              checked={checkedCategories.includes(category.id)}
              onChange={e =>
                handleCheckboxChange(category.id, e.target.checked)
              }
            />
            {category.name}
          </div>
        ))}
        <button onClick={() => onApply(checkedCategories)}>Apply</button>
      </div>
    </div>
  );
}

export default FilterPopover;
