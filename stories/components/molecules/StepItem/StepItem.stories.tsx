import { Meta } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/StepItem";

export default {
    title: 'Component/molecules/StepItem',
    component: StepItem
} as Meta

const Template = (args: StepItemProps)=> <StepItem {...args}/>

export const Default = Template.bind({})

Default.args = {
    icon: 'step-1',
    title: 'Hahah',
    desc1: 'jauiuh hahha',
    desc2: 'juauja'
}