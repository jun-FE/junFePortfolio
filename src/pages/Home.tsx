import Career from '@/components/mainPage/Career';
import Intro from '@/components/mainPage/Intro';
import Outro from '@/components/mainPage/Outro';
import Skills from '@/components/mainPage/Skills';
import Gallery from '@/components/mainPage/Gallery';
// import Story from '@/components/mainPage/Story';
// import Projects from '@/components/mainPage/Projects';
// import Contact from '@/components/mainPage/Contact';
import { useDeviceStore } from '@/stores/deviceStore';
import clsx from 'clsx';
import CareerMobile from '@/components/mainPage/CareerMobile';

export default function Home() {
  const { activeDevice, isRealMobile } = useDeviceStore();
  // 375px 프레임 + 검은 배경 + 사이드 텍스트는 PC에서 모바일을 미리보는 연출.
  // 실제 폰에서는 프레임 없이 전체폭으로 mobile 레이아웃만 그린다.
  const showFrame = activeDevice === 'mobile' && !isRealMobile;

  return (
    <div
      className={clsx(
        'w-full flex flex-col items-center justify-center',
        showFrame ? 'bg-black' : 'bg-white'
      )}
    >
      <div
        className={clsx(
          ' h-content items-center justify-center transition-all duration-500 bg-[#fff]',
          showFrame ? 'w-[375px] ' : 'w-full'
        )}
      >
        {!isRealMobile && (
          <div
            className={clsx(
              'text-white text-[60px] font-bold fixed  left-[calc(50%_+_210px)] transition-all duration-200',
              showFrame ? 'top-[calc(100%_-_270px)]' : 'top-[100%]'
            )}
          >
            Youngjun's
            <br />
            Portfolio
            <br />
            Mobile
          </div>
        )}
        <Intro />
        <Skills />
        {activeDevice === 'mobile' ? <CareerMobile /> : <Career />}
        <Gallery />
        {/* <Story /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
        <Outro />
      </div>
    </div>
  );
}
