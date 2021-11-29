import { Meta } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/Input";

export default {
    title: 'Component',
    component: Input
} as Meta

const Template = (args: InputProps)=> <Input {...args}/>

export const Default = Template.bind({})

Default.args = {
    label: 'aaa'
}