import { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

  .react-autosuggest__suggestion--highlighted {
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

class AutosuggestApp extends Component {
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
      placeholder,
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

AutosuggestApp.defaultProps = {
  placeholder: 'Type something...',
  suggestions: [],
};

AutosuggestApp.propTypes = {
  placeholder: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

export default AutosuggestApp;
