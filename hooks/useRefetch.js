import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const REFETCH_TIME = 60000;

function useRefetch(fetchAction) {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);

  useEffect(() => {
    let refetchTimer = null;

    const refetchData = () => {
      dispatch(fetchAction);
      refetchTimer = setTimeout(refetchData, REFETCH_TIME);
    };

    refetchTimer = setTimeout(refetchData, REFETCH_TIME);
    return () => {
      clearTimeout(refetchTimer);
    };
  }, [currency]);
}

export default useRefetch;
