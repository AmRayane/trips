import { useState } from "react";
import { TiDelete } from "react-icons/ti";

type UserProps = {
  title: string;
  description: string;
  buttonDescription: string;
  handleClick?: () => void;
  children: React.ReactNode;
};
export default function Header({
  title,
  description,
  buttonDescription,
  children,
}: UserProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }
  return (
    <>
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-[25px] font-semibold text-dark-100">{title}</h2>
          <p className="text-gray-100">{description}</p>
        </div>
        <button
          className="flex max-w-[400px] items-center justify-center gap-2 rounded-lg bg-primary-100 py-2 text-white md:px-9"
          onClick={() => {
            handleShowForm();
          }}
        >
          {showForm ? (
            <div className="flex items-center gap-2">
              <TiDelete size={20} />
              cancel
            </div>
          ) : (
            <>
              <img src="/plus.svg" />
              {buttonDescription}
            </>
          )}
        </button>
      </div>
      {showForm && (
        <div className="fix absolute right-0 top-[85px] z-30 flex h-[calc(100%-85px)] w-[100%] items-center justify-center backdrop-blur">
          {children}
        </div>
      )}
    </>
  );
}
