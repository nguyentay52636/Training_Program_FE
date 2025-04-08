import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AdminPages from "./modules/Admin/pages/AdminPages";
import LoginPage from "./modules/Auth/pages/LoginPage";
import { AccountManagement } from "./modules/Auth/components/AccountManagement";
import PointManagement from "./modules/Auth/components/PointManagement/PointManagement";
import LecturerManager from "./modules/Auth/components/ManagerLecturer/LecturerManager";
import LessonPlanManager from "./modules/Auth/components/LessonPlan/LessonPlanManager";
import TrainingProgramManager from "./modules/Auth/components/TrainingProgram/TrainingProgramManager";
import ManagerDefault from "./modules/Auth/components/Default/ManagerDefault";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/dashboard",
      element: <AdminPages />,
      children: [
        { index: true, element: <ManagerDefault /> },
        { path: "lecturer", element: <LecturerManager /> },
        { path: "point", element: <PointManagement /> },
        { path: "account", element: <AccountManagement /> },
        { path: "lessonplan", element: <LessonPlanManager /> },
        { path: "trainingprogram", element: <TrainingProgramManager /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;