import Autosuggest from 'react-autosuggest';
import styled from 'styled-components';

const AutosuggestWrapper = styled.div`
  padding: 10px 0;

  .react-autosuggest__suggestions-list {
    background-color: ${({ theme }) => `${theme.colors.white}`};
    border-radius: 5px;
    border: ${({ theme }) => `solid 1px ${theme.colors.palette2}`};
    cursor: pointer;
  }

  .react-autosuggest__suggestion {
    color: ${({ theme }) => `${theme.colors.black}`};
  }

  .react-autosuggest__suggestion:hover {
    background-color: ${({ theme }) => `${theme.colors.palette5}`};
    color: ${({ theme }) => `${theme.colors.white}`};
  }
`;

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestionValue(suggestion) {
  return suggestion;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion}</span>;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
    };
  }

  getSuggestions = (value) => {
    const { suggestions } = this.props;
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return suggestions.filter((option) => regex.test(option));
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
    this.props.onChange(newValue);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { placeholder } = this.props;
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: placeholder || 'Type something...',
      value,
      onChange: this.onChange,
    };

    return (
      <AutosuggestWrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </AutosuggestWrapper>
    );
  }
}

export default App;
