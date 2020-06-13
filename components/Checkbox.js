/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Yes, these styles were mostly ripped from the W3Schools example!
const StyledCheckbox = styled.div`
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${({ theme }) => `${theme.colors.palette6}`};
  }

  .container:hover input ~ .checkmark {
    background-color: ${({ theme }) => `${theme.colors.greyLightest}`};
  }

  .container input:checked ~ .checkmark {
    background-color: ${({ theme }) => `${theme.colors.palette5}`};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const Checkbox = ({ children, checked, onChange }) => (
  <StyledCheckbox>
    <label className="container">
      {children}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark" />
    </label>
  </StyledCheckbox>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
