import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Button'
import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'Buttons',
    decorators: [withKnobs]
}
// storiesOf('Button', module).add('Primary', () => (
//     <Button variant='primary' icon='Add' onClick={() => { }} text='List Property' />
// ))

// storiesOf('Button', module).add('Primary (Disabled)', () => (
//     <Button variant='primary' icon='Add' disabled onClick={() => { }} text='List Property' />
// ))

export const ButtonComponent = () => {
    return <Button
        variant={select('Variant', { Primary: 'primary', Secondary: 'secondary' }, 'primary', 'buttons')}
        icon='Search'
        onClick={() => { }}
        text='List Property'
        disabled={boolean('Disabled', false)}
    />
}