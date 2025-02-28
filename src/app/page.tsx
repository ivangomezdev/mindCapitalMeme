import Main from "@/components/Main";
import Navbar from "@/components/NavBar";
import "./globals.css"

export default function Home() {
  return (
    <div>
      <main className="home__main">
      <Navbar/>
      <Main/>
      </main>
    </div>
  );
}
