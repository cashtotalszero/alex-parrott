import styled from 'styled-components';

export const AutosuggestWrapper = styled.div`
    padding: 10px 0;

    .react-autosuggest__suggestions-list {
        background-color: ${({ theme }) => `${theme.colors.white}`};
        border-radius: 5px;
        border: ${({ theme }) => `solid 1px ${theme.colors.palette2}`};
        cursor: pointer;
        padding-left: 0;
    }

    .react-autosuggest__suggestion {
        color: ${({ theme }) => `${theme.colors.black}`};
    }

    .react-autosuggest__suggestion--highlighted {
        background-color: ${({ theme }) => `${theme.colors.palette5}`};
        color: ${({ theme }) => `${theme.colors.white}`};
    }
`;
