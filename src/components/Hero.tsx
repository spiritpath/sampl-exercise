import { Box, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box display="flex" justifyContent="center" mb="7">
      <Image
        src="https://static.selfnamed.com/gallery-photos/JgMU3jlFCslk2NAzlOGR1KbYdeAlEm6M.jpgX"
        fallbackSrc="https://via.placeholder.com/250"
      />
    </Box>
  );
};

export default Hero;
