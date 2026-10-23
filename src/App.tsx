import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading from "./subComponents/Loading";

const Main = lazy(() => import("./pages/Main"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const MySkillsPage = lazy(() => import("./pages/MySkillsPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/projects" element={<WorkPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/feats" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;
