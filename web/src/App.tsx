import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./routes/login-page";
import { SignUp } from "./routes/signup-page";
import { Home } from "./routes/home";


export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

