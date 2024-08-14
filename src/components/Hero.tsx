import { Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import AppContext from "../state-management/AppContext";

const Hero = () => {
  const { activeStep } = useContext(AppContext);
  const imgSize = activeStep > 0 ? 175 : 250;
  const fallbackSrc = `https://via.placeholder.com/${imgSize}`;

  return (
    <Box display="flex" justifyContent="center" mb="7">
      <Image
        boxSize={imgSize}
        src="https://static.selfnamed.com/gallery-photos/JgMU3jlFCslk2NAzlOGR1KbYdeAlEm6M.jpg"
        fallbackSrc={fallbackSrc}
      />
    </Box>
  );
};

export default Hero;
