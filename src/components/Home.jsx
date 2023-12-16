import { motion } from "framer-motion";
import doshas from "../assets/vata1.jpg";
import HeroSection from "./HeroSection";
import Features from "./Features";
import About from "./About";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <div className="ayurvedh-doash">
        <div className="max-w-[1142px] mx-auto flex gap-x-8">
          <motion.div className="p-[30px] w-[400px] relative top-[-80px] bg-[#f0fff0] rounded-2xl">
            <div className="">
              <h2 className="font-bold text-center mb-4">
                Harness the Power of Wind: Find your Vata balance.
              </h2>
              <div className="mb-4">
                <img
                  className="w-full h-[230px] rounded-2xl object-cover mix-blend-darken"
                  src={doshas}
                  alt=""
                />
              </div>
              <p className="text-center font-light">
                Is your mind like a whirlwind? Does your body feel light and
                dry? You might be Vata dominant! Discover tips for grounding,
                nourishing, and calming your energetic dosha with our Ayurvedic
                guide. Get started today!
              </p>
            </div>
          </motion.div>
          <div className="p-[30px] w-[400px] relative top-[-80px] bg-[#f0fff0] rounded-2xl">
            <div className="">
              <h2 className="font-bold text-center mb-4">
                Harness the Power of Wind: Find your Vata balance.
              </h2>
              <div className="mb-4">
                <img
                  className="w-full h-[230px] rounded-2xl object-cover mix-blend-darken"
                  src={doshas}
                  alt=""
                />
              </div>
              <p className="text-center font-light">
                Is your mind like a whirlwind? Does your body feel light and
                dry? You might be Vata dominant! Discover tips for grounding,
                nourishing, and calming your energetic dosha with our Ayurvedic
                guide. Get started today!
              </p>
            </div>
          </div>
          <div className="p-[30px] w-[400px] relative top-[-80px] bg-[#f0fff0] rounded-2xl">
            <div className="">
              <h2 className="font-bold text-center mb-4">
                Harness the Power of Wind: Find your Vata balance.
              </h2>
              <div className="mb-4">
                <img
                  className="w-full h-[230px] rounded-2xl object-cover mix-blend-darken"
                  src={doshas}
                  alt=""
                />
              </div>
              <p className="text-center font-light">
                Is your mind like a whirlwind? Does your body feel light and
                dry? You might be Vata dominant! Discover tips for grounding,
                nourishing, and calming your energetic dosha with our Ayurvedic
                guide. Get started today!
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Features />
      <About />
    </>
  );
};

export default Home;
