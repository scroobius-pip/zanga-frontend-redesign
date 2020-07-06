import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Button'

storiesOf('Button', module).add('Secondary', () => (
    <Button variant='primary' icon='Add' onClick={() => { }} text='List Property' />
))

