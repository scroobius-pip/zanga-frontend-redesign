import * as React from 'react'
import { storiesOf } from '@storybook/react'
import EmptyStateComponent from '../components/EmptyState'
import { withKnobs, select, text, boolean, number } from "@storybook/addon-knobs";

export default {
    title: 'EmptyState',
    decorators: [withKnobs]
}


export const EmptyState = () => {
    return <EmptyStateComponent
        className=''
        text='Your search did not match any properties'
    />
}