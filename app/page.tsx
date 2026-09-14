import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DailyMenu from "@/components/DailyMenu";
import About from "@/components/About";
import Story from "@/components/Story";
import Ingredients from "@/components/Ingredients";
import BakingProcess from "@/components/BakingProcess";
import Gallery from "@/components/Gallery";
import DarkDessert from "@/components/DarkDessert";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <DailyMenu />
        <About />
        <Story />
        <Ingredients />
        <BakingProcess />
        <Gallery />
        <DarkDessert />
        <Testimonials />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
