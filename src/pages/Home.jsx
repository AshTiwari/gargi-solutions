import Hero from '../components/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import Services from '../components/Services/Services';
import { Process, Reasons } from '../components/Process/Process';
import Testimonials from '../components/Testimonials/Testimonials';
import Insights from '../components/Insights/Insights';
import Founder from '../components/Founder/Founder';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Reasons />
      <Testimonials />
      <Insights />
      <Founder />
      <Contact />
    </>
  );
}
