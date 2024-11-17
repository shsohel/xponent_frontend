
import Footer from "./Footer";
import Header from "./Header";

export default async function AppLayout({ children }) {
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="container font-semibold  min-h-[80vh]">{children}</main>
      <Footer/>
    </div>
  );
}
