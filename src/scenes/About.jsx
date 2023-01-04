import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion"

const About = () => {

    const isAboveLarge = useMediaQuery("(min-width: 1060px)")
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section id="about" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">

                <motion.div 
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5 ">
                        OUR <span className="redText">MISSION</span>
                    </p>

                    <LineGradient width="w-1/3 " />
                    <p className="mt-10 mb-7">
                        Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                        fames odio in at.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveLarge ? (
                        <div
                            // className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            //     before:w-full before:h-full 
                            //     before: border-2 before:border-blue before:z-[-1]"
                            className="relative flex justify-center  hover:filter hover:saturate-150"
                        >
                        <img
                                alt="skills"
                                className=" object-center z-10 w-1/2   "
                                src="assets/pexels-rodnae-productions-8034623.jpg"
                            />
                        </div>
                    ) : (
                        <img alt="skills"className="z-10 hover:filter hover:saturate-150 transition duration -500 z-10 w-full" 
                        src="assets/pexels-rodnae-productions-8034623.jpg" />
                    )}
                </div>
            </div>

            {/* SKILLS */}
            <div className="md:flex md:justify-between mt-16 gap-32">
              {/* EXPERIENCE */}
              <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
              >

                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Believe</p>
                    </div>

                    <div className="w-1/2 md:w-3/4 h-32 red absolute right-0 top-0 z-[-1]" />
                </div>

                <p className="mt-5">
                <span className="redText">Romans 10:9-10 NIV </span>     
                9 If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. 
                10 For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.
                </p>

              </motion.div>


               {/* INNOVATIVE */}
               <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
              >

                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">02</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Receive</p>
                    </div>

                    <div className="w-1/2 md:w-3/4 h-32 sunray absolute right-0 top-0 z-[-1]" />
                </div>

                 <p className="mt-5">
                <span className="redText">John 3:16-17 NIV </span>     
                9 If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. 
                10 For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.
                </p>

              </motion.div>

               {/* IMAGINATIVE */}
               <motion.div
                className="md:w-1/3 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
              >

                <div className="relative h-32">
                    <div className="z-10">
                        <p className="font-playfair font-semibold text-5xl">03</p>
                        <p className="font-playfair font-semibold text-3xl mt-3">Achieve</p>
                    </div>

                    <div className="w-1/2 md:w-3/4 h-32 metSeaweed absolute right-0 top-0 z-[-1]" />
                </div>

                <p className="mt-5">
                <span className="redText">2 Corinthians 5:18 KJV </span>     
                And all things are of God, who hath reconciled us to himself by Jesus Christ, and hath given to us the ministry of reconciliation.
                </p>

              </motion.div>

            </div>
        </section>
    );
};

export default About