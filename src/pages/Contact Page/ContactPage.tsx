import ContactMe from "@/components/contact/ContactMe";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="contact-page">
        <ContactMe />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
