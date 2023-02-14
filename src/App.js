import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Loading from "./pages/loading";
import Verification from "./pages/verification";
import { AuthProvider, ProtectedRoute } from "./context/auth";
import { ModalProvider } from "./context/modal";
import Welcome from "./pages/welcome";
import ViewProfile from "./pages/viewProfile";
import CohortsTeacherView from "./pages/CohortsTeacherView";
import Search from "./pages/Search";
import EditProfile from "./pages/editProfile";
import Cohorts from "./pages/cohort";

const App = () => {

  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="loading" element={<Loading />} />
            <Route path="verification" element={<Verification />} />
            <Route path="/profile/:id/edit" element={<ProtectedRoute><EditProfile /></ProtectedRoute>}/>
            <Route
              path={`profile/:id`}
              element={
                <ProtectedRoute>
                  <ViewProfile />
                </ProtectedRoute>
              }
            />

            <Route
              path={`cohorts-teacher-view`}
              element={
                <ProtectedRoute>
                  <CohortsTeacherView />
                </ProtectedRoute>
              }
            />

            <Route
              index
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="welcome"
              element={
                <ProtectedRoute disabledNav={true}>
                  <Welcome />
                </ProtectedRoute>
              }
            />
            <Route
              path="search"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route 
              path="cohorts"
              element={
                <ProtectedRoute>
                  <Cohorts />
                </ProtectedRoute>
              }
            />
          </Routes>
        </ModalProvider>
      </AuthProvider>
    </>
  );
};

export default App;