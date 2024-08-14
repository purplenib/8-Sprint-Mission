"use client";
import React, { useState } from "react";
import searchIcon from "@/assets/icons/ic_search.png";
import Image from "next/image";

interface SearchFormProps {
  divClassName?: string;
  inputClassName?: string;
  onSearch: (searchTerm: string) => void;
}

function SearchForm({
  divClassName,
  inputClassName,
  onSearch,
}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={`${divClassName} relative`}>
      <Image
        src={searchIcon}
        alt="돋보기 아이콘"
        className="absolute top-1/2 transform -translate-y-1/2 left-6 cursor-pointer"
        onClick={handleSearch}
        width={16}
        height={16}
      />
      <input
        className={`${inputClassName} flex text-gray-400 bg-gray-100 outline-none rounded-xl py-[9px] h-full pr-5 pl-14`}
        placeholder="검색할 상품을 입력해주세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
}

export default SearchForm;
