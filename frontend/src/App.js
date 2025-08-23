import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage.new";
import SignupPage from "./pages/Signup";
import FindDoctors from "./pages/FindDoctors";
import ChatBot from './ChatBot';
import HealthReport from "./pages/HealthReport";
import Profile from "./pages/Profile"; 
import VideoConsult from "./pages/VideoConsult";
import WellnessLeaderboard from "./pages/Leaderboard";
import Campaigns from "./pages/Campaigns";

import AdminLayout from "./pages/Admin/AdminLayout";
import ReportsList from "./pages/Admin/ReportsList";
import ReportDetail from "./pages/Admin/ReportDetail";
import ReportTrends from "./pages/Admin/ReportTrends";
import ReportsMap from "./pages/Admin/ReportsMap";
import AppointmentsAll from "./pages/Admin/AppointmentsAll";
import CampaignsManage from "./pages/Admin/CampaignsManage";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public/User Pages with Header/Footer */}
          <Route path="/" element={<><Header /><HomePage /><Footer /></>} />
          <Route path="/login" element={<><Header /><LoginPage /><Footer /></>} />
          <Route path="/signup" element={<><Header /><SignupPage /><Footer /></>} />
          <Route path="/find-doctors" element={<><Header /><FindDoctors /><Footer /></>} />
          <Route path="/video-consult" element={<><Header /><VideoConsult /><Footer /></>} />
          <Route path="/campaigns" element={<><Header /><Campaigns /><Footer /></>} />
          <Route path="/ai-chatbot" element={<><Header /><ChatBot /><Footer /></>} />
          <Route path="/wellness-leaderboard" element={<><Header /><WellnessLeaderboard /><Footer /></>} />
          <Route path="/health-report" element={<><Header /><HealthReport /><Footer /></>} />
          <Route path="/profile/student" element={<><Header /><Profile /><Footer /></>} />

          {/* Doctor Dashboard (no Header/Footer) */}
          <Route path="/doctor" element={<DoctorDashboard />} />

          {/* Admin Layout with Nested Routes (no Header/Footer) */}
          {/* <Route path="/admin" element={<AdminLayout />}> */}
            <Route index element={<AdminDashboard />} />
            <Route path="reports" element={<ReportsList />} />
            <Route path="reports/:id" element={<ReportDetail />} />
            <Route path="reports/trends" element={<ReportTrends />} />
            <Route path="reports/map" element={<ReportsMap />} />
            <Route path="appointments" element={<AppointmentsAll />} />
            <Route path="campaigns" element={<CampaignsManage />} />
          {/* </Route> */}

          {/* Catch-All Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;