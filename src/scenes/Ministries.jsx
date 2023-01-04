import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ministriesVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Ministrie = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-gray-300 z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const ministrieTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={ministriesVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${ministrieTitle}.jpeg`} alt={ministrieTitle} />
    </motion.div>
  )
};

const Ministries = () => {
  return (
    <section id="ministries" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            At Your <span className="sunrayText">Service</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Building community and relationships through events.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center border-t-2  border-b-2 border-slate-300">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 mid-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            OPPURTUNITIES
          </div>
          <Ministrie title="Project 1" />
          <Ministrie title="Project 2" />

          {/* ROW 2 */}
          <Ministrie title="Project 3" />
          <Ministrie title="Project 4" />
          <Ministrie title="Project 5" />

          {/* ROW 3 */}
          <Ministrie title="Project 6" />
          <Ministrie title="Project 7" />
          <div
            className="flex justify-center text-center items-center p-10 metSeaweed
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            GROW TOGETHER
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries;