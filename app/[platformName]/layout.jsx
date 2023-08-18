import { getPlatforms } from "@/actions/getPlatforms";
import { getShowsByPlatform } from "@/actions/getShowsByPlatform";
import MobileNavBar from "@/components/Sidebar/MobileSidebar";
import Sidebar from "@/components/Sidebar/ShowSidebar";
import { profile } from "@/lib/data";

export async function generateMetadata({ params }) {
  const title = params.platformName;

  return {
    title: `usePopcorn - ${title.charAt(0).toUpperCase() + title.slice(1)}`,
  };
}
export default function Layout({ children, params }) {
  const platforms = getPlatforms();
  const series = getShowsByPlatform(params.platformName);

  return (
    <section className="min-h-screen flex text-white">
      <nav className="flex sticky top-0 h-screen md:hidden">
        <Sidebar
          platforms={platforms}
          params={params}
          profile={profile}
          series={series}
        />
      </nav>

      <MobileNavBar
        platforms={platforms}
        params={params}
        profileArr={profile}
        series={series}
      />

      {children}
    </section>
  );
}
