import centered from "@storybook/addon-centered";
import { withKnobs } from "@storybook/addon-knobs/react";
import { configure, addDecorator } from "@storybook/react";

// automatically import all files ending in *.stories.tsx
const req = require.context("../../stories", true, /\.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

addDecorator(centered);
addDecorator(withKnobs);
configure(loadStories, module);
