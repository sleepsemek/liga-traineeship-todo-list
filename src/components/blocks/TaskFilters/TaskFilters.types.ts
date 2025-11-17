export interface TaskFiltersProps {
  searchQuery: string;
  onlyImportant: boolean;
  onlyCompleted: boolean;
  onSearchQueryChange: (query: string) => void;
  onOnlyImportantChange: (important: boolean) => void;
  onOnlyCompletedChange: (completed: boolean) => void;
}
