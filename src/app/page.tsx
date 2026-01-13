export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Michael Yue
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Software Engineer | Amateur Composer | ex-Harvard AB/SM
        </p>
        <a
          href="/resume.pdf"
          className="text-lg font-medium text-zinc-600 underline underline-offset-4 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          Resume
        </a>
      </main>
    </div>
  );
}
