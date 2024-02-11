import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/phonebookSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>{' '}
      <input
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </div>
  );
};

export default Filter;
