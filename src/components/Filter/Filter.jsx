import { FilterSection, Input, StyledTitle, StyledSection } from './Filter.styled.js';

export const Filter = ({ filter, onSearchNumber }) => {
  return (
    <FilterSection>
      <StyledSection>

          <StyledTitle>Find contacts by name</StyledTitle>
      <Input
        type="text"
        value={filter}
        onChange={e => onSearchNumber(e.target.value)}
        placeholder="Number filter"
      />
      </StyledSection>
    
    </FilterSection>
  );
};
