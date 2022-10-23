import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CharacterCard from "./index";

export default {
  title: "Components/CharacterCard",
  component: CharacterCard,
  argTypes: {},
} as ComponentMeta<typeof CharacterCard>;

const Template: ComponentStory<typeof CharacterCard> = (args) => (
  <CharacterCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name:"Leandro",
  character: "Alves",
  profile_path: ""
};