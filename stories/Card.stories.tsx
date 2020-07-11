import React from 'react'
import Card from '../components/Card'
import { storiesOf } from '@storybook/react'


storiesOf('Card', module).add('Card', () => (
    <Card>
        <p>Hello</p>
    </Card>
))

