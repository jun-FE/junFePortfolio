# junFePortfolio

프론트엔드 개발자 이영준의 포트폴리오 사이트. React 19 + TypeScript + Vite + Tailwind CSS 기반의 단일 페이지 스크롤 사이트입니다.

## 기술 스택

- React 19, TypeScript
- Vite 5
- Tailwind CSS 3
- Zustand (디바이스 모드 상태)
- @ant-design/icons

## 구조

```
src/
├── App.tsx                 # 헤더 + Home, 뷰포트 동기화 훅 호출
├── pages/Home.tsx          # 섹션 조합, PC용 모바일 미리보기 프레임
├── components/
│   ├── layout/Header.tsx   # 고정 헤더, 섹션 네비게이션(IntersectionObserver), 📱/💻 토글
│   ├── mainPage/           # Intro / Skills / Career / CareerMobile / Gallery / Outro
│   ├── Career/CareerItem.tsx
│   └── Skills/SkillsBox.tsx
├── hooks/
│   ├── useViewportSync.ts     # matchMedia → deviceStore.isRealMobile
│   └── useScrollToSection.ts  # 헤더 높이 보정 스크롤
├── stores/deviceStore.ts   # activeDevice(laptop|mobile) + isRealMobile
├── data/list.tsx           # 경력·회사·스킬·갤러리 데이터 (이미지 import 포함)
├── type/type.tsx
└── assets/images/          # 최적화된 WebP (scripts/optimize-images.mjs 출력)
```

## 디바이스 모드

- **PC**: 헤더의 📱/💻 토글로 데스크탑 레이아웃과 375px 프레임 안의 모바일 레이아웃을 전환해 볼 수 있습니다(데모 용도).
- **실제 모바일(≤768px)**: 토글·프레임 없이 모바일 레이아웃이 전체폭으로 렌더링됩니다. `useViewportSync`가 `matchMedia`로 감지합니다.

## 개발

```bash
yarn            # 의존성 설치
yarn dev        # http://localhost:5173
yarn build      # tsc -b && vite build → dist/
yarn preview    # 빌드 결과 미리보기
```

## 이미지 추가/교체

원본 스크린샷은 `raw-images/`(gitignore)에 두고 아래 스크립트로 `src/assets/images/*.webp`를 생성합니다. 최대 폭 1600px, WebP 품질 80.

```bash
yarn optimize:images
```

그 후 `src/data/list.tsx`에서 `@/assets/images/<이름>.webp`를 import해 `galleryList`에 연결합니다.

## 배포

Vercel — `vercel.json`의 rewrite로 SPA 라우팅 처리. 빌드 커맨드 `yarn build`, 출력 `dist`.
(Netlify를 쓸 경우 `public/_redirects`가 같은 역할을 합니다.)

### 배포 전 남은 항목

- `public/og.png` — 실제 OG 이미지(1200×630)로 교체
- `public/resume.pdf` — 실제 이력서로 교체 (현재 페이지에서 링크되진 않음)
- 배포: https://jun-fe-portfolio.vercel.app/
