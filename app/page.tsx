export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center px-6 py-12">
        <header className="w-full flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Arcade Hub
            </h1>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              A tiny web arcade of classic-inspired mini games.
            </p>
          </div>
          <nav className="hidden gap-2 text-sm sm:flex">
            <a
              href="/"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-100 hover:bg-slate-800/70"
            >
              Home
            </a>
            <a
              href="/games"
              className="rounded-full bg-emerald-500 px-4 py-2 font-medium text-slate-950 shadow hover:bg-emerald-400"
            >
              Browse Games
            </a>
          </nav>
        </header>

        <section className="mt-10 grid w-full gap-8 md:grid-cols-[2fr,1.6fr] md:items-start">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Jump into the action
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Try fast-paced arcade challenges right in your browser. No
              downloads, no logins—just click a game and start playing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/games"
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow hover:bg-emerald-400"
              >
                View all games
              </a>
              <a
                href="/games/space-dodger"
                className="rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-100 hover:bg-slate-800/70"
              >
                Play Space Dodger
              </a>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Featured games
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center justify-between rounded-2xl bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="font-medium">Space Dodger</p>
                    <p className="text-xs text-slate-400">
                      Avoid asteroids and chase a new high score.
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    Arcade
                  </span>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="font-medium">Pixel Runner</p>
                    <p className="text-xs text-slate-400">
                      Endless runner with tight jumps and simple controls.
                    </p>
                  </div>
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
                    Runner
                  </span>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="font-medium">Brain Grid</p>
                    <p className="text-xs text-slate-400">
                      Match tiles and clear the board in as few moves as
                      possible.
                    </p>
                  </div>
                  <span className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-400">
                    Puzzle
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-xs text-slate-400">
              <p>
                This is a demo gaming site scaffold. Hook it up to real games,
                add authentication, or connect to an API when you&apos;re
                ready.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
