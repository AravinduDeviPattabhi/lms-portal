import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import CodingProblems from "../pages/CodingProblems";
import Assignments from "../pages/Assignments";
import Contests from "../pages/Contests";
import Leaderboard from "../pages/Leaderboard";
import Settings from "../pages/Settings";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />

        <Route
          path="/coding-problems"
          element={
            <Layout>
              <CodingProblems />
            </Layout>
          }
        />

        <Route
          path="/assignments"
          element={
            <Layout>
              <Assignments />
            </Layout>
          }
        />

        <Route
          path="/contests"
          element={
            <Layout>
              <Contests />
            </Layout>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <Layout>
              <Leaderboard />
            </Layout>
          }
        />

        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;