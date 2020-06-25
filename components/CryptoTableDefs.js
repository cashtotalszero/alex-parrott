/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getCoinImageSrc } from '../utilities/crypto';

const Image = styled.img`
  width: 30px;
  /* padding: 0 10px 0 30px; */
  padding-right: 10px;
`;

const StyledRank = styled.div`
  display: flex;
  align-items: center;
`;

const StyledChange = styled.div`
  color: ${({ value, theme }) => {
    const { red, blue, green } = theme.colors;
    if (value === '0.00%') {
      return blue;
    }
    return parseFloat(value) > 0 ? green : red;
  }};
`;

const ChangeCell = ({ value }) => <StyledChange value={value}>{value}</StyledChange>;

const RankCell = ({ row, value }) => {
  const name = value;
  const { rank } = row.original;
  const id = row.original.name;

  return (
    <StyledRank>
      {/* <span>{`${rank}`}</span> */}
      <Image src={getCoinImageSrc(id)} />
      <span>{`${name}`}</span>
    </StyledRank>
  );
};

const columnDefs = [
  {
    Header: 'RANK',
    accessor: 'rank',
    // Cell: (props) => <RankCell {...props} />,
    // disableSortBy: true,
  },
  {
    Header: 'CURRENCY',
    accessor: 'fullName',
    Cell: (props) => <RankCell {...props} />,
    // disableSortBy: true,
  },
  {
    Header: 'PRICE',
    accessor: 'price',
  },
  {
    Header: 'MARKET CAP',
    accessor: 'marketCap',
  },
  {
    Header: '24H CHANGE',
    accessor: 'change24H',
    Cell: (props) => <ChangeCell {...props} />,
  },
];

ChangeCell.propTypes = {
  value: PropTypes.string.isRequired,
};

RankCell.propTypes = {
  row: PropTypes.shape({
    original: PropTypes.shape({
      rank: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  value: PropTypes.string.isRequired,
};

export default columnDefs;
