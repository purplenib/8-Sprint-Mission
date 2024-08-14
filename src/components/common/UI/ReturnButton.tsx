import { useRouter } from "next/navigation";
import backIc from "@/assets/icons/ic_back.png";
import Image from "next/image";

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
      <Image src={backIc} alt="돌아가기 아이콘" width={24} height={24} />
    </button>
  );
}

export default ReturnButton;
