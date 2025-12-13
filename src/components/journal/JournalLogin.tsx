import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface JournalLoginProps {
  onLogin: () => void;
}

const JournalLogin: React.FC<JournalLoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const JOURNAL_PASSWORD = "journal123"; // Hardcoded password for MVP

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === JOURNAL_PASSWORD) {
      toast.success("Welcome to your journal!");
      onLogin();
    } else {
      toast.error("Incorrect password. Try 'journal123'");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground">
            📓 Personal Journal
          </CardTitle>
          <p className="text-muted-foreground">
            Enter your password to access your private journal
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Access Journal
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Hint: Use 'journal123' for this demo
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default JournalLogin;