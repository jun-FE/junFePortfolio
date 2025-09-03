import { ArrowUpOutlined } from '@ant-design/icons';

const Outro = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="h-screen w-full bg-white pt-[80px]" id="outro">
      <div className="max-w-[1024px] w-full h-full mx-auto flex flex-col gap-4 items-center justify-center">
        <div className="h-[50px]">
          <button
            onClick={() => scrollToSection('intro')}
            className="flex flex-col items-center hover:bg-black hover:text-white hover:mt-[-10px] transition-all duration-500 p-[8px] rounded-full"
          >
            <ArrowUpOutlined className="text-[30px]" />
          </button>
        </div>
        <h1 className="text-[50px] font-bold">
          포트폴리오 페이지는 아직 제작중입니다.
        </h1>
        <div className="text-2xl">
          샘플 이미지와 반응형, 모션 등이 추가로 적용될 예정입니다.
        </div>
        <div className="py-[20px]">
          <div className="w-[400px] h-[5px] bg-black" />
        </div>
        <div className="pb-[50px]">잘 부탁드립니다.</div>
      </div>
    </div>
  );
};

export default Outro;
