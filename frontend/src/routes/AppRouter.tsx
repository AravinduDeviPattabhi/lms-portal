import { Navigate, Route, Routes } from "react-router-dom";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import CoursesPage from "../features/courses/pages/CoursesPage";
import LoginPage from "../features/auth/pages/LoginPage";
import CreateCoursePage from "../features/courses/pages/CreateCoursePage";
import EditCoursePage from "../features/courses/pages/EditCoursePage";

import StudentsPage from "../features/students/pages/StudentsPage";
import CreateStudentPage from "../features/students/pages/CreateStudentPage";
import EditStudentPage from "../features/students/pages/EditStudentPage";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <CoursesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses/create"
        element={
          <ProtectedRoute>
            <CreateCoursePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/courses/:id/edit"
        element={
          <ProtectedRoute>
            <EditCoursePage />
          </ProtectedRoute>
        }
      />
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students/create"
          element={
            <ProtectedRoute>
              <CreateStudentPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/students/edit/:id"
          element={
            <ProtectedRoute>
              <EditStudentPage />
            </ProtectedRoute>
          }
        />

    </Routes>
  );
}

export default AppRouter;