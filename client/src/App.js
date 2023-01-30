// import './App.css';
import { ProfileCard } from './components/ProfileCard';
import { ProfileForm } from './components/ProfileForm';
import { UserForm } from './components/UserForm';

function App() {
  return (
    <div>
      <h1>Hello, bitches</h1>
      <UserForm />
      <h1>Social Media</h1>
      <ProfileForm />
      <ProfileCard />
    </div>
  );
}

export default App;
