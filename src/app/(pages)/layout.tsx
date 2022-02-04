import Footer from "@/components/footer";
import Header from "@/components/header";
import Topbar from "@/components/topbar";
import Providers from "@/lib/providers";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar />
      <Providers>
        <Header />
        {children}
      </Providers>
      <Footer />
    </>
  );
}
