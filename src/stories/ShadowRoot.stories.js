import React from "react";
import ShadowRootText from "../shadowroot_components/Text.components";

export default {
    title: 'Components/Shadow Root/Text',
    component: ShadowRootText,
};

const Template = (args) => <ShadowRootText {...args} />;

export const Default = Template.bind({});
Default.args = {};