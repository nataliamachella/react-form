import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ReactForm from "./components/reactForm/ReactForm";
import Response from "./components/response/Response";
import UserContext from "./context/UserContext";

function App() {
  
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactForm />} />
          <Route path="/response" element={<Response />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
