import { useNavigate } from "react-router";

type UserProps = {
  title: string;
  description: string;
  buttonDescription: string;
  handleClick?: () => void;
};
export default function Header({
  title,
  description,
  buttonDescription,
}: UserProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div>
        <h2 className="text-[25px] font-semibold text-dark-100">{title}</h2>
        <p className="text-gray-100">{description}</p>
      </div>
      <button
        className="flex max-w-[400px] items-center justify-center gap-2 rounded-lg bg-primary-100 py-2 text-white md:px-9"
        onClick={() => {
          navigate("/form/tripform");
        }}
      >
        <img src="/plus.svg" />
        {buttonDescription}
      </button>
    </div>
  );
}
