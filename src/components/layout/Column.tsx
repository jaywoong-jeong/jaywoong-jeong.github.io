import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { scrollStyles } from '../../styles/mixins';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  
  &:not(:last-child) {
    border-right: 1px solid ${theme.colors.border};
  }
`;

export const ColumnContent = styled.div`
  flex: 1;
  padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.xxxl} ${theme.spacing.md};
  ${scrollStyles}
`;

export const ColumnFooter = styled.div`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  font-size: ${theme.fonts.sizes.xs};
  color: ${theme.colors.accent};
`;
