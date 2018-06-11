import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Text from "./Text";
import ButtonLink from "./ButtonLink";
import Link from "./Link";
import Paragraph from "./Paragraph";
import spacer from "../mixins/spacer";

const GiftsText = Text.extend`
  margin-bottom: ${props => spacer(2, props.breakpoint)};
`;

const Hero = () => (
  <Section id="gifts">
    <Heading>Gifts</Heading>
    <GiftsText>
      <Paragraph>
        Simply by being at our wedding, you will be getting us a wonderful gift
        – most of all, we want to spend the day with everyone we love and for
        you to celebrate with us.
      </Paragraph>

      <Paragraph>
        Should you want to give us anything extra, however, we will be going to
        the beautiful archipelago of the Azores on our honeymoon and would
        really appreciate any contribution to help us on our adventures.
      </Paragraph>

      <Paragraph>
        If you would like to make a gift to our honeymoon fund you can do so via
        PayPal using the button below or by calling our travel agent, Azores
        Choice, on <Link href="tel:01768 721020">01768 721020</Link>
      </Paragraph>
    </GiftsText>
    <ButtonLink href="https://www.paypal.com/pools/c/858WNidwXt">
      Contribute
    </ButtonLink>
  </Section>
);

export default Hero;
