export default function UserBarInformation() {
  return (
    <div className="grid grid-cols-[40%_40%_17%_3%] px-5 py-4 text-[#7F7E83] md:grid-cols-[25%_25%_15%_15%_17%_3%]">
      <p>NAME</p>
      <p>EMAIL ADDRESS</p>
      <p className="hidden md:block">DATE JOINED</p>
      <p className="hidden md:block">ITINERARY CREATED</p>
      <p>STATUS</p>
      <p></p>
    </div>
  );
}
