import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";

// Lazy load pages
const Home = lazy(() => import("./pages/home"));
const Courses = lazy(() => import("./pages/courses"));
const Blogs = lazy(() => import("./pages/blogs"));
const About = lazy(() => import("./pages/about"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;
