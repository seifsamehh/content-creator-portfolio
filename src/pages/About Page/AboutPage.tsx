import About from "@/components/about/AboutMe";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        <About />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
