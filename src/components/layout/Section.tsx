import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Section = styled.div`
  margin-bottom: ${theme.spacing.xxl};
`;

export const ProfileSection = styled.div`
  font-size: ${theme.fonts.sizes.lg};
  line-height: 1.6;
  color: ${theme.colors.secondary};
`;

export const ContactInfo = styled.div`
  margin-bottom: ${theme.spacing.xl};
  font-size: ${theme.fonts.sizes.md};
  line-height: 1.4;
  color: ${theme.colors.light};
`;
