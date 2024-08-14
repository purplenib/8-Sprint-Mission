import { Article } from "@/DTO/article";
import LikeCount from "@/components/common/UI/LikeCount";
import Image from "next/image";
import { DEFAULT_IMAGE_URL } from "@/constants";

interface BasicPostCardProps {
  article: Article;
}

const BasicPostCard = ({ article }: BasicPostCardProps) => {
  return (
    <li className="flex flex-col px-4 pt-4 rounded gap-4 bg-gray-50">
      <div className="flex justify-between gap-3">
        <h2 className="text-xl font-semibold text-gray-900">
          {article.content}
        </h2>
        <Image
          src={article.image || DEFAULT_IMAGE_URL}
          className="aspect-1 border-gray-200 border-2 rounded-md"
          alt={article.title}
          width={72}
          height={72}
        />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <p className="text-gray-600">{article.writer.nickname}</p>
          <p className="text-sm text-gray-400 flex items-center">
            {article.createdAt.replace(/T.*Z/, "")}
          </p>
        </div>
        <LikeCount count={article.likeCount} />
      </div>
      <hr className="border border-gray-200 mt-6" />
    </li>
  );
};

export default BasicPostCard;
