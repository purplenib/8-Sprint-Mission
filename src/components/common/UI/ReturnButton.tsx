import { useRouter } from "next/router";
import backIc from "assets/icons/ic_back.png";

interface ReturnButtonProps {
  buttonText: string;
  onClick?: () => void;
}

function ReturnButton({ buttonText, onClick }: ReturnButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(); // onClick이 있을 경우 호출
    } else {
      router.back(); // 기본 동작
    }
  };

  return (
    <button
      className="w-[248px] bg-brand my-12 rounded-[40px] mx-auto flex content-center justify-center p-3 text-gray-100 text-lg gap-3"
      onClick={handleClick}
    >
      {buttonText}
      <img src={backIc} className="h-6" alt="돌아가기 아이콘" />
    </button>
  );
}

export default ReturnButton;
