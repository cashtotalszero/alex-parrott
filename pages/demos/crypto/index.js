import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import styled from 'styled-components';

import useRefetch from '../../../hooks/useRefetch';
import { wrapper } from '../../../store';
import { fetchAllData, setSelection } from '../../../actions/crypto';
import Table from '../../../components/CryptoTable';
import CurrencySelector from '../../../components/CryptoCurrencySelector';
import { getCurrencyRouteParam, getDetailsUrl } from '../../../utilities/crypto';
import coinTableDefs from '../../../components/CryptoTableDefs';
import { DEFAULT_CURRENCY } from '../../../constants/crypto';
import { CRYPTO_PAGE, CRYPTO_DETAILS_PAGE } from '../../../constants/urls';

import Page from '../../../components/Page';

const StyledHeader = styled.header`
  display: flex;
  padding: 20px 0px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (${({ theme }) => `${theme.display.lScreen}`}) {
    padding-right: 20px;
  }
`;

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const listLoading = useSelector(({ crypto }) => crypto.listLoading);
  const listError = useSelector(({ crypto }) => crypto.listError);
  const tableData = useSelector(({ crypto }) => crypto.cryptoData);
  const currency = useSelector(({ crypto }) => crypto.currency);

  useRefetch(fetchAllData(currency));

  // TODO: Add last updated time stamp

  return (
    <Page>
      <StyledHeader>
        <h1>Crypto Compare</h1>
        <CurrencySelector
          disabled={listLoading}
          onChange={(val) => {
            const updatedRoute = getCurrencyRouteParam(router.asPath, val);
            router.replace(CRYPTO_PAGE, updatedRoute);
            dispatch(fetchAllData(val));
          }}
        />
      </StyledHeader>

      <Table
        data={tableData}
        columnDefs={coinTableDefs}
        isLoading={listLoading}
        hasError={!!listError}
        onRowClick={(row) => {
          const { original } = row;
          dispatch(setSelection(original));
          router.push(CRYPTO_DETAILS_PAGE, getDetailsUrl(original.name, currency));
        }}
      />
    </Page>
  );
};

// Next.js pre-render actions
export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
  const { crypto } = store.getState();

  if (!crypto.cryptoData.length) {
    store.dispatch(fetchAllData(query.currency || DEFAULT_CURRENCY));
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

export default Index;
