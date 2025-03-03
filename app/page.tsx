import Navbar from "@/components/Navbar";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Events from "@/components/section/Events";
import FAQs from "@/components/section/FAQs";
import Membership from "@/components/section/Membership";


export default function Home() {
  return (
    <div className="sm:gap20">
      <Navbar />
      <div className="pt-20">
        <About />
        <Events />
        <Membership />

        <FAQs />
        <Contact />
      </div>
    </div>
  );
}
