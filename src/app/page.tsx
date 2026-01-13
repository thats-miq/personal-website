export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 dark:bg-black">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          Michael Yue
        </h1>
        <p className="hidden text-xl text-zinc-600 sm:block dark:text-zinc-400">
          Software Engineer | Amateur Composer | ex-Harvard AB/SM
        </p>
        <ul className="flex flex-col gap-1 text-lg text-zinc-600 sm:hidden dark:text-zinc-400">
          <li>Software Engineer</li>
          <li>Amateur Composer</li>
          <li>ex-Harvard AB/SM</li>
        </ul>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="/resume.pdf"
            className="text-lg font-medium text-zinc-600 underline underline-offset-4 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Resume
          </a>
          <a
            href="https://github.com/thats-miq"
            className="text-lg font-medium text-zinc-600 underline underline-offset-4 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/michael-yue/"
            className="text-lg font-medium text-zinc-600 underline underline-offset-4 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
