import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xl};
  color: #dc3545;
  font-size: ${theme.fonts.sizes.md};
`;

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <ErrorContainer>Error: {error}</ErrorContainer>;
};
