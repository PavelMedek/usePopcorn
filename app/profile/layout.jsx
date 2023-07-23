import ProfileSidebar from "@/components/Sidebar/ProfileSidebar";
import { platforms } from "@/utils/data";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ProfileLayout({ children }) {
  return (
    <>
      <main className="flex">
        <ProfileSidebar platforms={platforms} />
        <div className="w-full">{children}</div>
      </main>
    </>
  );
}
