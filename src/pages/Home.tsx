import Career from '@/components/mainPage/Career';
import Intro from '@/components/mainPage/Intro';
import Outro from '@/components/mainPage/Outro';
import Skills from '@/components/mainPage/Skills';
// import Story from '@/components/mainPage/Story';
// import Projects from '@/components/mainPage/Projects';
// import Contact from '@/components/mainPage/Contact';
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-w-[1024px]">
      <Intro />
      <Skills />
      <Career />
      {/* <Story /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Outro />
    </section>
  );
}
