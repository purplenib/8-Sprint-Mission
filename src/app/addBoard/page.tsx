"use client";
import Main from "@/components/common/Layout/Main";
import AddItemImage from "@/components/AddItem/AddItemImage";
import Button from "@/components/common/UI/Button";

function AddBoard() {
  return (
    <Main>
      <section className="flex justify-between h-11 gap-8">
        <h1 className="font-bold text-gray-800 text-xl">게시글 쓰기</h1>
        <Button buttonText="등록" className="h-full" />
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="articleTitle"
            className="font-bold text-gray-800 text-lg"
          >
            *제목
          </label>
          <input
            type="text"
            id="articleTitle"
            name="articleTitle"
            placeholder="제목을 입력해주세요"
            className="outline-none rounded-xl w-full py-4 px-6 bg-gray-100"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="articleContent"
            className="font-bold text-gray-800 text-lg"
          >
            *내용
          </label>
          <input
            type="text"
            id="articleContent"
            name="articleContent"
            placeholder="내용을 입력해주세요"
            className="outline-none h-[282px] w-full rounded-xl py-4 px-6 bg-gray-100 text-gray-400"
          />
        </div>
        <h2 className="font-bold text-gray-800 text-lg">이미지</h2>
      </section>
    </Main>
  );
}

export default AddBoard;
