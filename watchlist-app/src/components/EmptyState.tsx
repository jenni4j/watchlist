
import React from 'react';
import { Search, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onSearch: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 animate-fade-in">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
        <LineChart className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Your watchlist is empty</h3>
      <p className="text-center text-muted-foreground max-w-md mb-6">
        Start building your watchlist by searching for stocks you're interested in tracking.
      </p>
      <Button 
        onClick={onSearch} 
        className="flex items-center gap-2"
      >
        <Search className="w-4 h-4" />
        <span>Search Stocks</span>
      </Button>
    </div>
  );
};

export default EmptyState;
