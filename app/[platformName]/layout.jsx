import MobileNavBar from "@/components/Sidebar/MobileSidebar";
import Sidebar from "@/components/Sidebar/ShowSidebar";
import { platforms } from "@/lib/data";

export async function generateMetadata({ params }) {
  const title = params.platformName;

  return {
    title: `usePopcorn - ${title.charAt(0).toUpperCase() + title.slice(1)}`,
  };
}
export default function Layout({ children, params }) {
  return (
    <section className="min-h-screen flex text-white">
      <nav className="flex sticky top-0 h-screen md:hidden">
        <Sidebar platforms={platforms} params={params} />
      </nav>

      <MobileNavBar platforms={platforms} params={params} />

      {children}
    </section>
  );
}
