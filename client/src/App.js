// import { ProfileCard } from "./components/ProfileCard";
// import { ProfileForm } from "./components/ProfileForm";
import { Welcome } from "./components/Welcome";
import { Home } from "./components/Home";
// import { SingleProfile } from "./components/SingleProfile";
// import { LoadUsers } from "./components/LoadUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
