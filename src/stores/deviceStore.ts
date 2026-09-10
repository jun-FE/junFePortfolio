import { create } from 'zustand';

type DeviceType = 'mobile' | 'laptop';

/** 이 폭 이하는 "실제 모바일 기기"로 간주 — 프레임 연출 없이 mobile 레이아웃을 강제한다 */
export const MOBILE_QUERY = '(max-width: 768px)';

const isNarrowViewport = () =>
  typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches;

interface DeviceState {
  /** 어떤 레이아웃을 그릴지 (PC에서는 헤더 토글로 선택) */
  activeDevice: DeviceType;
  /** 실제 뷰포트가 좁은지. true면 activeDevice는 mobile로 잠기고 토글/프레임이 숨겨진다 */
  isRealMobile: boolean;
  setActiveDevice: (device: DeviceType) => void;
  syncViewport: (isRealMobile: boolean) => void;
}

export const useDeviceStore = create<DeviceState>((set) => {
  const narrow = isNarrowViewport();
  return {
    activeDevice: narrow ? 'mobile' : 'laptop',
    isRealMobile: narrow,
    setActiveDevice: (device) =>
      set((state) => (state.isRealMobile ? {} : { activeDevice: device })),
    syncViewport: (isRealMobile) =>
      set({
        isRealMobile,
        // 좁아지면 mobile 강제, 다시 넓어지면 기본값(laptop)으로 복귀
        activeDevice: isRealMobile ? 'mobile' : 'laptop',
      }),
  };
});
