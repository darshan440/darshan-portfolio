import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            <span className="text-gradient">Darshan</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Building scalable digital products.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/darshan-thakkar" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com/in/darshan-thakkar" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-secondary transition-colors hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:darshanthakkar782@gmail.com" className="text-muted-foreground hover:text-accent transition-colors hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] rounded-full">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-muted-foreground/60">
        &copy; {new Date().getFullYear()} Darshan Thakkar. All rights reserved.
      </div>
    </footer>
  );
}
