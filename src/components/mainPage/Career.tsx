import { careerList, companyList } from '@/data/list';
import { CareerItem } from '../Career/CareerItem';
import type { CareerItemType, CareerItemWrapperType } from '@/type/type';
import { useState } from 'react';

const Career = () => {
  const [wrapperIndex, setWrapperIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const careerListMap = careerList.map(
    (wrapper: CareerItemWrapperType, wrapperIndex: number) => (
      <div
        className="flex flex-col w-full h-screen gap-10 items-start justify-center"
        key={wrapperIndex}
      >
        {wrapper.careerList.map((careerItem: CareerItemType) => (
          <CareerItem key={careerItem.id} item={careerItem} />
        ))}
      </div>
    )
  );
  const handleWrapperIndex = (index: number) => {
    if (index < 0) return;
    if (index > 3) return;
    setWrapperIndex(index);
    setScrollY(window.innerHeight * index);
  };

  return (
    <div
      className="h-screen w-full bg-white pt-[50px] overflow-hidden "
      id="career"
    >
      <div className="max-w-[1024px] w-full h-full mx-auto flex gap-4 items-center justify-between">
        <div className="w-full h-full flex flex-col gap-4 items-start justify-center">
          <div className="flex flex-col items-start gap-2 pb-[30px]">
            <h1 className="text-4xl font-bold pb-[15px]">
              {companyList[wrapperIndex].name}
            </h1>
            <p className="text-md text-black pl-[10px]">
              {companyList[wrapperIndex].date}
            </p>

            <p className="text-md text-black pl-[10px]">
              {companyList[wrapperIndex].team}
            </p>
            <p className="text-md text-black pl-[10px]">
              {companyList[wrapperIndex].position}
            </p>
            <p className="text-md text-black pl-[10px]">
              {companyList[wrapperIndex].work}
            </p>
          </div>
          <div className="flex justify-between items-center w-full px-[10px]">
            <button
              className="flex justify-start items-center gap-2 hover:ml-[-5px] transition-all duration-500"
              onClick={() => handleWrapperIndex(wrapperIndex - 1)}
            >
              <div>
                <div className="w-[2px] h-[15px] rotate-45 mb-[-3px] bg-black" />
                <div className="w-[50px] h-[2px]  ml-[-5px] bg-black" />
              </div>
              <div>previous</div>
            </button>
            <button
              className="flex justify-end items-center gap-2 hover:mr-[-8px] transition-all duration-500"
              onClick={() => handleWrapperIndex(wrapperIndex + 1)}
            >
              <div>next</div>
              <div>
                <div className="w-[50px] h-[2px]  mr-[-5px] bg-black inline-block" />
                <div className="w-[2px] h-[15px] rotate-[-45deg] mb-[-1px] bg-black inline-block" />
              </div>
            </button>
          </div>
          {/* <div className="flex justify-end items-center w-full">
            <button
              className="flex justify-end items-center gap-2 hover:ml-[8px] transition-all duration-500"
              onClick={() => handleWrapperIndex(wrapperIndex + 1)}
            >
              <div>next</div>
              <div>
                <div className="w-[50px] h-[2px]  mr-[-5px] bg-black inline-block" />
                <div className="w-[2px] h-[15px] rotate-[-45deg] mb-[-1px] bg-black inline-block" />
              </div>
            </button>
          </div> */}
        </div>
        <div className="w-full h-full flex">
          <div className="w-[2px] h-full bg-black" />
          <div className="w-full relative">
            <div
              style={{ top: `-${scrollY}px` }}
              className="w-full h-full min-h-screen absolute left-0 transition-all duration-500"
            >
              {careerListMap}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
