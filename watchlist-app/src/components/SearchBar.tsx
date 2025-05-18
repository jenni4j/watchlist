import React, { useState } from 'react';
import { Search, X } from "lucide-react";
import { Input } from '@/components/ui/input';


export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const clearSearch = () => {
    setQuery('');
    setResults('');
    setIsOpen(false);
  };


  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          className="w-full pl-10 pr-10 h-12 rounded-xl bg-background focus-visible:ring-primary"
          placeholder="Search stocks by symbol or name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
        {query && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={clearSearch}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
