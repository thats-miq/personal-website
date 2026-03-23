import Link from "next/link";
import { books } from "./data";
import MovieGrid from "./movie-grid";

export default function BooksMovies() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 px-6 py-16 dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col gap-12">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Books & Movies
          </h1>
          <Link
            href="/"
            className="text-lg font-medium text-zinc-600 underline underline-offset-4 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Home
          </Link>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Books
          </h2>
          <ul className="flex flex-col gap-3">
            {books.map((book) => (
              <li key={book.title} className="flex flex-col">
                <span className="text-lg text-black dark:text-zinc-50">
                  {book.title}
                </span>
                <span className="text-base text-zinc-500 dark:text-zinc-400">
                  {book.author}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
            Movies
          </h2>
          <MovieGrid />
        </section>
      </main>
    </div>
  );
}
