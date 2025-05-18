
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {

return (
    <header className="w-full py-6 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
      <div className="flex items-center">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs">MARKET OPEN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Stock Watchlist</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 h-9 px-3 rounded-full border border-border hover:bg-secondary transition-all duration-200"
        >
          <Bell className="h-4 w-4" />
          <span className="hidden sm:inline">Alerts</span>
        </Button>
      </div>

    </header>
  );
};
  
export default Header;