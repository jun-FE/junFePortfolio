import { careerList, companyList } from '@/data/list';
import { CareerItem } from '../Career/CareerItem';
import type { CareerItemType } from '@/type/type';

const CareerMobile = () => {
  return (
    <div className="w-full bg-white py-[50px]" id="career">
      <div className="w-full px-5 flex flex-col gap-10">
        <h1 className="text-3xl font-bold border-b-2 border-black pb-2">
          Experience
        </h1>

        {companyList.map((company, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border border-black p-4"
          >
            <div className="py-2">
              <h2 className="text-2xl font-bold">{company.name}</h2>
              <div className="text-sm mt-1">
                <p>{company.date}</p>
                <p>
                  {company.team} | {company.position}
                </p>
              </div>
              <p className="text-sm mt-1">{company.work}</p>
            </div>

            <div className="flex flex-col gap-6 pl-2">
              {careerList[index]?.careerList.map(
                (careerItem: CareerItemType) => (
                  <CareerItem key={careerItem.id} item={careerItem} />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerMobile;
