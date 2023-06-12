import {useDispatch} from "react-redux";
import {setFilter} from "../../redux/filterSlice";

import {StyledContainer} from './styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const searchHandler = event => {
    dispatch(setFilter(event.currentTarget.value))
  };
  return (
    <StyledContainer className='filter-wrap'>
      <span className='label-name'>Find contacts by name:</span>
      <input
        className='form-input'
        type='text'
        name='filter'
        title='Enter the name of your contact'
        onChange={event => searchHandler(event)}
      />
    </StyledContainer>
  );
}
