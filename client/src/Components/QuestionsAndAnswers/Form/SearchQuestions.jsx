import React, {useState} from 'react';
import styled from 'styled-components';

var SearchQuestions = ({search}) => {

  const [entry, setEntry] = useState('');

  var handleChange = (e) => {
    setEntry(e.target.value);
    search(e.target.value)
  };

  return (
    <FormInput value={entry} onChange={handleChange} placeholder="Have a Question? Search for answers..."/>
  )
};

// styled components
var FormInput = styled.input`
  width: 50%;
  padding: 5px;
`;

export default SearchQuestions