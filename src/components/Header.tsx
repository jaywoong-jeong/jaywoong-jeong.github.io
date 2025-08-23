import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { media, touchOptimized } from '../styles/mixins';
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
  
  /* 모바일: 높이와 여백 조정 */
  ${media.mobile} {
    height: ${theme.mobile.headerHeight};
    padding: ${theme.mobile.spacing.sm} ${theme.mobile.spacing.md} ${theme.mobile.spacing.md} ${theme.mobile.spacing.md};
    
    &::after {
      left: ${theme.mobile.spacing.md};
      right: ${theme.mobile.spacing.md};
    }
  }
`;

const MenuContainer = styled.div`
  /* 모바일에서 메뉴 버튼 숨기기 */
  ${media.mobile} {
    display: none;
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
  
  /* 모바일: 드롭다운 위치와 크기 조정 */
  ${media.mobile} {
    right: -${theme.mobile.spacing.sm};
    min-width: 140px;
    margin-top: ${theme.mobile.spacing.sm};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
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
  
  /* 모바일: 터치 최적화 */
  ${media.mobile} {
    padding: ${theme.mobile.spacing.md} ${theme.mobile.spacing.md};
    font-size: ${theme.mobile.fonts.sizes.sm};
    ${touchOptimized}
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
        <MenuContainer>
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
        </MenuContainer>
      )}
    </HeaderContainer>
  );
}

export default Header;
