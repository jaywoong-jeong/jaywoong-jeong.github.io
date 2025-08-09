import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Card = styled.div`
  margin-bottom: ${theme.spacing.xxxl};
`;

export const ItemCard = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.sm};
`;

export const SectionCard = styled.div`
  margin-bottom: ${theme.spacing.xxl};
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${theme.spacing.md};
  font-size: ${theme.fonts.sizes.md};
  line-height: 1.4;
`;
