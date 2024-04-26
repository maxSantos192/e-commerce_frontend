import { useEffect, useState } from 'react';
import api from '../services/api'; // Ajuste o caminho conforme necessário
import { CategoryProps } from '../types/categoryTypes'; // Ajuste o caminho conforme necessário
import Checkbox from '@mui/material/Checkbox';

interface FilterPopoverProps {
  checkedCategories: number[];
  setCheckedCategories: (value: React.SetStateAction<number[]>) => void;
  onApply: (selectedCategories: number[]) => void;
}

function FilterPopover({
  onApply,
  checkedCategories,
  setCheckedCategories,
}: FilterPopoverProps) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/category');
        setCategories(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const handleCheckboxChange = (categoryId: number, isChecked: boolean) => {
    setCheckedCategories(prevCategories =>
      isChecked
        ? [...prevCategories, categoryId]
        : prevCategories.filter(id => id !== categoryId)
    );
  };

  return (
    <div className='absolute z-10 mt-8 rounded border border-mline bg-mfilter'>
      <div className='flex flex-col p-3'>
        <h1 className='text-center text-xl font-medium'>Category</h1>
        {categories.map(category => (
          <label key={category.id}>
            <Checkbox
              checked={checkedCategories.includes(category.id)}
              onChange={e =>
                handleCheckboxChange(category.id, e.target.checked)
              }
              color='primary'
            />
            {category.name}
          </label>
        ))}
        <button
          className='border border-mgold bg-mwhite py-1 text-mgold'
          onClick={() => onApply(checkedCategories)}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterPopover;
