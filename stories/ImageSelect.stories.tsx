import React from 'react'
import Card from '../components/Card'
import { storiesOf } from '@storybook/react'
import ImageSelect from '../components/ImageSelect'


storiesOf('ImageSelect', module).add('ImageSelect', () => (
    <ImageSelect
        onChange={console.log}

    />
))

