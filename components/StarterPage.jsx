import Header from "./Header";
import UserLogin from "./UserLogin";
import "../cssFiles/StarterPage.css";

export default function StarterPage() {
  return (
    <div className="starterpage">
      <Header />
      <UserLogin />
    </div>
  );
}
