import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import JournalLogin from "@/components/journal/JournalLogin";
import JournalDashboard from "@/components/journal/JournalDashboard";

const Journal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const authStatus = localStorage.getItem("journal_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("journal_auth", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("journal_auth");
    setIsAuthenticated(false);
  };

  return (
    <>
      <Helmet>
        <title>Personal Journal App</title>
        <meta name="description" content="A simple personal journal app for daily thoughts and reflections" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {!isAuthenticated ? (
          <JournalLogin onLogin={handleLogin} />
        ) : (
          <JournalDashboard onLogout={handleLogout} />
        )}
      </div>
    </>
  );
};

export default Journal;