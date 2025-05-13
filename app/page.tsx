import Navbar from "./components/navbar";
import ImageCarousel from "./components/carousel";
import AboutUs from "./components/aboutus";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ContactWidget from "./components/contactwidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <AboutUs />
      <Contact />
      <ContactWidget />
      <Footer />
    </>
  );
}
