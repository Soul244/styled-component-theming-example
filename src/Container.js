import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerStyled = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const Container = ({ text }) => (
  <ContainerStyled>
    {text}
  </ContainerStyled>
);

Container.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Container;
