import React from "react";

// Changed from "@base-ui/react" to your shadcn ui path
import { Button } from "@/components/ui/button"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";import SignInForm from "./auth/forms/SignInForm";
import SignUpForm from "./auth/forms/SignUpForm";
import { Home } from "lucide-react";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NewsArticles from "./pages/NewsArticles";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />

        {/* Main Route */}
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<NewsArticles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;