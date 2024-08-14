import Link from "next/link";

interface ButtonProps {
  buttonText: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

function Button({ buttonText, href, className, onClick }: ButtonProps) {
  // LinkButton
  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${className} bg-brand text-white content-center text-center w-[133px] rounded-lg max-md:w-auto max-md:px-5`}
      >
        {buttonText}
      </Link>
    );
  }

  // Button
  return (
    <button
      onClick={onClick}
      className={`${className} bg-brand text-white content-center text-center rounded-lg px-6 h-full max-md:w-auto max-md:px-5 `}
    >
      {buttonText}
    </button>
  );
}

export default Button;
