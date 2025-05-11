
export const Header = () => {

return (
    <header className="w-full py-6 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fade-in">
        <div className="flex items-center">
            <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-positive rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">MARKET OPEN</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Stock Watchlist</h1>
            </div>
        </div>
    </header>
);
};
  
export default Header