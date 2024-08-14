import Image from "next/image";
import heartIc from "@/assets/icons/ic_heart.png";

interface LikeCountProps {
  count: number | undefined;
}

const LikeCount = ({ count }: LikeCountProps) => {
  return (
    <div className="flex items-center text-xs font-medium gap-1 text-gray-500">
      <button className="w-4 h-4 p-0 border-none">
        <Image src={heartIc} alt="하트 아이콘" className="w-full h-full" />
      </button>
      <div>{count}</div>
    </div>
  );
};

export default LikeCount;
