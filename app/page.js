import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="background min-h-screen text-white p-10">
      <nav className="flex justify-between items-center">
        <p className="text-4xl font-bold">usePopcorn</p>
        <Link
          href="/login"
          className="bg-blue-500 py-4 px-16 rounded-full font-bold text-lg "
        >
          Log In
        </Link>
      </nav>

      <section className="flex justify-center mt-52 ">
        <div className="flex flex-col items-center w-1/2 gap-10">
          <h1 className="text-5xl font-bold text-center">
            Váš spolehlivý průvodce světem seriálů
          </h1>
          <p className="text-center font-thin">
            UsePopcorn je inovativní mobilní aplikace, která vám umožní
            jednoduše vyhledávat a streamovat vaše oblíbené seriály. Díky této
            uživatelsky přívětivé platformě budete mít okamžitý přístup k široké
            škále seriálů z celého světa.
          </p>
          <Link
            href="/login"
            className="bg-blue-500 py-4 px-16 rounded-full font-bold text-lg "
          >
            Log In
          </Link>
        </div>
      </section>
    </main>
  );
}
