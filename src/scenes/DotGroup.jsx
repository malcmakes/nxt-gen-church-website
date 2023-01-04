import AnchorLink from "react-anchor-link-smooth-scroll"

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-yellow before:left[-50%] 
    before:top-[-50%] `;

    return <div className="flex flex-col gap-6 fixed top-[60%] right-7">
            
        <AnchorLink
            className={`${selectedPage === 'home' ? selectedStyles : "mid-blue"} 
            w-3 h-3    `}
            href="#home"
            onClick={() => setSelectedPage('home')}
        />

         <AnchorLink
            className={`${selectedPage === 'about' ? selectedStyles : "mid-blue"} 
            w-3 h-3 rounded-full`}
            href="#about"
            onClick={() => setSelectedPage('about')}
        />

         <AnchorLink
            className={`${selectedPage === 'ministries' ? selectedStyles : "mid-blue"} 
            w-3 h-3 rotate-45 `}
            href="#ministries"
            onClick={() => setSelectedPage('ministries')}
        />

         <AnchorLink
            className={`${selectedPage === 'events' ? selectedStyles : "mid-blue"} 
            w-3 h-3 rounded-full`}
            href="#events"
            onClick={() => setSelectedPage('events')}
        />

         <AnchorLink
            className={`${selectedPage === 'contact' ? selectedStyles : "mid-blue"} 
            w-3 h-3 `}
            href="#contact"
            onClick={() => setSelectedPage('contact')}
        />

    </div> 
};
export default DotGroup