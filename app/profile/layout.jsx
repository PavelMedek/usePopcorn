import { Inter } from "next/font/google";

import { platforms } from "@/lib/data";
import ProfileSidebar from "@/components/Sidebar/ProfileSidebar";
import MobileNavBar from "@/components/Sidebar/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function ProfileLayout({ children, params }) {
  return (
    <section className="min-h-screen flex text-white">
      <nav className="flex sticky top-0 h-screen md:hidden">
        <ProfileSidebar platforms={platforms} />
      </nav>

      <MobileNavBar platforms={platforms} params={params} profile={true} />

      <div className="w-full">{children}</div>
    </section>
  );
}
