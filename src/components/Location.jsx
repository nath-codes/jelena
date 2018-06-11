import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Map from "./Map";
import Text from "./Text";
import Paragraph from "./Paragraph";
import Link from "./Link";

const Location = () => (
  <Section id="location">
    <Heading>Location</Heading>
    <Map />
    <Text>
      <Paragraph>
        <Link href="http://kingswestonhouse.co.uk/">Kings Weston House</Link> is
        approximately fifteen minutes' drive from central Bristol, Temple Meads
        train station and near to Blaise Castle Estate. There is a free car park
        in the house grounds. If you need a taxi from the centre, we would
        recommend calling V Cars on{" "}
        <Link href="tel:0117 9252626">0117 9252626</Link> or using Uber.
      </Paragraph>
      <Paragraph>
        If you need to spend the night in Bristol before or after the wedding
        then please ask us for our recommended places to stay.
      </Paragraph>
    </Text>
  </Section>
);

export default Location;
