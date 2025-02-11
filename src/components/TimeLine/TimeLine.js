import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hey, I’m Taner Acar – a frontend-focused full-stack developer passionate
        about building sleek, high-performance web applications. I specialize in
        React.js, Next.js, and TailwindCSS, crafting modern and responsive UIs
        that deliver seamless user experiences. On the backend, I work with
        Express.js, MongoDB, and RESTful APIs, ensuring efficient and scalable
        server-side solutions. Whether it’s transforming Figma designs into
        pixel-perfect interfaces or developing full-stack applications, I love
        turning ideas into reality with clean, maintainable code. Check out my
        projects and let’s build something awesome! 🚀
      </SectionText>
    </Section>
  );
};

export default Timeline;
