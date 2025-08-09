import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin-top: 0;
  position: relative;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${theme.colors.accent};
  font-size: ${theme.fonts.sizes.xs};
  cursor: pointer;
  
  &:hover {
    color: ${theme.colors.light};
  }
`;

export const SkillTag = styled.span`
  background-color: ${theme.colors.backgroundCard};
  padding: 0.15rem 0.4rem;
  border-radius: ${theme.layout.borderRadius};
  font-size: ${theme.fonts.sizes.xs};
  color: ${theme.colors.light};
`;
