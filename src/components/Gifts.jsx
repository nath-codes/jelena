import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Text from "./Text";
import ButtonLink from "./ButtonLink";
import spacer from "../mixins/spacer";

const GiftsText = Text.extend`
  margin-bottom: ${spacer(2)};
`;

const Hero = () => (
  <Section id="gifts">
    <Heading>Gifts</Heading>
    <GiftsText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima
      deserunt dolore animi itaque nemo doloremque? Aut, aperiam in quam commodi
      corrupti laborum assumenda, dolorum impedit exercitationem nesciunt atque
      vel!
    </GiftsText>
    <ButtonLink href="https://amazon.co.uk">Contribute</ButtonLink>
  </Section>
);

export default Hero;
