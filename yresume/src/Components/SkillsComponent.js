import React from "react";
import { Progress, Segment } from "semantic-ui-react";

const SkillsComponent = () => (
  <Segment inverted>
    <Progress percent={85} inverted color="blue" progress />
    <Progress percent={38} inverted color="violet" progress />
    <Progress percent={47} inverted color="purple" progress />
    <Progress percent={29} inverted color="pink" progress />
    <Progress percent={68} inverted color="brown" progress />
    <Progress percent={36} inverted color="grey" progress />
    <Progress percent={72} inverted color="black" progress />
  </Segment>
);

export default SkillsComponent;
