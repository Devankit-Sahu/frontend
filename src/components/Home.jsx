import { motion } from "framer-motion";
import doshas from "../assets/vata1.jpg";
import img from "../assets/3.jpg";
import svg from "../assets/truck.svg";
const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="max-w-[1142px] mx-auto flex items-center justify-center flex-col gap-y-10">
          <p className="text-center selection:bg-yellow-200 selection:text-black capitalize text-5xl text-white w-[600px] font-bold">
            Explore and Discover Ayurvedic Solutions.
          </p>
          <button className="px-4 py-2 rounded-md bg-yellow-300 text-gray-700 cursor-pointer font-bold">
            Explore
          </button>
        </div>
      </div>
      <div className="ayurvedh-doash">
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
      </div>
      <div
        className="ayruvedh-about relative -z-10 bg-[#eff2f1] py-[7rem]"
        id="features"
      >
        <div className="max-w-[1242px] mx-auto">
          <div className="grid grid-cols-2 gap-x-20">
            <div className="">
              <h1 className="capitalize text-3xl font-semibold mb-6">
                <span className="text-4xl text-blue-500">Ayruvedh</span> Doshas
              </h1>
              <p className="text-[#6a6a6a] mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                ipsa in asperiores consequuntur. Doloremque vero hic, quas nemo
                cupiditate labore.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div className="feature">
                  <img src={svg} alt="" />
                  <h3 className="text-[#2f2f2f] text-[14px] font-semibold leading-[1.2] mb-[.5]">
                    Fast &amp; Free Shipping
                  </h3>
                  <p className="text-[#6a6a6a] text-[14px] font-semibold leading-[22px]">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
                <div className="feature">
                  <img src={svg} alt="" />
                  <h3 className="text-[#2f2f2f] text-[14px] font-semibold leading-[1.2] mb-[.5]">
                    Fast &amp; Free Shipping
                  </h3>
                  <p className="text-[#6a6a6a] text-[14px] font-semibold leading-[22px]">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
                <div className="feature">
                  <img src={svg} alt="" />
                  <h3 className="text-[#2f2f2f] text-[14px] font-semibold leading-[1.2] mb-[.5]">
                    Fast &amp; Free Shipping
                  </h3>
                  <p className="text-[#6a6a6a] text-[14px] font-semibold leading-[22px]">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
                <div className="feature">
                  <img src={svg} alt="" />
                  <h3 className="text-[#2f2f2f] text-[14px] font-semibold leading-[1.2] mb-[.5]">
                    Fast &amp; Free Shipping
                  </h3>
                  <p className="text-[#6a6a6a] text-[14px] font-semibold leading-[22px]">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="img-wrap w-[500px] h-[600px] ml-auto">
                <img
                  src={img}
                  className="h-full w-full object-cover rounded-3xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
