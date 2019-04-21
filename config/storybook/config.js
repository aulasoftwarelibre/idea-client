import centered from "@storybook/addon-centered";
import { withKnobs } from "@storybook/addon-knobs/react";
import { configure, addDecorator } from "@storybook/react";

import JavascriptTimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import es from "javascript-time-ago/locale/es";

JavascriptTimeAgo.locale(en);
JavascriptTimeAgo.locale(es);

// automatically import all files ending in *.stories.tsx
const req = require.context("../../stories", true, /\.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

addDecorator(centered);
addDecorator(withKnobs);
configure(loadStories, module);
