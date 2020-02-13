import React from 'react';
import PropTypes from 'prop-types';
import styled from  'styled-components';

const Btn = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  color: ${props => props.color || "palevioletred"};
  background: transparent;
  border: 1px solid ${props => props.color || "palevioletred"};
  
  &:hover {
      background: ${props => props.color || "palevioletred"};
  }
`;

function Button(props) {
    return <Btn color={props.color}>Push</Btn>;
}

Button.propTypes = {
    color: PropTypes.string
}

export default Button;