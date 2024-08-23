import ManageJobs from "../components/ManageJobs";
import Calendar from "../components/Calendar";
import Contacts from "../components/Contacts";
import Network from "../components/Network";

export default function Content() {
  return (
    <>
      <Calendar />
      <ManageJobs />
      <Contacts />
      <Network />
    </>
  );
}
