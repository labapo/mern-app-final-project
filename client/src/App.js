import { ProfileCard } from "./components/ProfileCard";
import { ProfileForm } from "./components/ProfileForm";
import { UserForm } from "./components/UserForm";
import { Welcome } from "./components/Welcome";
import { Home } from "./components/Home"
import { SingleProfile } from "./components/SingleProfile";

function App() {
  return (
    <div>
      <h1>Hello, bitches</h1>
      <Welcome />
      <Home />
      <UserForm />
      <h1>Social Media</h1>
      <ProfileForm />
      <ProfileCard />
      <SingleProfile />
    </div>
  );
}

export default App;
