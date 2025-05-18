
import { useRef } from 'react';
import EmptyState from '@/components/EmptyState';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';

const Index = () => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleFocusSearch = () => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      };

return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Header />
      <SearchBar />
      <EmptyState onSearch={handleFocusSearch} />
    </div>
    );
};

export default Index;