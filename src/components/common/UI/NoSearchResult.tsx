import emptyReplyImg from "@/assets/images/img_reply_empty.png";
import Image from "next/image";

interface NoSearchResultProps {
  category: string;
}

const NoSearchResult = ({ category }: NoSearchResultProps) => {
  return (
    <>
      <Image
        src={emptyReplyImg}
        alt="검색 결과 없음"
        width={196}
        height={196}
      />
      <p className="text-gray-400">검색된 {category}이 없어요.</p>
    </>
  );
};

export default NoSearchResult;
