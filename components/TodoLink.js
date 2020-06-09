import PropTypes from 'prop-types';
import Button from './Button';

const TodoLink = ({ active, children, onClick }) => (
  <Button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
    width="32%"
    height="40px"
  >
    {children}
  </Button>
);

TodoLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoLink;
