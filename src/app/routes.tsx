import React from 'react';
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { JobListings } from "./pages/JobListings";
import { JobDetails } from "./pages/JobDetails";
import { StudentApplications } from "./pages/StudentApplications";
import { RecruiterKanban } from "./pages/RecruiterKanban";
import { ManageJobs } from "./pages/ManageJobs";
import { PostJob } from "./pages/PostJob";
import { SavedJobs } from "./pages/SavedJobs";
import { Messages } from "./pages/Messages";
import { RoleProvider } from "./contexts/RoleContext";

// Simple wrapper to provide the RoleContext to the layout and its children
const Root = () => (
  <RoleProvider>
    <Layout />
  </RoleProvider>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Dashboard },
      { path: "jobs", Component: JobListings },
      { path: "jobs/new", Component: PostJob },
      { path: "jobs/:jobId", Component: JobDetails },
      { path: "applications", Component: StudentApplications },
      { path: "manage", Component: ManageJobs },
      { path: "manage/:jobId", Component: RecruiterKanban },
      { path: "saved", Component: SavedJobs },
      { path: "messages", Component: Messages },
      { path: "*", Component: () => <div className="p-8 text-center text-gray-500 font-medium">404 - No encontrado</div> },
    ],
  },
]);
