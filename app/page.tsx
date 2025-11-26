import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-8">
      <div className="flex items-center gap-6 mt-10">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src="/B_ Wayne (Absolute Batman).jpeg"
            alt="Cihan"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-zinc-800">building & breaking things</h1>
      </div>

      <div className="mt-8 text-zinc-600 space-y-3">
        <p>
          hey there. i build stuff on the web mostly. typescript, react, that whole thing.
          currently studying computer engineering and trying to figure out how everything actually works under the hood.
        </p>
        <p>
          i like making things that just... work? not perfect, just functional. sometimes i write about
          what i learn, sometimes i don't. depends on the mood honestly.
        </p>
        <p>
          got some random ideas floating around, working on projects when i feel like it.
          might be onto something, might just be messing around. who knows.
        </p>
        <p>
          check out my{" "}
          <a href="/blog" className="text-blue-500 hover:text-blue-700 underline">
            latest explorations
          </a>{" "}
          for whatever i've been learning lately.
        </p>
      </div>
    </div>
  );
}
