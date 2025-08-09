import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Hr = styled.hr`
  border: 0;
  height: 1px;
  background-color: ${theme.colors.border};
  margin: ${theme.spacing.md} 0; // 간격 축소
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: ${theme.spacing.sm};
`;

export const List = styled.ul`
  margin: ${theme.spacing.sm} 0;
  padding-left: 1.2rem;
  font-size: ${theme.fonts.sizes.sm};
  color: ${theme.colors.light};
`;
