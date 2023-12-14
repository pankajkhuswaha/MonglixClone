import { useState, useEffect } from "react";

const useShowonSroll = () => {
    const [showDivOnScroll, setShowDivOnScroll] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowDivOnScroll(true);
        } else {
            setShowDivOnScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return showDivOnScroll
}

export default useShowonSroll