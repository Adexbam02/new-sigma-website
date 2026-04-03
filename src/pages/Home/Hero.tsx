import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/IMG_9583.jpg";
import DonateModal from "../../components/Donate";
import CTAButton from "components/CTAButton";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"85.65vh"}
      backgroundImage={heroBg}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        p={{ base: 4, md: 8 }}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"center"} spacing={6}>
          <Heading
            as="h1"
            fontSize={useBreakpointValue({
              base: "50px",
              md: "80px",
              lg: "128px",
            })}
            color={"brand.purple"}
            textAlign={"center"}
          >
            Sigma Club
          </Heading>
          <Heading
            as="h2"
            size={useBreakpointValue({
              base: "xl",
              md: "2xl",
            })}
            color="white"
            textAlign={"center"}
          >
            University of Ibadan
          </Heading>
          <Text
            color={"white"}
            lineHeight={1.2}
            align={"center"}
            fontSize="18px"
          >
            Oldest Students' Organisation in Sub-Saharan Africa. Social and
            Philanthropic club building whole men capable and willing to make
            positive impacts in the nation and in the world.
          </Text>
          <Stack
            direction={{ base: "column", md: "row"}}
            width={"100%"}
            justify={"space-between"}
            gap={"6px"}
            align={"center"}
            fontSize={"20px"}
            lineHeight={"30px"}
          >
            <Link to={"/about/history"}>
              <CTAButton bg="#FFFFFFCC" _hover={{bg: "#FFFFFFCC", color: "brand.purple"}} textColor="brand.purple">
                KNOW ABOUT US
              </CTAButton>
            </Link>
            <DonateModal width={"250px"} height={"60px"} text="DONATE" />
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

