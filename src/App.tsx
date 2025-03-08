import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  ResearchPage,
  PeoplePage,
  ProductPage,
  CareersPage,
  ContactPage,
  EventPage,
  CollaboratorsPage,
  AdminLoginPage,
  AdminDashboardPage,
} from "./routes.tsx";
import Event from "./pages/AdminPage/Event.tsx";
import Collaboration from "./pages/AdminPage/Collabration.tsx";
import Contacts from "./pages/AdminPage/Contacts.tsx";
import Publication from "./pages/AdminPage/Publication.tsx";
import Staff from "./pages/AdminPage/Staff.tsx";
import Students from "./pages/AdminPage/Students.tsx";
import Resaerch from "./pages/AdminPage/Resaerch.tsx";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research-facilities/*" element={<ResearchPage />}>
          <Route path=":submenu" element={<ResearchPage />} />
        </Route>
        <Route path="/people/*" element={<PeoplePage />}>
          <Route path=":submenu/" element={<PeoplePage />} />
        </Route>
        <Route path="/about/*" element={<AboutPage />}>
          <Route path=":submenu/" element={<AboutPage />} />
        </Route>
        <Route path="/products/*" element={<ProductPage />}>
          <Route path=":submenu" element={<ProductPage />} />
        </Route>
        <Route path="/careers/*" element={<CareersPage />}>
          <Route path=":submenu" element={<CareersPage />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Protected Admin Routes */}
        <Route path="/admin/*" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="event" element={<Event />} />
          <Route path="collabaration" element={<Collaboration />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="publication" element={<Publication />} />
          <Route path="people/research" element={<Resaerch />} />
          <Route path="people/staff" element={<Staff />} />
          <Route path="people/students" element={<Students />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
