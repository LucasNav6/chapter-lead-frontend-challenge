import React from "react";

interface ISelectWrapperProps {
  children: React.ReactNode;
  options: IOptions[];
}

interface IOptions {
  name: string;
  onClick: () => void;
  textColor?: string;
}

const SelectWrapper = ({children, options}: ISelectWrapperProps) => {
  const selectRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
  //When the user clicks outside the select, close it
  React.useEffect(() => {
    if (!selectRef.current) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectRef]);
  return (
    <div className="select-wrapper" ref={selectRef}>
      <span onClick={() => setOpen(!open)}>{children}</span>
      {open && (
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <button onClick={option.onClick} style={{color: option.textColor || "#000"}}>
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectWrapper;
