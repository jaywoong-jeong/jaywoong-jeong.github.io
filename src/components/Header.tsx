import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Title } from './ui/Typography';
import { MenuButton } from './ui/Button';
import { type MenuType } from '../constants/config';

interface HeaderProps {
  title: string;
  showMenu?: boolean;
  onMenuSelect?: (menuType: MenuType) => void;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.md};
  background-color: ${theme.colors.background};
  position: sticky;
  top: 0;
  z-index: 10;
  height: ${theme.layout.headerHeight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: ${theme.spacing.md};
    right: ${theme.spacing.md};
    height: 1px;
    background-color: ${theme.colors.border};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.layout.borderRadiusLarge};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 20;
  margin-top: ${theme.spacing.sm};
`;

const MenuItem = styled.div`
  padding: 0.75rem ${theme.spacing.md};
  font-size: ${theme.fonts.sizes.sm};
  color: ${theme.colors.secondary};
  cursor: pointer;
  border-bottom: 1px solid ${theme.colors.backgroundCard};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${theme.colors.backgroundLight};
    color: ${theme.colors.primary};
  }
`;

// mhtml 파일에서 가져온 SVG 아이콘
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" height="24" width="24">
    <rect fill="currentColor" height="2" width="24" y="11.00" x="4.00"></rect>
    <rect fill="currentColor" height="2" width="24" y="19.00" x="4.00"></rect>
  </svg>
);

function Header({ title, showMenu, onMenuSelect }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuType: MenuType) => {
    if (onMenuSelect) {
      onMenuSelect(menuType);
    }
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {/* showMenu가 true일 때만 MenuButton을 보여줌 */}
      {showMenu && (
        <MenuButton onClick={handleMenuClick}>
          <MenuIcon />
          {isMenuOpen && (
            <DropdownMenu>
              <MenuItem onClick={() => handleMenuItemClick('projects')}>Projects</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('publications')}>Publications</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('design')}>Design</MenuItem>
            </DropdownMenu>
          )}
        </MenuButton>
      )}
    </HeaderContainer>
  );
}

export default Header;
