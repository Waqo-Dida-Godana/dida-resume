import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Edit2, Trash2, Calendar } from "lucide-react";
import { JournalEntryData } from "./JournalDashboard";
import { toast } from "sonner";

interface EntryListProps {
  entries: JournalEntryData[];
  onDelete: (id: string) => void;
  onEdit: (entry: JournalEntryData) => void;
}

const EntryList: React.FC<EntryListProps> = ({ entries, onDelete, onEdit }) => {
  const handleDelete = (entry: JournalEntryData) => {
    if (window.confirm(`Are you sure you want to delete "${entry.title}"?`)) {
      onDelete(entry.id);
      toast.success("Entry deleted");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getPreview = (content: string) => {
    return content.length > 150 ? content.substring(0, 150) + "..." : content;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">
          Your Entries ({entries.length})
        </h2>
      </div>

      <div className="grid gap-4">
        {entries.map((entry) => (
          <Card key={entry.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{entry.mood}</span>
                    <h3 className="text-lg font-semibold text-foreground line-clamp-1">
                      {entry.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {formatDate(entry.date)}
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(entry)}
                    className="flex items-center gap-1"
                  >
                    <Edit2 className="w-3 h-3" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(entry)}
                    className="flex items-center gap-1 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed">
                {getPreview(entry.content)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EntryList;