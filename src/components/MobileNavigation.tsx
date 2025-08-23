import styled from 'styled-components';
import { theme } from '../styles/theme';
import { media, touchOptimized } from '../styles/mixins';
import { type MenuType } from '../constants/config';

interface MobileNavigationProps {
  activeMenu: MenuType | 'cv';
  onMenuSelect: (menuType: MenuType | 'cv') => void;
}

const NavigationContainer = styled.nav`
  display: none;
  
  /* 모바일에서만 표시 */
  ${media.mobile} {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.background};
    border-top: 1px solid ${theme.colors.border};
    z-index: 100;
    padding: ${theme.mobile.spacing.xs} 0;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: space-around;
`;

const TabItem = styled.li`
  flex: 1;
  text-align: center;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: ${theme.mobile.spacing.md} ${theme.mobile.spacing.xs};
  background: none;
  border: none;
  color: ${props => props.isActive ? theme.colors.primary : theme.colors.accent};
  font-size: ${theme.mobile.fonts.sizes.sm};
  font-weight: ${props => props.isActive ? theme.fonts.weights.semibold : theme.fonts.weights.normal};
  cursor: pointer;
  transition: all 0.2s ease;
  ${touchOptimized}
  
  &:hover {
    color: ${theme.colors.primary};
  }
  
  /* 활성 탭 표시 */
  position: relative;
  
  ${props => props.isActive && `
    &::after {
      content: '';
      position: absolute;
      bottom: -${theme.mobile.spacing.xs};
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background-color: ${theme.colors.primary};
      border-radius: 1px;
    }
  `}
`;

const getMenuLabel = (menuType: MenuType | 'cv') => {
  switch (menuType) {
    case 'projects':
      return 'Projects';
    case 'publications':
      return 'Publications';
    case 'design':
      return 'Design';
    case 'cv':
      return 'CV';
    default:
      return 'Menu';
  }
};

function MobileNavigation({ activeMenu, onMenuSelect }: MobileNavigationProps) {
  const menuTypes: (MenuType | 'cv')[] = ['projects', 'publications', 'design', 'cv'];

  return (
    <NavigationContainer>
      <TabList>
        {menuTypes.map((menuType) => (
          <TabItem key={menuType}>
            <TabButton
              isActive={activeMenu === menuType}
              onClick={() => onMenuSelect(menuType)}
            >
              {getMenuLabel(menuType)}
            </TabButton>
          </TabItem>
        ))}
      </TabList>
    </NavigationContainer>
  );
}

export default MobileNavigation;
