import type { Metadata } from "next";
import Link from "next/link";

const games = [
  {
    slug: "space-dodger",
    title: "Space Dodger",
    genre: "Arcade",
    difficulty: "Medium",
    description:
      "Dodge incoming asteroids with simple left/right controls. The longer you survive, the faster they come.",
    controls: "Use the arrow keys or A/D to move left and right.",
    objective: "Survive as long as possible and beat your previous high score.",
  },
  {
    slug: "pixel-runner",
    title: "Pixel Runner",
    genre: "Runner",
    difficulty: "Easy",
    description:
      "An endless runner focused on timing your jumps and slides. Great for quick sessions.",
    controls:
      "Press space or click/tap to jump. Hold to jump higher. (In a real game you would wire actual input.)",
    objective: "Travel the greatest distance without falling or hitting obstacles.",
  },
  {
    slug: "brain-grid",
    title: "Brain Grid",
    genre: "Puzzle",
    difficulty: "Hard",
    description:
      "A calm but challenging puzzle game where every move matters. Match tiles to clear the board.",
    controls:
      "Click or tap tiles to select them. Match according to the rules you design when you build the real game.",
    objective:
      "Clear as many tiles as possible with the fewest moves to maximize your score.",
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return {
      title: "Game not found | Arcade Hub",
    };
  }

  return {
    title: `${game.title} | Arcade Hub`,
    description: game.description,
  };
}

export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-12">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Game not found
          </h1>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            The game you&apos;re looking for does not exist in this demo.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/games"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              View all games
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:bg-slate-800/70"
            >
              Back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-12">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              {game.genre} • Difficulty: {game.difficulty}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {game.title}
            </h1>
          </div>
          <div className="flex gap-3 text-sm">
            <Link
              href="/games"
              className="rounded-full border border-slate-700 px-4 py-2 text-slate-100 hover:bg-slate-800/70"
            >
              All games
            </Link>
            <Link
              href="/"
              className="rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Home
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-8 md:grid-cols-[1.8fr,1.2fr] md:items-start">
          <div className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/40">
            <h2 className="text-lg font-semibold tracking-tight">
              About this game
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              {game.description}
            </p>
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-4 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">Prototype area</p>
              <p className="mt-2">
                This section is where you can embed your actual game canvas or
                React component later—whether it&apos;s a simple DOM game, a
                canvas/2D engine, or something powered by WebGL.
              </p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                How to play
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {game.controls}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 text-sm text-slate-300">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Objective
              </h3>
              <p className="mt-3 leading-relaxed">{game.objective}</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

