import { create } from 'zustand';

type DeviceType = 'mobile' | 'laptop';

interface DeviceState {
  activeDevice: DeviceType;
  setActiveDevice: (device: DeviceType) => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  activeDevice: 'laptop',
  setActiveDevice: (device) => set({ activeDevice: device }),
}));
