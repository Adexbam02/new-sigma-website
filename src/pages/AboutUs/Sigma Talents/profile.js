import React from "react";
import { Container, Flex, Heading, Text, Box } from "@chakra-ui/react";

import Profilecard from "./profilecard";
import {
  TomiwaHeadshot,
  TimothyHeadshot,
  akorede,
  oyerohabib,
   Adesokan
} from "constants/image_assets";

const ProfileOBJ = [
 
  {
    id: 1,
    Headshot: akorede,
    name: "Old Sigmite Adeyanju Akorede",
    skill: "Backend Developer",
    intro:
      "People, Technology, Financial Analysis and LIteracy, Entrepreneurship. In no particular order, those are the pillars upon which I am building my life and career",
    LinkedIn: "https://www.linkedin.com/in/adeyanju-akorede-588014222/",
    Email: "adeyanju.akorede1@gmail.com",
    Twitter: "#",
    Link: "#",
    Instagram: "#",
  },
  {
    id: 2,
    name: "Old Sigmite Oyero Habibulah",
    Headshot: oyerohabib,
    skill: "Software Engineer",
    intro:
      "Habib is a seasoned software engineer with a passion for bringing creative ideas to life. With over 5 years of experience in web development, he brings a unique blend of technical know-how and project management skills to the table.",
    LinkedIn: "https://www.linkedin.com/in/oyerohabib/",
    Email: "oyerhabib@yahoo.com",
    Link: "https://oyerohabib.com/",
    Twitter: "#",
    Instagram: "#",
  },
  {
    id: 3,
    name: "Loyalist Adesokan Emmanuel",
    Headshot: Adesokan,
    skill: "Software Engineer",
    intro:
      "Adesokan Emmanuel is a skilled Software Engineer. He excels in creating seamless user experience and thrives in collaborative environments. He is commited to continuos learning and growth",
    LinkedIn: "#",
    Email: "#",
    Link: "#",
    Twitter: "#",
    Instagram: "#",
  },
  {
    id: 4,
    Headshot: TomiwaHeadshot,
    name: "Loyalist Olasupo Tomiwa",
    skill: "Front-End Developer",
    intro:
      "I develop and design visual elements and interactive features using modern technologies, which enable users to have a seamless user experience.",
    LinkedIn: "https://www.linkedin.com/in/tomiwa-olasupo-821abb1aa",
    Email: "tomiwaolasupo@gmail.com",
    Twitter: "https://twitter.com/Tomiwaolasupo_",
    Instagram: "https://instagram.com/tomiwa_olasupo?igshid=OTk0YzhjMDVlZA==",
    Link: "#",
  },
  {
    id: 5,
    Headshot: TimothyHeadshot,
    name: "Loyalist Ilegbusi Timothy",
    skill: "Product Designer",
    intro:
      " 400 level law student of the University of Ibadan. I am a product designer (UI/UX) and I love to cook up innovative ideas to solve human problems through technology.",
    LinkedIn: "https://www.linkedin.com/in/timothy-ilegbusi-669004237",
    Email: "ilegbusitimothy@gmail.com",
    Twitter: "https://twitter.com/warlordbolade",
    Link: "#",
    Instagram: "#",
  },
  // {
  //   id: 6,
  //   Headshot: AfiaHeadshot,
  //   name: "Loyalist Afia Victor",
  //   skill: "Growth Strategist",
  //   intro:
  //     "Victor Afia is a growth marketing professional who specializes in building and optimizing growth funnels for SaaS and EdTech startups. He acquires and retains customers for brands through content marketing strategies and data-driven marketing.",
  //   LinkedIn: "https://www.linkedin.com/in/victor-afia-7112b81ab/",
  //   Email: "victorafia13@gmail.com",
  //   Twitter: "#",
  //   Link: "#",
  //   Instagram: "#",
  // },
  // {
  //   id: 7,
  //   Headshot: FredHeadshot,
  //   name: "Loyalist Olugbenro Fredrick",
  //   skill: "Video editor- Motion designer",
  //   intro:
  //     "I am a video editor and creative director. I specialize in editing videos for social media and youtube, and directing creative projects. I lead a teamed of skilled individuals who possess the services I require to successfully undergo whatever visual project ahead of us. I am a proficient user of Adobe After Effects, Adobe Premiere Pro, Davinci resolve and VSDC editor",
  //   LinkedIn: "https://www.linkedin.com/in/fredthe03/",
  //   Email: "olugbenrofredrick@gmail.com",
  //   Twitter: "https://twitter.com/fredthe03/",
  //   Link: "fredth03.vzy.io",
  //   Instagram: "https://www.instagram.com/fredthe03/",
  // },
];

export default function profile() {
  return (
    <Container p={2} maxW={"7xl"} mb={12} className="animate-bottom">
      <Box ml="4" p="5">
        <Heading fontSize="25px" fontWeight={"bold"}>
          Sigma Talents
        </Heading>

        <Text fontSize={"md"} my={4}>
          Sigma Talents are Loyal Sigmites with diverse skills and innate
          abilities who are commited to the growth of the club.
        </Text>
      </Box>
      <Container my={1} maxW={"100%"}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {ProfileOBJ.map(
            ({
              Headshot,
              name,
              skill,
              intro,
              LinkedIn,
              Email,
              Twitter,
              Instagram,
              Link,
            }) => (
              <Profilecard
                Headshot={Headshot}
                name={name}
                skill={skill}
                intro={intro}
                Email={Email}
                Link={Link}
                LinkedIn={LinkedIn}
                Twitter={Twitter}
                Instagram={Instagram}
              />
            )
          )}
        </Flex>
      </Container>
    </Container>
  );
}
