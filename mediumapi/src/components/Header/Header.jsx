import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50  bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-center px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-lg text-white shadow-sm transition hover:scale-[1.02] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          style={{ fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive' }}
        >
          {'<3-With Love'}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
