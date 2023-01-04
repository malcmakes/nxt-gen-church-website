import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, MotionConfig } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {

    const isAboveLarge = useMediaQuery("(min-width:1060px)")
  
    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py=10"
        >

            {/* IMAGE SECTION */}
            <div className ="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                         before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full 
                         before: border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-150 transition duration -500 z-10 w-full
                            max-w-[400px] md:max-w-[600px]"
                            src="assets/merci cover-05-12-27-2022.png"
                        />
                    </div>
                ) : (
                    <img
                    alt="profile"
                    className="hover:filter hover:saturate-200 transition duration -500 z-10 w-full
                    max-w-[400px] md:max-w-[600px]"
                    src="assets/merci cover-05-12-27-2022.png"
                   
                    />
                )}
            </div>

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADINGS */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewort={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    >
                        <p className="text-6xl font-playfair z-10 text-center md:text-start">
                            Nxt Gen {""}
                            <span 
                            className=""
                            >
                                Ministries
                            </span>
                        </p>
                
                        <p className="mt-10 mb-7 text-sm text-center">
                        Our mission is to lead people to become fully devoted followers of Christ. 
                        </p>
                    </motion.div>

                    {/* CALL TO ACTIONS */}
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewort={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <AnchorLink
                            className="sunray text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:metSeaweed hover:text-white transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        >
                            Connect Today
                        </AnchorLink>

                        <AnchorLink
                            className="rounded-r-sm mid-blue py-0.5 pr-0.5"
                            // bg-gradient-rainblue
                            onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        >
                            <div
                                className="bg-deep-blue hover:text-blue transition duration-500 w-full h-full flex items-center
                                justify-center font-playfair px-10"
                            >
                                Let's talk.
                            </div>
                        </AnchorLink>
                    </motion.div>

                    <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewort={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >

                        <SocialMediaIcons />
                    </motion.div>
                    
                </div> 
        </section>
    );
};

export default Landing;