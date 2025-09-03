import type { CareerItemType } from '@/type/type';

export const CareerItem = ({ item }: { item: CareerItemType }) => {
  return (
    <div className="flex items-start gap-2 ml-[-6px]">
      <div className="w-[10px] h-[10px] mt-[15px] bg-white border-[2px] border-black rounded-full" />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold whitespace-pre-line">{item.title}</h3>
        <div className="pl-[15px] pt-[10px]">
          {item.description.map((desc, index) => (
            <p key={index}>- {desc}</p>
          ))}
        </div>
        <div className="pl-[15px]">
          {item.stack.map((desc, index) => (
            <span className="inline-block font-bold text-sm" key={index}>
              {desc}
              {index !== item.stack.length - 1 && ','}&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
