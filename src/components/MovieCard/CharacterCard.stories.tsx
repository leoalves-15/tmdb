import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MovieCard from "./index";

export default {
  title: "Components/MovieCard",
  component: MovieCard,
  argTypes: {},
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  poster_path: "",
  title: "Dia novo",
  release_date: "2022-05-05",
  id: 4,
};
