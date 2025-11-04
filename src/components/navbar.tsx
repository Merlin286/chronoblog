
'use client';
import Link from 'next/link';
import { Sun, Moon, Search, X, Menu } from 'lucide-react';
import { useTheme } from '../hooks/use-theme';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription, SheetHeader } from './ui/sheet';
import { useIsMobile } from '../hooks/use-mobile';


export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // When the user navigates, update the search input field
    setSearchValue(searchParams.get('q') || '');
  }, [searchParams]);

  useEffect(() => {
    // Update the URL query parameter as the user types
    const params = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      params.set('q', searchValue);
    } else {
      params.delete('q');
    }
    // We only want to push a new history state if the path is the home page.
    // We use window.history.replaceState to avoid creating new entries in browser history.
    if (pathname === '/') {
        window.history.replaceState(null, '', `?${params.toString()}`);
        // We need to manually trigger a re-render for the posts list.
        // A simple router.replace() does the trick.
        router.replace(`/?${params.toString()}`, { scroll: false });
    }
  }, [searchValue, pathname, router, searchParams]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);


  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // If the user is on a different page, navigate them to the home page with the search query
    if (pathname !== '/') {
        const params = new URLSearchParams(searchParams.toString());
        if (searchValue) {
            params.set('q', searchValue);
        } else {
            params.delete('q');
        }
        router.push(`/?${params.toString()}`);
    }
    if (isMobile) {
      setIsSearchOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchValue('');
    if (isMobile) {
      setIsSearchOpen(false);
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <AnimatePresence>
            {!isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex items-center gap-8"
              >
                  <Link href="/" className="font-headline text-2xl font-bold tracking-tight logo-glow">
                    ChronoBlog
                  </Link>
                  <div className="hidden md:flex items-center gap-1 text-sm font-medium">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "relative px-3 py-2 rounded-md text-muted-foreground transition-colors hover:text-foreground",
                          pathname === link.href && "text-foreground bg-muted"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={cn("flex items-center gap-2 md:gap-4", {"flex-1": isSearchOpen})}>
            <AnimatePresence>
                {(isSearchOpen || !isMobile) && (
                    <motion.div
                        key="search-form"
                        initial={isMobile ? { opacity: 0, width: 0 } : false}
                        animate={{ opacity: 1, width: isMobile ? '100%' : 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative w-full"
                    >
                        <form onSubmit={handleSearchSubmit} className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                ref={searchInputRef}
                                type="search"
                                placeholder="Search posts..."
                                className="pl-10 w-full sm:w-40 md:w-64 bg-muted border-none focus-visible:ring-primary focus-visible:ring-2"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                             {searchValue && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                                    onClick={clearSearch}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            )}
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <AnimatePresence>
              {!isSearchOpen && (
                 <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex items-center gap-2 md:gap-4"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(true)}
                    className={cn(isMobile ? 'flex' : 'hidden')}
                    aria-label="Open search"
                  >
                    <Search className="h-5 w-5" />
                  </Button>

                  <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                    <AnimatePresence initial={false} mode="wait">
                        <motion.div
                          key={theme}
                          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </motion.div>
                      </AnimatePresence>
                  </Button>

                  <div className="md:hidden">
                      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                          <SheetTrigger asChild>
                              <Button variant="ghost" size="icon">
                                  <Menu className="h-5 w-5" />
                                  <span className="sr-only">Open menu</span>
                              </Button>
                          </SheetTrigger>
                          <SheetContent side="left">
                              <SheetHeader>
                                <SheetTitle className="font-headline text-2xl font-bold tracking-tight">ChronoBlog</SheetTitle>
                                <SheetDescription>
                                   Main navigation links for the ChronoBlog website.
                                </SheetDescription>
                              </SheetHeader>
                              <div className="flex flex-col gap-4 p-4 mt-4">
                                  {navLinks.map((link) => (
                                      <SheetClose key={link.href} asChild>
                                          <Link
                                          href={link.href}
                                          className={cn(
                                              "px-3 py-2 rounded-md text-lg text-muted-foreground transition-colors hover:text-foreground",
                                              pathname === link.href && "text-foreground bg-muted"
                                          )}
                                          >
                                          {link.label}
                                          </Link>
                                      </SheetClose>
                                  ))}
                              </div>
                          </SheetContent>
                      </Sheet>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
