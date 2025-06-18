import {
  Box,
  Flex,
  HStack,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      if (headerRef.current) {
        headerRef.current.style.transform =
          direction === "down" ? "translateY(-200px)" : "translateY(0)";
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, `#${sectionId}`);
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      width="100%"
      backgroundColor="black"
      zIndex={999}
      transition="transform 0.3s ease-in-out"
    >
      <Flex p={4} align="center">
        <HStack spacing={4}>
          {socials.map((social) => (
            <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </HStack>
        <Spacer />
        <HStack spacing={6}>
          <ChakraLink
            href="/#projects-section"
            onClick={(e) => handleClick(e, "projects-section")}
            color="white"
          >
            Projects
          </ChakraLink>
          <ChakraLink
            href="/#contactme-section"
            onClick={(e) => handleClick(e, "contactme-section")}
            color="white"
          >
            Contact Me
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
