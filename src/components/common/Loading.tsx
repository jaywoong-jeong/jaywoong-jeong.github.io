import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xl};
  color: ${theme.colors.accent};
  font-size: ${theme.fonts.sizes.md};
`;

export const Loading: React.FC = () => {
  return <LoadingContainer>Loading...</LoadingContainer>;
};
