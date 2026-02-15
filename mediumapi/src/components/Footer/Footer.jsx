const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/70 bg-white/80 py-2 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 text-sm font-medium text-slate-700">
        <span>project developed by</span>
        <a
          href="https://github.com/botislive"
          target="_blank"
          rel="noreferrer"
          aria-label="botislive GitHub profile"
          className="group rounded-xl border border-white/40 bg-white/20 p-1.5 shadow-md backdrop-blur-lg transition hover:scale-105 hover:shadow-lg active:scale-95 active:bg-white/35 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          <img
            src="https://avatars.githubusercontent.com/u/205576067?v=4"
            alt="botislive avatar"
            className="h-8 w-8 rounded-lg object-cover"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
