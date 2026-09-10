import { careerList, companyList } from '@/data/list';
import { CareerItem } from '../Career/CareerItem';
import type { CareerItemType } from '@/type/type';

// 데스크탑 Career는 회사당 한 화면이라 한 회사가 여러 페이지로 나뉘어 있을 수 있다.
// 모바일은 세로로 흐르니 같은 회사가 연속되면 한 카드로 합친다.
const groups = companyList.reduce<
  { company: (typeof companyList)[number]; items: CareerItemType[] }[]
>((acc, company, index) => {
  const items = careerList[index]?.careerList ?? [];
  const prev = acc[acc.length - 1];
  if (prev && prev.company.name === company.name) {
    prev.items = [...items, ...prev.items]; // 최신 페이지가 뒤에 오므로 앞에 붙인다
  } else {
    acc.push({ company, items: [...items] });
  }
  return acc;
}, []);

const CareerMobile = () => {
  return (
    <div className="w-full bg-white py-[50px]" id="career">
      <div className="w-full px-5 flex flex-col gap-10">
        <h1 className="text-3xl font-bold border-b-2 border-black pb-2">
          Experience
        </h1>

        {groups.map(({ company, items }) => (
          <div
            key={company.id}
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
              {items.map((careerItem) => (
                <CareerItem key={careerItem.id} item={careerItem} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerMobile;
