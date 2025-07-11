import { useParams } from "react-router";

import CreateTrip from "../features/forms/CreateTrip";
import GeminiForm from "../features/forms/GeminiForm";
import AddNewUser from "../features/forms/AddNewUser";

export default function Form() {
  const { type } = useParams();
  if (type === "tripform") return <CreateTrip />;
  if (type === "geminiform") return <GeminiForm />;
  if (type === "userform") return <AddNewUser />;
  return <div></div>;
}
