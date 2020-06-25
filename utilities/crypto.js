import { GBP, USD, EUR, JPY, KRW } from '../constants/crypto';

export function numberWithCommas(x) {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function fixedNumber(num) {
  let rounded = parseFloat(num).toFixed(2);
  rounded = numberWithCommas(rounded);
  return rounded === '-0.00' ? '0.00' : rounded;
}

export function getCurrencySign(currency) {
  switch (currency) {
    case USD:
      return '$';
    case GBP:
      return '£';
    case EUR:
      return '€';
    case JPY:
      return '¥';
    case KRW:
      return '₩';
    default:
      return '';
  }
}

export const getCoinImageSrc = (id) => {
  switch (id) {
    case 'BTC':
      return '/crypto/btc.png';
    case 'ETH':
      return '/crypto/eth.png';
    case 'XRP':
      return '/crypto/xrp.png';
    case 'BCH':
      return '/crypto/bch.png';
    case 'EOS':
      return '/crypto/eos.png';
    case 'ADA':
      return '/crypto/ada.png';
    case 'BSV':
      return '/crypto/bsv.png';
    case 'LTC':
      return '/crypto/ltc.png';
    case 'ETC':
      return '/crypto/etc.png';
    case 'LINK':
      return '/crypto/link.png';
    case 'ZIL':
      return '/crypto/zil.png';
    case 'CRO':
      return '/crypto/cro.png';
    case 'USDT':
      return '/crypto/usdt.png';
    case 'HYN':
      return '/crypto/hyn.png';
    case 'TNCC':
      return '/crypto/tncc.png';
    case 'BNB':
      return '/crypto/bnb.png';
    case 'XTZ':
      return '/crypto/xtz.png';
    case 'HT':
      return '/crypto/ht.png';
    case 'HMR':
      return '/crypto/hmr.png';
    case 'PLF':
      return '/crypto/plf.png';
    default:
      return '/crypto/blockchain.png';
  }
};

export function parseCoinPrices(rawData, currency) {
  const { PRICE, MKTCAP, CHANGE24HOUR, VOLUME24HOUR, SUPPLY } = rawData;
  const sign = getCurrencySign(currency);

  return {
    price: `${sign}${fixedNumber(PRICE)}`,
    marketCap: `${sign}${numberWithCommas(Math.round(MKTCAP))}`,
    change24H: `${fixedNumber(CHANGE24HOUR)}%`,
    volume24H: numberWithCommas(Math.round(VOLUME24HOUR)),
    supplyTotal: numberWithCommas(Math.round(SUPPLY)),
  };
}

export function parseCoinInfo(rawData, currency, rank) {
  const { Name, Id, FullName } = rawData.CoinInfo;
  const prices = parseCoinPrices(rawData.RAW[currency], currency);

  return {
    rank: rank.toString(),
    name: Name,
    id: Id,
    fullName: FullName,
    ...prices,
  };
}

// Routing
export const getDetailsUrl = (name, currency = '') => {
  const currencyParam = currency ? `?currency=${currency}` : '';
  return `/demos/crypto/${name}${currencyParam}`;
};

export const getCurrencyRouteParam = (route, currency) => {
  let newRoute = '';

  if (route.includes('?currency=')) {
    newRoute = route.slice(0, -3);
    newRoute += currency;
  } else {
    newRoute += `?currency=${currency}`;
  }
  return newRoute;
};
