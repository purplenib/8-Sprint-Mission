import { Article } from "@/DTO/article";
import LikeCount from "@/components/common/UI/LikeCount";
import bestBadgeImg from "@/assets/images/img_badge.png";
import Image from "next/image";
import { DEFAULT_IMAGE_URL } from "@/constants";

interface BestPostCardProps {
  article: Article;
}

const BestPostCard = ({ article }: BestPostCardProps) => {
  return (
    <li
      key={article.id}
      className="w-full flex flex-col px-6 gap-[10px] pb-3 bg-gray-50 rounded-lg max-xl:gap-4"
    >
      <Image src={bestBadgeImg} alt="베스트 뱃지" width={102} height={30} />
      <div className="flex justify-between gap-3 max-xl:gap-10 max-xl:flex-grow">
        <h2 className="text-xl text-gray-900 font-semibold">
          {article.content}
        </h2>
        <Image
          src={article.image || DEFAULT_IMAGE_URL}
          className="aspect-1 border-gray-200 border-2 rounded-md max-xl:my-auto"
          alt={article.title}
          width={72}
          height={72}
          layout="fixed"
        />
      </div>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500">{article.writer.nickname}</p>
        <LikeCount count={article.likeCount} />
        <p className="text-sm text-gray-400">
          {article.createdAt.replace(/T.*Z/, "")}
        </p>
      </div>
    </li>
  );
};

export default BestPostCard;
