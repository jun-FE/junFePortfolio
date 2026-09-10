import { useEffect } from 'react';
import { MOBILE_QUERY, useDeviceStore } from '@/stores/deviceStore';

/** 뷰포트 폭 변화를 deviceStore.isRealMobile에 동기화 */
export function useViewportSync() {
  const syncViewport = useDeviceStore((s) => s.syncViewport);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const handleChange = (e: MediaQueryListEvent) => syncViewport(e.matches);

    syncViewport(mql.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, [syncViewport]);
}
