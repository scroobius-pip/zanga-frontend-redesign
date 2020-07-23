import * as React from 'react'
import { storiesOf } from '@storybook/react'
import InfoBarComponent from '../components/InfoBar'
import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'InfoBar',
    decorators: [withKnobs]
}


export const InfoBar = () => {
    return <InfoBarComponent
        className='text-grey'
        icon='Info'
        text='Withdraw your zanga balance into your bank account'
    />
}