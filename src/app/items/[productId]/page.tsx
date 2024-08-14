"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import useFetch from "@/lib/hooks/useFetch";
import heartIcon from "@/assets/icons/ic_heart.png";
import { getProductId } from "@/core/api";
import { INITIAL_PRODUCTID, DEFAULT_IMAGE_URL } from "../../../constants";
import InquiryInput from "@/components/Items/ItemInfo/InquiryInput";
import Main from "@/components/common/Layout/Main";

function ItemInfo() {
  const { productId } = useParams();
  const numericProductId = Number(productId);

  const { data: productData = INITIAL_PRODUCTID } = useFetch(
    getProductId,
    {
      productId,
    },
    INITIAL_PRODUCTID
  );

  const imageSrc =
    Array.isArray(productData.images) && productData.images.length > 0
      ? productData.images[0]
      : DEFAULT_IMAGE_URL;

  const [favoriteCount, setFavoriteCount] = useState(
    productData.favoriteCount || 0
  );

  // 하트 클릭 핸들러
  const handleHeartClick = () => {
    setFavoriteCount((prevCount: number) => prevCount + 1);
  };

  // productData가 업데이트될 때 favoriteCount 업데이트
  useEffect(() => {
    setFavoriteCount(productData.favoriteCount || 0);
  }, [productData]);

  return (
    <Main>
      <section className="flex gap-6 max-md:flex max-md:flex-col max-md:content-center">
        <Image
          className={`rounded-2xl block max-w-full  max-md:w-full max-md:h-full ${
            imageSrc === DEFAULT_IMAGE_URL ? "item-default-img" : ""
          }`}
          width={486}
          height={486}
          src={imageSrc}
          alt={productData.name}
        />
        <div className="relative flex flex-col gap-3 flex-1 text-gray-800">
          <div className="flex flex-col gap-4 font-semibold">
            <h1 className="text-2xl">{productData.name}</h1>
            <h2 className="text-[40px]">{productData.price}원</h2>
          </div>
          <div className="border-[1px] border-gray-100" />
          <div className="flex flex-col gap-4 font-normal text-gray-600">
            <h3 className="mt-6 font-semibold">상품 소개</h3>
            <p>{productData.description}</p>
          </div>
          <div className="flex flex-col gap-4 text-gray-600">
            <h3 className="mt-6 font-semibold">상품 태그</h3>
            <ul className="tags">
              {(productData.tags || []).map((tag: string, index: number) => (
                <li
                  key={index}
                  className="rounded-3xl bg-gray-100 text-gray-800 px-4 py-[6px] inline"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex px-3 py-1 rounded-[35px] border-gray-200 border-2 absolute gap-1 bottom-0 max-md:-bottom-12 max-md:right-0">
            <button onClick={handleHeartClick}>
              <Image src={heartIcon} alt="하트 아이콘" width={24} height={24} />
            </button>
            <span className="text-gray-500 font-medium">{favoriteCount}</span>
          </div>
        </div>
      </section>
      <InquiryInput productId={numericProductId} />
    </Main>
  );
}

export default ItemInfo;
