import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Socials from "../components/Socials";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Socials />
      </main>
      <Footer />
    </>
  );
}
