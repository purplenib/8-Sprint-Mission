import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import { getProducts } from "../../core/api";

// count items according to pageSize
const countPageItems = () => {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth < 1200) {
    return 2;
  } else {
    return 4;
  }
};

function BestItemsContainer() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(4);

  // get api data
  const fetchItemData = async ({ pageSize, orderBy }) => {
    try {
      const item = await getProducts({ page: 1, pageSize, orderBy });
      setItems(item.list);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      setItems([]);
    }
  };

  const measurePageSize = (e) => {
    setPageSize(countPageItems());
  };

  // get pageSize
  useEffect(() => {
    window.addEventListener("resize", measurePageSize);

    fetchItemData({ pageSize, orderBy: "favorite" });

    return (e) => {
      window.removeEventListener("resize", measurePageSize);
    };
  }, [pageSize]);

  return (
    <section className="best-items-container">
      <h1 className="section-title">베스트 상품</h1>
      <div className="best-items-list">
        {items.map((item) => (
          <ItemContainer key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default BestItemsContainer;
