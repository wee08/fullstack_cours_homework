import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import AllStudents from "./pages/AllStudnents/AllStudents.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import MobileTopBar from "./components/layout/MobileTopBar.jsx";
import { StudentProvider } from "./components/features/students/context/StudentContext.jsx";
import Toast from "./components/Toast.jsx";
import StudentDetail from "./pages/StudentDetails/StudentDetail.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <StudentProvider>
        <MobileTopBar />
        <div className="app-shell">
          <div className="sidebar-overlay" id="sidebarOverlay" />
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/allstudents" element={<AllStudents />} />
            <Route path="/studentDetail" element={<StudentDetail />} />
          </Routes>
        </div>
        <Toast />
      </StudentProvider>
    </BrowserRouter>
  );
};

export default App;
