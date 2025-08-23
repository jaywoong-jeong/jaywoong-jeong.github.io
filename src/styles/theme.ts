export const theme = {
  colors: {
    primary: '#2c2c2c',
    secondary: '#4a4a4a',
    tertiary: '#555555',
    accent: '#888888',
    light: '#666666',
    border: '#e0e0e0',
    background: '#ffffff', // 흰색 배경
    backgroundLight: '#f8f8f8', // 연한 회색
    backgroundCard: '#f0f0f0' // 카드용 배경
  },
  fonts: {
    system: '"Roboto Mono", Monaco, "Courier New", monospace',
    modern: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    artistic: '"Times New Roman", "Georgia", "Playfair Display", serif',
    sizes: {
      xs: '0.5625rem',    // 9px
      sm: '0.6rem',       // 9.6px  
      md: '0.6375rem',    // 10.2px
      lg: '0.675rem',     // 10.8px
      xl: '0.75rem',      // 12px
      xxl: '0.8rem'       // 12.8px
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600
    }
  },
  spacing: {
    xs: '0.3rem',
    sm: '0.3rem',
    md: '1rem', 
    lg: '1.5rem',
    xl: '2rem',
    xxl: '2.5rem',
    xxxl: '3rem'
  },
  layout: {
    gridColumns: '0.618fr 1.618fr 1fr',
    headerHeight: '60px',
    borderRadius: '2px',
    borderRadiusLarge: '4px'
  },
  // 반응형 브레이크포인트 추가
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1025px'
  },
  // 모바일용 설정 추가
  mobile: {
    headerHeight: '50px',
    spacing: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1.25rem',
      lg: '2rem',
      xl: '2.5rem',
      xxl: '3rem',
      xxxl: '4rem'
    },
    fonts: {
      sizes: {
        xs: '0.875rem',    // 14px
        sm: '1rem',        // 16px
        md: '1.125rem',    // 18px
        lg: '1.25rem',     // 20px
        xl: '1.5rem',      // 24px
        xxl: '1.75rem'     // 28px
      }
    }
  }
} as const;

export type Theme = typeof theme;
