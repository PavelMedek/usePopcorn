import Link from "next/link";

const Button = ({ text, variant = "small" }) => {
  if (variant === "full") {
    return (
      <Link
        href="/netflix"
        className="bg-blue-500 py-4 w-full rounded-md font-bold text-lg text-center uppercase sm:py-2"
      >
        {text}
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      className="bg-blue-500 py-4 px-16 rounded-full font-bold text-lg sm:px-5 sm:py-2 sm:text-base"
    >
      {text}
    </Link>
  );
};

export default Button;
