import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import { AppContainer, Footer } from './components/layout/AppContainer';
import { Column, ColumnContent } from './components/layout/Column';
import { ProfileSection } from './components/content/ProfileSection';
import { CVSectionComponent } from './components/content/CVSection';
import { ContentRenderer } from './components/content/ContentRenderer';
import { useMarkdownData } from './hooks/useMarkdownData';
import { APP_CONFIG, type MenuType } from './constants/config';

function App() {
  const [activeMenu, setActiveMenu] = React.useState<MenuType>(APP_CONFIG.defaultMenu);
  const { projects, publications, artwork, profile, loading, error } = useMarkdownData();

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Column>
          <Header title="Profile" />
          <ColumnContent>
            <ProfileSection data={profile} />
          </ColumnContent>
        </Column>

        <Column>
          <Header 
            title={activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)} 
            showMenu={true} 
            onMenuSelect={setActiveMenu}
          />
          <ColumnContent>
            <ContentRenderer 
              activeMenu={activeMenu}
              projects={projects}
              publications={publications}
              artwork={artwork}
              loading={loading}
              error={error}
            />
          </ColumnContent>
        </Column>
        
        <Column>
          <Header title="CV" />
          <ColumnContent>
            <CVSectionComponent />
          </ColumnContent>
        </Column>
        <Footer>
          © 2024-{new Date().getFullYear()} Jaywoong Jeong · Last Updated {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </Footer>
      </AppContainer>
    </>
  );
}

export default App;