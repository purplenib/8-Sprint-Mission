import { useRouter } from "next/router";
import { Product } from "DTO/product";
import { DEFAULT_IMAGE_URL } from "../../constants";
import LikeCount from "components/common/UI/LikeCount";

const ItemContainer = ({ item }: { item: Product }) => {
  const router = useRouter();

  const handleItemClick = (productId: number) => {
    router.push(`/items/${productId}`);
  };

  const imageUrl = item.images ? item.images[0] : DEFAULT_IMAGE_URL;

  return (
    <figure className="flex flex-col gap-4">
      <img
        src={imageUrl}
        alt={item.name}
        className={
          String(item.images) === DEFAULT_IMAGE_URL
            ? "item-default-img"
            : "item-img object-cover"
        }
        onClick={() => handleItemClick(item.id)}
      />
      <div className="flex flex-col gap-[6px] text-gray-800">
        <h2 className="text-[0.8rem]" onClick={() => handleItemClick(item.id)}>
          {item.name}
        </h2>
        <h3 className="font-bold text-base">{item.price}원</h3>
        <LikeCount count={item.favoriteCount} />
      </div>
    </figure>
  );
};

export default ItemContainer;
