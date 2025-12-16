
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "../pages/Homepage";
import { ToastContainer } from "react-toastify";
import JobDetail from "../pages/JobDetail";
import AddJob from "../pages/AddJob";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/jobs/:id" element={<JobDetail/>} />
        <Route path="/addJob" element={<AddJob/>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      </div>
    
  );
}

export default App;