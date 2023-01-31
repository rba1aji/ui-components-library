import React from "react";
import IFrameText from "../iframe_components/Text.components";

export default {
    title: 'Components/IFrame Text',
    component: IFrameText,
};

const Template = (args) => <IFrameText {...args} />;

export const Default = Template.bind({});
Default.args = {};