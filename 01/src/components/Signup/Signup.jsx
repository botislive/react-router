export default function Signup() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 px-4 py-16">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-md items-center justify-center">
        <div className="w-full rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white">Create account</h1>
          <p className="mt-2 text-center text-sm text-blue-100">Sign up to get started</p>

          <form className="mt-8 space-y-5">
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-blue-100">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="johndoe"
                className="w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-cyan-400 focus:bg-white focus:shadow-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-blue-100">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-cyan-400 focus:bg-white focus:shadow-lg"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-blue-100">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-cyan-400 focus:bg-white focus:shadow-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
