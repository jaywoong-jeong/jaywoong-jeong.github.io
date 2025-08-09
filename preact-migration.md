# React → Preact 마이그레이션 가이드

## 🎯 Preact 연동 가능성 분석

### ✅ 호환성 확인
현재 프로젝트의 기술 스택은 **Preact와 완벽 호환** 가능합니다:

- **React 19** → **Preact 10.x** (호환 API 지원)
- **Styled Components** → **완전 호환** (preact/compat 사용)
- **TypeScript** → **완전 지원**
- **Vite** → **공식 Preact 플러그인 지원**
- **Gray Matter** → **플랫폼 독립적**, 호환됨
- **Zustand** → **Preact 호환**

### 📊 장점 분석
- **번들 크기 감소**: React 45KB → Preact 3KB (90% 감소)
- **성능 향상**: 더 빠른 렌더링과 메모리 사용량 감소
- **기존 코드 유지**: API 호환성으로 코드 변경 최소화

## 🛠️ 마이그레이션 방법

### 1단계: Preact 설치
```bash
npm install preact
npm install @preact/preset-vite --save-dev
npm uninstall react react-dom @vitejs/plugin-react
```

### 2단계: Vite 설정 수정
\`vite.config.ts\` 파일을 다음과 같이 수정:

```typescript
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    }
  }
})
```

### 3단계: 패키지 의존성 업데이트
\`package.json\`에서 React 관련 타입 정의도 변경:

```bash
npm uninstall @types/react @types/react-dom
npm install @types/node  # 필요시
```

### 4단계: Import 문 수정 (선택사항)
기존 코드는 별칭으로 인해 수정 불필요하지만, 명시적으로 변경하려면:

```typescript
// 기존
import React from 'react';

// 변경 후
import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
```

## ⚠️ 주의사항

### 1. 호환성 체크사항
- **Styled Components**: preact/compat으로 완벽 호환
- **Custom Hooks**: 동일한 API, 변경 불필요
- **JSX**: 동일한 구문 지원

### 2. 잠재적 이슈
- 일부 React 전용 라이브러리는 테스트 필요
- 개발자 도구는 Preact DevTools 사용 권장

### 3. 성능 테스트 권장사항
- 번들 크기 측정
- 초기 로딩 시간 비교
- 런타임 성능 측정

## 🚀 마이그레이션 실행 계획

### Phase 1: 준비 (5분)
1. 현재 코드 백업
2. Preact 패키지 설치
3. Vite 설정 변경

### Phase 2: 테스트 (10분)
1. 개발 서버 실행 확인
2. 모든 페이지 렌더링 테스트
3. 인터랙션 기능 확인

### Phase 3: 최적화 (선택사항)
1. Preact 전용 최적화 적용
2. 불필요한 React 잔여물 제거
3. 번들 크기 분석

## 💡 권장사항

**즉시 마이그레이션 가능**: 현재 프로젝트는 단순한 구조로 위험성이 낮음

**마이그레이션 타이밍**: 
- ✅ 지금 실행 권장 (복잡도가 낮은 상태)
- ✅ 성능 개선이 즉시 체감 가능
- ✅ 향후 확장성 고려 시 유리

**대안 검토**:
- React 유지: 안정성 우선
- Preact 전환: 성능 및 경량화 우선
