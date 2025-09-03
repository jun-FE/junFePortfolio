import Career from '@/components/mainPage/Career';
// import Contact from '@/components/mainPage/Contact';
import Intro from '@/components/mainPage/Intro';
import Outro from '@/components/mainPage/Outro';
// import Projects from '@/components/mainPage/Projects';
// import Skills from '@/components/mainPage/Skills';
// import Story from '@/components/mainPage/Story';
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-w-[1024px]">
      <Intro />
      {/* <Story /> */}
      <Career />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Outro />
    </section>
  );
}
