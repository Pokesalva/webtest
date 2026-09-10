import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
      </main>
      <Footer />
    </>
  );
}
