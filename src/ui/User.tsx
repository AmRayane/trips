type UserProps = {
  title: string;
  description: string;
  buttonDescription: string;
  handleClick?: () => void;
};
export default function User({
  title,
  description,
  buttonDescription,
  handleClick,
}: UserProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start ">
      <div>
        <h2 className="text-dark-100 font-semibold text-[25px]">{title}</h2>
        <p className="text-gray-100">{description}</p>
      </div>
      <button
        className="max-w-[400px] flex gap-2 items-center justify-center bg-primary-100 text-white  py-2  rounded-lg md:px-9"
        onClick={handleClick}
      >
        <img src="/plus.svg" />
        {buttonDescription}
      </button>
    </div>
  );
}
