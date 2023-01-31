import EmojiAnim from "../shadowroot_components/JSSelector/Anim.components";

export default {
    title: 'Components/Shadow Root/JS Selector/Anim',
    component: EmojiAnim
}

const Template = (args) => <EmojiAnim {...args} />;

export const Default = Template.bind({});
Default.args = {};