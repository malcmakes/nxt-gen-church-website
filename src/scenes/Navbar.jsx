import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
// 'Home'

const Link = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase()
    
    return(
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} 
            hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    //ONE THAT KEEPS SHOWING AS ERRROR.....
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "metSeaweed"

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">NGM.</h4>

                {/* DESKTOP NAV */}
                {isDesktop ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                         <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                         <Link
                            page="Ministries"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                         <Link
                            page="Events"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                         <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                <button
                    className="rounded-full p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    {/* <img alt="menu-icon" src="../assets/menu-icon.svg" /> */}
                </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isDesktop && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src="../assets/close-icon.svg"/>
                            </button>
                        </div>

                        {/* MENU */}
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                         <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                         <Link
                            page="Ministries"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                         <Link
                            page="Events"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                         <Link
                            page="Contacts"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar