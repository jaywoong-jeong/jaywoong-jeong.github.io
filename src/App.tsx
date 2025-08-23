import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import { AppContainer } from './components/layout/AppContainer';
import { Column, ColumnContent, ColumnFooter } from './components/layout/Column';
import { ProfileSection } from './components/content/ProfileSection';
import { CVSectionComponent } from './components/content/CVSection';
import { ContentRenderer } from './components/content/ContentRenderer';
import MobileNavigation from './components/MobileNavigation';
import { useMarkdownData } from './hooks/useMarkdownData';
import { APP_CONFIG, type MenuType } from './constants/config';

function App() {
  const [activeMenu, setActiveMenu] = React.useState<MenuType | 'cv'>(APP_CONFIG.defaultMenu);
  const { projects, publications, artwork, profile, loading, error } = useMarkdownData();

  // CV 섹션을 표시할지 결정
  const showCV = activeMenu === 'cv';

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Column>
          <Header title="Profile" />
          <ColumnContent>
            <ProfileSection data={profile} />
          </ColumnContent>
          <ColumnFooter>
            © 2024-{new Date().getFullYear()} Jaywoong Jeong <br></br> Last Updated {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </ColumnFooter>
        </Column>

        <Column>
          <Header 
            title={activeMenu === 'cv' ? 'CV' : activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)} 
            showMenu={activeMenu !== 'cv'} 
            onMenuSelect={setActiveMenu}
          />
          <ColumnContent>
            {activeMenu === 'cv' ? (
              <CVSectionComponent />
            ) : (
              <ContentRenderer 
                activeMenu={activeMenu as MenuType}
                projects={projects}
                publications={publications}
                artwork={artwork}
                loading={loading}
                error={error}
              />
            )}
          </ColumnContent>
        </Column>
        
        {/* 데스크톱/태블릿에서만 별도 CV 컬럼 표시 */}
        <Column className="cv-column">
          <Header title="CV" />
          <ColumnContent>
            <CVSectionComponent />
          </ColumnContent>
        </Column>
      </AppContainer>
      
      {/* 모바일 하단 네비게이션 */}
      <MobileNavigation 
        activeMenu={activeMenu}
        onMenuSelect={setActiveMenu}
      />
    </>
  );
}

export default App;