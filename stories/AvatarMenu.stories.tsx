import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Button'
import { withKnobs, text } from "@storybook/addon-knobs";
import AvatarMenu from '../components/AvatarMenu';

export default {
    title: 'Avatar Menu',
    decorators: [withKnobs]
}
// storiesOf('Button', module).add('Primary', () => (
//     <Button variant='primary' icon='Add' onClick={() => { }} text='List Property' />
// ))

// storiesOf('Button', module).add('Primary (Disabled)', () => (
//     <Button variant='primary' icon='Add' disabled onClick={() => { }} text='List Property' />
// ))

export const AvatarMenuComponent = () => {
    return <AvatarMenu
        userName={text('username', 'Simdi')}
    />
}