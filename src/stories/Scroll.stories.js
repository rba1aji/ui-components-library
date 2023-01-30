import React from "react";
import Animation from "../components/Animation/Animation.components";

export default{
    title:'Components/Hover Animation',
    component: Animation,
};

const Template = (args) => <Animation {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'black',
    backgroundColor: 'white',
    text: 'This is a Snow hill',
    image: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
    width: '250px',
    height: '150px'
};
