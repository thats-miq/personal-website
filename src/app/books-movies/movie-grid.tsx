"use client";

import Image from "next/image";
import { useState } from "react";
import { movies } from "./data";

const MOVIES_PER_PAGE = 8;
const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);

export default function MovieGrid() {
  const [page, setPage] = useState(1);

  const start = (page - 1) * MOVIES_PER_PAGE;
  const currentMovies = movies.slice(start, start + MOVIES_PER_PAGE);

  return (
    <div className="flex flex-col gap-6">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {currentMovies.map((movie) => (
          <li
            key={movie.title}
            className="flex flex-col items-center rounded-lg border border-zinc-200 p-3 dark:border-zinc-800"
          >
            {movie.posterUrl && (
              <Image
                src={movie.posterUrl}
                alt={movie.title}
                width={160}
                height={240}
                className="mb-2 rounded object-cover"
                unoptimized
              />
            )}
            <span className="text-center text-sm font-medium text-black dark:text-zinc-50">
              {movie.title}
            </span>
            <span className="text-center text-xs text-zinc-500 dark:text-zinc-400">
              {movie.year}
            </span>
          </li>
        ))}
      </ul>

      <nav className="flex items-center justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 text-lg text-zinc-600 transition-colors hover:text-black disabled:opacity-30 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          &lsaquo;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`px-3 py-1 text-lg transition-colors ${
              n === page
                ? "font-semibold text-black dark:text-zinc-50"
                : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
            }`}
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 text-lg text-zinc-600 transition-colors hover:text-black disabled:opacity-30 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          &rsaquo;
        </button>
      </nav>
    </div>
  );
}
