import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";

const Home = lazy(() => import("./pages/home"));
const SpanishCourses = lazy(() => import("./pages/SpanishCourses"));
const Blogs = lazy(() => import("./pages/blogs"));
const Contact = lazy(() => import("./pages/Contact"));
const Tools = lazy(() => import("./pages/Tools"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/spanish" element={<SpanishCourses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
