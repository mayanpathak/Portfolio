
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to Home component
    navigate("/");
  }, [navigate]);
  
  return null; // This page redirects to Home, so it doesn't need any content
};

export default Index;
