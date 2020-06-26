/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import styled, { withTheme } from 'styled-components';

import useRefetch from '../../../hooks/useRefetch';
import { wrapper } from '../../../store';
import { fetchSingleItem, fetchAllData, setName } from '../../../actions/crypto';
import { getCurrencyRouteParam } from '../../../utilities/crypto';
import { DEFAULT_CURRENCY } from '../../../constants/crypto';
// import { themePropType } from '../styles';
import { CRYPTO_PAGE, CRYPTO_DETAILS_PAGE } from '../../../constants/urls';

import CurrencySelector from '../../../components/CryptoCurrencySelector';
import Spinner from '../../../components/LoadingSpinner';
import CoinHeader from '../../../components/CryptoCoinHeader';
import CoinDetailsGrid from '../../../components/CryptoDetailsGrid';
import BackArrow from '../../../components/CryptoBackArrow';
import ErrorMessage from '../../../components/CryptoErrorMessage';
import Page from '../../../components/Page';

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => `${theme.colors.navy}`};
`;

const StyledHeader = styled.header`
  display: flex;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => `${theme.colors.white}`};
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const DetailsPage = ({ theme }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector(({ crypto }) => crypto.selected);
  const currency = useSelector(({ crypto }) => crypto.currency);
  const listLoading = useSelector(({ crypto }) => crypto.listLoading);
  const itemLoading = useSelector(({ crypto }) => crypto.itemLoading);
  const listError = useSelector(({ crypto }) => crypto.listError);
  const itemError = useSelector(({ crypto }) => crypto.itemError);

  const isLoading = listLoading || itemLoading;
  const { fullName, marketCap, rank, supplyTotal, volume24H, name, price } = data || '';
  const hasError = listError.length || itemError.length;
  const showSpinner = (isLoading || !data) && !hasError;
  const contentReady = !isLoading && !hasError && !!data;

  useRefetch(fetchSingleItem(router.query.name, currency));

  return (
    <Page>
      <PageWrapper>
        <StyledHeader>
          <HeaderLeft>
            <Link href={CRYPTO_PAGE}>
              <a>
                <BackArrow />
              </a>
            </Link>
            {contentReady && <CoinHeader name={fullName} id={name} price={price} />}
          </HeaderLeft>

          <CurrencySelector
            disabled={!contentReady}
            onChange={(newCurrency) => {
              const updatedRoute = getCurrencyRouteParam(router.asPath, newCurrency);
              router.replace(CRYPTO_DETAILS_PAGE, updatedRoute);
              dispatch(fetchSingleItem(router.query.name, newCurrency));
            }}
          />
        </StyledHeader>

        {showSpinner && <Spinner color={theme.colors.blue} />}
        {contentReady && (
          <CoinDetailsGrid
            name={name}
            rank={rank}
            marketCap={marketCap}
            volume24H={volume24H}
            supplyTotal={supplyTotal}
          />
        )}

        {hasError && (
          <ErrorMessage
            headline="There was a problem loading this coin data"
            advice="Please go back and select a currency from the list."
            textColour={theme.colors.blue}
          />
        )}
      </PageWrapper>
    </Page>
  );
};

// Next.js pre-render actions
export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
  const { crypto } = store.getState();

  if (!crypto.selected || !crypto.cryptoData.length) {
    store.dispatch(setName(query.name));
    store.dispatch(fetchAllData(query.currency || DEFAULT_CURRENCY));
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

DetailsPage.propTypes = {
  // theme: themePropType.isRequired,
};

export default withTheme(DetailsPage);