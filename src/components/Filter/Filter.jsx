import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterReducer';

 const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input onChange={e => dispatch(changeFilter(e.target.value))} type="text" />
  );
};

export default Filter;
