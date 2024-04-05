import Hero from "@/components/Hero";
import Loading from "@/components/Loading";
import Header from "@/components/shared/Header";
import About from "@/components/About";
import TitleAnime from "@/components/TitleAnime";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Blog from "@/components/Blog";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/shared/Footer";

const LandingPage = () => {
  return (
    <>
      <Loading />
      <Header />
      <main className="landing-page">
        <Hero />
        <About />
        <TitleAnime />
        <Work />
        <Experience />
        <Clients />
        <Blog />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
