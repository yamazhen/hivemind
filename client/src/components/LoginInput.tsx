import gsap from "gsap";
import React, { useRef } from "react";

interface Props {
  children: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
}

const LoginInput = ({
  children,
  id,
  value,
  onChange,
  type = "text",
  name,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  const handleBoxClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputFocus = (focused: boolean) => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        fontSize: focused || value !== "" ? "0.75rem" : "1rem",
        y: focused || value !== "" ? 4 : 12,
        duration: 0.1,
      });
    }
  };

  return (
    <div
      className="bg-zinc-800 p-4 rounded-3xl font-light font-sans cursor-text h-[62px] flex flex-col justify-center"
      onClick={handleBoxClick}
    >
      <p
        className="text-zinc-400 relative translate-y-3 tracking-tighter"
        id={id}
        ref={labelRef}
      >
        {children}
      </p>
      <input
        name={name}
        type={type}
        className="bg-inherit outline-none w-full placeholder-zinc-400"
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
        onChange={onChange}
        ref={inputRef}
        value={value}
      />
    </div>
  );
};

export default LoginInput;
