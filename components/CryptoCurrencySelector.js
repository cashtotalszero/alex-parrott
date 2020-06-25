import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setCurrency } from '../actions/crypto';
import { CURRENCIES_ARRAY } from '../constants/crypto';

const StyledSelect = styled.select`
  width: 100px;
  height: 50px;
`;

const CurrencySelector = ({ onChange, disabled }) => {
  const dispatch = useDispatch();
  const currency = useSelector(({ crypto }) => crypto.currency);

  return (
    <StyledSelect
      value={currency}
      disabled={disabled}
      onChange={(e) => {
        dispatch(setCurrency(e.target.value));
        onChange(e.target.value);
      }}
    >
      {[...CURRENCIES_ARRAY].map((cur) => (
        <option key={cur} value={cur} disabled={false}>
          {cur}
        </option>
      ))}
    </StyledSelect>
  );
};

CurrencySelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CurrencySelector;
