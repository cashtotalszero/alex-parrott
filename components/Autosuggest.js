import Autosuggest from 'react-autosuggest';
import styled from 'styled-components';

const AutosuggestWrapper = styled.div`
  padding: 10px 0;
`;

import { SKILL_NAMES, SKILL_TYPES } from '../constants/skills';

const languages = [...Object.values(SKILL_NAMES), ...Object.values(SKILL_TYPES)];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter((language) => regex.test(language));
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

  componentDidMount() {
    console.log('Mounted: ', this.state.value);
  }

  onChange = (event, { newValue, method }) => {
    console.log('Value = ');
    console.log(newValue);

    this.props.onChange(newValue);

    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
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
