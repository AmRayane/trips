import { useState } from "react";
import { TiDelete } from "react-icons/ti";

type UserProps = {
  title: string;
  description: string;
  buttonDescription: string;
  handleClick?: () => void;
  children: React.ReactNode;
};
export default function User({
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
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start ">
        <div>
          <h2 className="text-dark-100 font-semibold text-[25px]">{title}</h2>
          <p className="text-gray-100">{description}</p>
        </div>
        <button
          className="max-w-[400px] flex gap-2 items-center justify-center bg-primary-100 text-white  py-2  rounded-lg md:px-9"
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
        <div className="absolute right-0 z-30 fix  top-[85px] w-[100%] h-[calc(100%-85px)]  backdrop-blur flex items-center justify-center  ">
          {children}
        </div>
      )}
    </>
  );
}
