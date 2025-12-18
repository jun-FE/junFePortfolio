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

export default function Home() {
  const { activeDevice } = useDeviceStore();

  return (
    <div
      style={{
        backgroundColor: activeDevice === 'mobile' ? '#c0c' : '#fff',
      }}
      className={clsx(
        'flex flex-col items-center justify-center w-full transition-all duration-500 bg-[#c0c]',
        activeDevice === 'mobile' && 'w-[375px]'
      )}
    >
      <Intro />
      <Skills />
      <Career />
      <Gallery />
      {/* <Story /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Outro />
    </div>
  );
}
