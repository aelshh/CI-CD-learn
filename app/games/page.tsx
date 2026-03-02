const games = [
  {
    slug: "space-dodger",
    title: "Space Dodger",
    genre: "Arcade",
    difficulty: "Medium",
    description: "Pilot your ship through an endless asteroid field and survive as long as you can.",
  },
  {
    slug: "pixel-runner",
    title: "Pixel Runner",
    genre: "Runner",
    difficulty: "Easy",
    description: "Jump over gaps, slide under obstacles, and chase the perfect run.",
  },
  {
    slug: "brain-grid",
    title: "Brain Grid",
    genre: "Puzzle",
    difficulty: "Hard",
    description: "Think ahead, chain matches, and clear the board with the fewest moves.",
  },
];

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-12">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Games
            </h1>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Pick a game and start playing. These entries are static examples
              you can later hook up to real gameplay.
            </p>
          </div>
          <a
            href="/"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:bg-slate-800/70"
          >
            Back to home
          </a>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          {games.map((game) => (
            <a
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-sm shadow-slate-950/40 transition hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-emerald-500/25"
            >
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {game.title}
                </h2>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {game.genre}
                </p>
                <p className="mt-3 text-sm text-slate-300">
                  {game.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="rounded-full bg-slate-900 px-3 py-1">
                  Difficulty:{" "}
                  <span className="font-semibold text-slate-100">
                    {game.difficulty}
                  </span>
                </span>
                <span className="text-emerald-400 group-hover:text-emerald-300">
                  Open details →
                </span>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}

