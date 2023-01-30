import React from "react";
import Scroll from "../components/Scroll/Scroll.components";

export default{
    title:'Components/Scroll on hover',
    component: Scroll,
};

const Template = (args) => <Scroll {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: 'black',
    backgroundColor: 'white',
    text: 'This is a Snow hill',
    image: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
    width: '250px',
    height: '150px'
};
