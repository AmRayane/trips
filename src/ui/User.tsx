export default function User() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
      <div>
        <h2 className="text-dark-100 font-semibold text-[25px]">
          Welcome User 👋{" "}
        </h2>
        <p className="text-gray-100">
          Track activity, trends, & popular destinations in real time
        </p>
      </div>
      <button className="max-w-[400px] flex gap-2 items-center justify-center bg-primary-100 text-white  py-2  rounded-lg md:px-9">
        <img src="/plus.svg" />
        Create new trip{" "}
      </button>
    </div>
  );
}
