import gsap from "gsap";
import React, { useRef, useState } from "react";

interface Props {
  children: string;
  tag: string;
}

const LoginInput = ({children, tag}: Props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = (focused: boolean) => {
    if (focused || inputValue !== "") {
      gsap.to(`#${tag}`, {
        fontSize: "0.75rem",
        duration: 0.1,
        y: 4,
      });
    } else {
      gsap.to(`#${tag}`, {
        fontSize: "1rem",
        duration: 0.1,
        y: 12,
      });
    }
  };

  return (
    <div
      className="bg-zinc-800 p-4 rounded-3xl font-light font-sans cursor-text h-[62px] flex flex-col justify-center"
      onClick={handleBoxClick}
    >
      <p className="text-zinc-400 relative translate-y-3 tracking-tighter" id={tag}>
        {children}
      </p>
      <input
        type="text"
        className="bg-inherit outline-none w-full placeholder-zinc-400"
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
        onChange={handleInputChange}
        ref={inputRef}
        value={inputValue}
      />
    </div>
  );
};

export default LoginInput;
