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
  const { activeDevice } = useDeviceStore();

  return (
    <div className="w-full bg-black flex flex-col items-center justify-center">
      <div
        className={clsx(
          ' h-content items-center justify-center transition-all duration-500 bg-[#fff]',
          activeDevice === 'mobile' ? 'w-[375px] ' : 'w-full'
        )}
      >
        <div
          className={clsx(
            'text-white text-[60px] font-bold fixed  left-[calc(50%_+_210px)] transition-all duration-200',
            activeDevice === 'mobile'
              ? 'top-[calc(100%_-_270px)]'
              : 'top-[100%]'
          )}
        >
          Youngjun's
          <br />
          Portfolio
          <br />
          Mobile
        </div>
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
