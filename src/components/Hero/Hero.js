import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Taner Acar,
          <br />
          Bachelor of Computer Engineering
        </SectionTitle>
        <SectionText></SectionText>

        <Button onclick={() => (window.location = "mailto:1taneracar@gmail.com")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
