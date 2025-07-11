import AiTrip from "../features/tirps/AiTrip";
import Header from "../ui/Header";

export default function Trips() {
  return (
    <div className="min-h-[calc(100vh-74px)] bg-light-300 px-8 pt-5">
      <Header
        title="Add new Trips"
        description="View and generate AI travel plans"
        buttonDescription="Trip with AI"
      />
      <AiTrip />
    </div>
  );
}
