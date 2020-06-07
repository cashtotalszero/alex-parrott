import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 16px 16px;
`;

const StyledButtonsWrapper = styled.div`
  padding: 10px 0;
`;

const StyledButton = styled.button`
  margin: 2px 4px;
  background-color: ${({ theme }) => `${theme.colors.palette5}`};
  color: ${({ theme }) => `${theme.colors.white}`};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border: none;
  cursor: pointer;
  font-family: 'Lexend Tera';
  border-radius: 2px;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const StyledSelect = styled.select`
  width: 250px;
`;

const Pagination = ({
  previousPage,
  nextPage,
  gotoPage,
  setPageSize,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  pageSize,
  description,
  maxResults,
}) => (
  <StyledPagination>
    <span>
      {'page '}
      <strong>{`${pageIndex + 1} of ${pageCount || 1}`}</strong>
    </span>

    <StyledButtonsWrapper>
      <StyledButton type="button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {'<<'}
      </StyledButton>
      <StyledButton type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </StyledButton>
      <StyledButton type="button" onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </StyledButton>
      <StyledButton type="button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </StyledButton>
    </StyledButtonsWrapper>

    <StyledSelect
      value={pageSize}
      onChange={(e) => {
        setPageSize(Number(e.target.value));
      }}
      disabled={maxResults === 0}
    >
      {[5, 10, 20, 30, maxResults].map((size) => (
        <option key={size} value={size}>
          {size === maxResults ? 'Show me everything' : `Show max ${size}`}
        </option>
      ))}
    </StyledSelect>

    {description.length && <p>{description}</p>}
  </StyledPagination>
);

Pagination.defaultProps = {
  description: '',
};

Pagination.propTypes = {
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  gotoPage: PropTypes.func.isRequired,
  setPageSize: PropTypes.func.isRequired,
  canPreviousPage: PropTypes.bool.isRequired,
  canNextPage: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  maxResults: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default Pagination;
