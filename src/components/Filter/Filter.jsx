import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterReducer';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input onChange={e => dispatch(changeFilter(e.target.value))} type="text" />
  );
};
