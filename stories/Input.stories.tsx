import * as React from 'react'
import TextInput from '../components/TextInput'
import DropdownInput from '../components/Dropdown'
import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'Input',
    decorators: [withKnobs]
}

export const Text = () => {
    const withLabel = boolean('With label', true)
    return <TextInput
        placeholder={'Placeholder'}
        onChange={() => { }}
        label={withLabel && 'Location'}

    />
}

export const Dropdown = () => {
    return <DropdownInput
        initialValue='Abuja'
        options={[{ label: 'Abuja', value: 'abuja' }, { label: 'Lagos', value: 'lagos' }]}
        label='State'
        onChange={() => { }}
    />
}