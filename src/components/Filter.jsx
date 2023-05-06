import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p style={{ margin: '0' }}>Find contact by name</p>
      <input
        type="text"
        placeholder="Filter by name"
        value={value}
        onChange={e => dispatch(setFilter(e.target.value))}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
};

export default Filter;
