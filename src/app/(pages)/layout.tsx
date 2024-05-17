import Footer from "@/components/footer";
import Header from "@/components/header";
import Topbar from "@/components/topbar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
