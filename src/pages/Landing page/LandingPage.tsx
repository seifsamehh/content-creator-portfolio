import Loading from "@/components/shared/Loading";
import Header from "@/components/shared/Header";
import Hero from "@/components/hero/Hero";
import AboutMe from "@/components/about/AboutMe";
import TitleAnime from "@/components/animations/TitleAnime";
import Work from "@/components/work/Work";
import Experience from "@/components/experience/Experience";
import Clients from "@/components/clients/Clients";
import Blog from "@/components/blog/Blog";
import ContactMe from "@/components/contact/ContactMe";
import Footer from "@/components/shared/Footer";

const LandingPage = () => {
  return (
    <>
      <Loading />
      <Header />
      <main className="landing-page">
        <Hero />
        <AboutMe />
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
