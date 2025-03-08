import NavBar from "../components/layout/NavBar.tsx";
import ContactForm from "../components/ContactForm/ContactForm.tsx";
import Footer from "../components/layout/Footer.tsx";

const ContactPage: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
