import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, LogOut, Search } from "lucide-react";
import JournalEntry from "./JournalEntry";
import EntryList from "./EntryList";
import { Input } from "@/components/ui/input";

export interface JournalEntryData {
  id: string;
  title: string;
  content: string;
  mood: string;
  date: string;
  timestamp: number;
}

interface JournalDashboardProps {
  onLogout: () => void;
}

const JournalDashboard: React.FC<JournalDashboardProps> = ({ onLogout }) => {
  const [entries, setEntries] = useState<JournalEntryData[]>([]);
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingEntry, setEditingEntry] = useState<JournalEntryData | null>(null);

  useEffect(() => {
    // Load entries from localStorage
    const savedEntries = localStorage.getItem("journal_entries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntries = (newEntries: JournalEntryData[]) => {
    setEntries(newEntries);
    localStorage.setItem("journal_entries", JSON.stringify(newEntries));
  };

  const handleSaveEntry = (entryData: Omit<JournalEntryData, "id" | "timestamp">) => {
    if (editingEntry) {
      // Update existing entry
      const updatedEntries = entries.map(entry =>
        entry.id === editingEntry.id
          ? { ...entry, ...entryData }
          : entry
      );
      saveEntries(updatedEntries);
      setEditingEntry(null);
    } else {
      // Create new entry
      const newEntry: JournalEntryData = {
        ...entryData,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };
      saveEntries([newEntry, ...entries]);
    }
    setShowNewEntry(false);
  };

  const handleDeleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    saveEntries(updatedEntries);
  };

  const handleEditEntry = (entry: JournalEntryData) => {
    setEditingEntry(entry);
    setShowNewEntry(true);
  };

  const filteredEntries = entries.filter(entry =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showNewEntry) {
    return (
      <JournalEntry
        onSave={handleSaveEntry}
        onCancel={() => {
          setShowNewEntry(false);
          setEditingEntry(null);
        }}
        editingEntry={editingEntry}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              📓 My Journal
            </h1>
            <Button onClick={onLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
          
          <div className="flex items-center justify-between mt-4 gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={() => setShowNewEntry(true)}>
              <Plus className="w-4 h-4 mr-2" />
              New Entry
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {filteredEntries.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {entries.length === 0 ? "Start Your Journey" : "No entries found"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {entries.length === 0
                ? "Begin documenting your thoughts and experiences"
                : "Try adjusting your search terms"}
            </p>
            {entries.length === 0 && (
              <Button onClick={() => setShowNewEntry(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Write First Entry
              </Button>
            )}
          </div>
        ) : (
          <EntryList
            entries={filteredEntries}
            onDelete={handleDeleteEntry}
            onEdit={handleEditEntry}
          />
        )}
      </main>
    </div>
  );
};

export default JournalDashboard;