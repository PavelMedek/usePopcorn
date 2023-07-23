import PageContainer from "@/components/PageContainer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { platforms } from "@/lib/data";

export async function generateMetadata({ params }) {
  const title = params.platformName;

  return {
    title: `usePopcorn - ${title.charAt(0).toUpperCase() + title.slice(1)}`,
  };
}

export default function Layout({ children, params }) {
  return (
    <>
      <main className="flex">
        <Sidebar platforms={platforms} params={params} />
        <PageContainer platforms={platforms} params={params}>
          {children}
        </PageContainer>
      </main>
    </>
  );
}
