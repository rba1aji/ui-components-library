import React from 'react';
import Button from '../components/Button/Button.components';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  backgroundColor:'grey',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  primary: 'true',
  size: 'large',
  label: 'Button',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  size: 'small',
  label: 'Button',
  backgroundColor:'grey'
};
