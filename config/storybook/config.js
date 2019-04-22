import centered from "@storybook/addon-centered";
import { withKnobs } from "@storybook/addon-knobs/react";
import { configure, addDecorator } from "@storybook/react";
import { setIntlConfig, withIntl } from "storybook-addon-intl";

// Load the locale data for all your defined locales
import { addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import esLocaleData from "react-intl/locale-data/es";

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

import { messages } from "../../locales/messages";
const getMessages = locale => messages[locale];

setIntlConfig({
  locales: ["en", "es"],
  defaultLocale: "es",
  getMessages
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../../stories", true, /\.stories\.tsx$/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

addDecorator(centered);
addDecorator(withKnobs);
addDecorator(withIntl);
configure(loadStories, module);
