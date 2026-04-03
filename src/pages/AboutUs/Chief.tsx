import React from "react";
import { Container } from "@chakra-ui/react";

import {   SigmaChiefF } from "constants/image_assets";
import { Flex } from "@chakra-ui/react";

import { Text, Box, Image } from "@chakra-ui/react";

const Chief = () => {
  return (
    <Container maxW="7xl" className="animate-bottom" mb={20} px={10}>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box
          flex="4"
          color="white"
          py={{ lg: "4", md: "3", sm: "4" }}
          px={{ lg: "8", md: "3", sm: "2" }}
        >
          <Text py={3} fontWeight={500} fontSize={25} color="black">
            The Sigma Chief
          </Text>
          <Image
            mt={3.5}
            borderRadius="lg"
            width={{ lg: "95%", md: "80%", sm: "100%" }}
            src={SigmaChiefF}
            alt="The Sigma Chief"
          />
        </Box>
        <Box
          flex="6"
          py={{ base: "7", lg: "6", md: "4", sm: "4" }}
          px={{ lg: "6", md: "2", sm: "0" }}
        >
          <Text

            display="block"
            fontSize="24"
            lineHeight="normal"
            fontWeight="semibold"
          >
            Who is the Sigma Chief
          </Text>
          <br />

          <Text fontSize="16px" lineHeight="7">
            {/* He is a final-year student of Veterinary Medicine, widely regarded as an epitome of philanthropy, charity, selflessness, empathy, and leadership.
            <br />
            <br />
            His philanthropy is evident not only in his acts of charity but also in his deep concern for the welfare of those around him, consistently championing the well-being of others.
            <br />
            <br />
            His leadership journey includes serving as Health Minister of Lord Tedder Hall during the 2021/2022 session, and rising to become the Hall Chairman the following year.
            <br />
            <br />
            A persuasive public speaker, he has represented the Faculty of Veterinary Medicine and Lord Tedder Hall at premier public speaking platforms — including the biggest stage of Public Speaking in Sub-Saharan Africa — winning each time he mounted the stage.
            <br />
            <br />
            Well known for his heart of gold and unwavering strength, he has earned numerous awards and recognitions for his selfless service and contributions to the welfare of all who have crossed paths with him.
            <br />
            <br />
            <Text fontSize="16" fontWeight={500}>
              He is a true embodiment of Sigma ideals and traditions, representing all that the Sigma Club stands for.
            </Text> */}
            <Text fontSize="20" fontWeight={600} py={8}>
              "The Sigma Chief is The Sigma Club"
            </Text>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Chief;
