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
import ViewProfile from "./pages/viewProfile"

if (true) {
  // Random
  console.log("True!!");
}

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
            path = "viewProfile/:id" element = { <ViewProfile />} />
          </Routes>
        </ModalProvider>
      </AuthProvider>
    </>
  );
};

export default App;
