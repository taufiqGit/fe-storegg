import { Meta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/GameItem";


export default {
    title: 'Component/molecules/GameItem',
    component: GameItem
} as Meta

const Template = (args: GameItemProps)=> <GameItem {...args}/>

export const Default = Template.bind({})

Default.args = {
    thumbnail: '/img/Thumbnail-1.png',
    title: 'ololo',
    typeGame: 'ikikik'
}