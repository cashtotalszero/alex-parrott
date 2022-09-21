import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import styled from 'styled-components';

import Button from '../../ui/Button';
import { AutosuggestWrapper } from './styles';
import { SKILL_NAMES, SKILL_TYPES } from '../../../constants/skills';

const suggestionItems = [...Object.values(SKILL_NAMES), ...Object.values(SKILL_TYPES)];
let debounceTimer: ReturnType<typeof setTimeout>;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
`;

type Props = {
    setSkillsFilter: (val?: string) => void;
};

export const SearchBox = (props: Props) => {
    const { setSkillsFilter } = props;

    const [lookup, setLookup] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(
        () => () => {
            clearTimeout(debounceTimer);
        },
        [setSkillsFilter],
    );

    const onChange = (value: string) => {
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            setSkillsFilter(value || undefined);
        }, 250);
    };

    const escapeRegexCharacters = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const getSuggestionValue = (suggestion: string) => suggestion;

    const renderSuggestion = (suggestion: string) => <span>{suggestion}</span>;

    const getSuggestions = (searchTerm: string) => {
        const escapedValue = escapeRegexCharacters(searchTerm.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp(`^${escapedValue}`, 'i');

        return suggestionItems.filter((option) => regex.test(option));
    };

    const handleChange = (event: any, { newValue }: { newValue: string }) => {
        setLookup(newValue);
        onChange(newValue);
    };

    const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => setSuggestions([]);

    const inputProps = {
        placeholder: 'e.g. React',
        value: lookup,
        onChange: handleChange,
    };

    const clearSearch = () => {
        setLookup('');
        onChange('');
    };

    return (
        <div>
            <Header>
                <span>Search:</span>
                {lookup.length ? <Button onClick={clearSearch}>clear</Button> : null}
            </Header>

            <AutosuggestWrapper>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
            </AutosuggestWrapper>
        </div>
    );
};
