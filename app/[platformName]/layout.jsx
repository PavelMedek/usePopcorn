import MainNavbar from "@/components/MainNavbar";
import { platforms } from "@/utils/data";

export default function Layout({ children, params }) {
  const shows = platforms.find((el) => el.name === params.platformName);

  return (
    <>
      <main className="flex">
        <div className="mr-3 h-screen sticky top-0 md:hidden">
          <MainNavbar platforms={platforms} />
        </div>
        <div className="bg-[#1A161E] w-80 h-screen sticky top-0 md:hidden overflow-auto p-10">
          {shows.series.map((el) => (
            <div key={el.title}>{el.title}</div>
          ))}
        </div>
        <div className="w-full">{children}</div>
      </main>
    </>
  );
}
