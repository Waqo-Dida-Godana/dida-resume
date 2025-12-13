import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";
import { JournalEntryData } from "./JournalDashboard";

interface JournalEntryProps {
  onSave: (entry: Omit<JournalEntryData, "id" | "timestamp">) => void;
  onCancel: () => void;
  editingEntry?: JournalEntryData | null;
}

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😌", label: "Peaceful" },
  { emoji: "🤔", label: "Thoughtful" },
  { emoji: "😟", label: "Worried" },
  { emoji: "🤗", label: "Grateful" },
  { emoji: "😎", label: "Confident" },
  { emoji: "😐", label: "Neutral" },
];

const JournalEntry: React.FC<JournalEntryProps> = ({
  onSave,
  onCancel,
  editingEntry,
}) => {
  const [title, setTitle] = useState(editingEntry?.title || "");
  const [content, setContent] = useState(editingEntry?.content || "");
  const [selectedMood, setSelectedMood] = useState(editingEntry?.mood || "😊");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }

    if (!content.trim()) {
      toast.error("Please enter some content");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    
    onSave({
      title: title.trim(),
      content: content.trim(),
      mood: selectedMood,
      date: currentDate,
    });

    toast.success(editingEntry ? "Entry updated!" : "Entry saved!");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={onCancel}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <CardTitle>
                {editingEntry ? "Edit Entry" : "New Journal Entry"}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="What's on your mind today?"
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label>Today's Mood</Label>
                <div className="grid grid-cols-5 gap-2">
                  {moods.map((mood) => (
                    <Button
                      key={mood.emoji}
                      type="button"
                      variant={selectedMood === mood.emoji ? "default" : "outline"}
                      className="h-16 flex flex-col items-center justify-center text-2xl"
                      onClick={() => setSelectedMood(mood.emoji)}
                    >
                      <span className="text-2xl">{mood.emoji}</span>
                      <span className="text-xs">{mood.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Pour your thoughts here..."
                  className="min-h-64 text-base leading-relaxed"
                />
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="submit" className="flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  {editingEntry ? "Update" : "Save"} Entry
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JournalEntry;