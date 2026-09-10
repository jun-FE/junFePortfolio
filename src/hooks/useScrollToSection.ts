import { useCallback } from 'react';

/** 고정 헤더 높이만큼 보정해서 섹션 상단으로 스크롤 */
export function useScrollToSection() {
  return useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const header = document.querySelector('header');
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    // 첫 섹션(intro)은 헤더 뒤로 들어가는 게 의도된 레이아웃(pt-[80px])이라 보정 없이 맨 위로
    const top =
      sectionId === 'intro'
        ? 0
        : element.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);
}
