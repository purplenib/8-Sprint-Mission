import { useState } from "react";
import ItemContainer from "./ItemContainer";
import DropDownList from "../common/UI/DropDownList";
import Pagination from "./Pagination";
import { getProducts } from "core/api";
import useFetch from "lib/hooks/useFetch";
import { useSearch } from "lib/hooks/useSearch";
import { usePagination } from "lib/hooks/usePagination";
import { ProductResponse } from "DTO/product";
import SearchForm from "../common/UI/SearchForm";
import ReturnButton from "components/common/UI/ReturnButton";
import Button from "components/common/UI/Button";
import emptyReplyImage from "assets/images/img_reply_empty.png";
import useResize from "lib/hooks/useResize";

function AllItemsContainer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("최신순");
  const [pageSize, setPageSize] = useState<number>(10);

  const { data: productsData } = useFetch<ProductResponse>(
    getProducts,
    {
      page: 1,
      pageSize: pageSize,
      orderBy: selectedCategory === "최신순" ? "recent" : "favorite",
      keyword: "",
    },
    { list: [], totalCount: 0 }
  );

  const { list = [], totalCount: fetchedTotalCount = 0 } = productsData;

  const getProperty = (item: any) => item.name || "";

  useResize(setPageSize, { mobile: 4, tablet: 6, pc: 10 });

  const { handleSearch, handleReset, filteredResults } = useSearch(
    productsData,
    () => {},
    getProperty
  );

  const { currentPage, setCurrentPage, totalCount } = usePagination(
    filteredResults,
    fetchedTotalCount,
    list.length
  );

  return (
    <>
      <section className="flex flex-col gap-6">
        <div className="flex justify-between content-center flex-wrap">
          <h1 className="font-bold text-xl content-center">판매 중인 상품</h1>
          <div className="flex flex-row gap-[10px]">
            <SearchForm inputClassName="w-[325px]" onSearch={handleSearch} />
            <Button buttonText="상품 등록하기" to="/addItem" />
            <DropDownList
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <ul className="grid grid-cols-5 grid-rows-2 gap-6 max-xl:grid-cols-3 max-md:grid-cols-2">
          {filteredResults.length === 0 ? (
            <li className="col-span-5 row-span-2 flex gap-2 mt-20 mb-10 flex-col items-center justify-center w-full">
              <img
                src={emptyReplyImage}
                alt="검색 내용 없음"
                className="w-[196px] h-[196px]"
              />
              <p className="text-gray-400">검색된 상품이 없어요.</p>
              <ReturnButton buttonText="전체 상품 보기" onClick={handleReset} />
            </li>
          ) : (
            filteredResults.map((item) => (
              <ItemContainer key={item.id} item={item} />
            ))
          )}
        </ul>
      </section>
      {totalCount > 0 && (
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}

export default AllItemsContainer;
