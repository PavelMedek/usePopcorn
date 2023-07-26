import { Inter } from "next/font/google";

import ProfileSidebar from "@/components/Sidebar/ProfileSidebar";
import { platforms } from "@/lib/data";
import MobileNavBar from "@/components/Sidebar/MobileNavBar";

const inter = Inter({ subsets: ["latin"] });

export default function ProfileLayout({ children, params }) {
  return (
    <section className="min-h-screen flex text-white">
      <nav className="flex sticky top-0 h-screen md:hidden">
        <ProfileSidebar platforms={platforms} />
      </nav>

      <MobileNavBar platforms={platforms} params={params} />

      <div className="w-full">{children}</div>
    </section>
  );
}
