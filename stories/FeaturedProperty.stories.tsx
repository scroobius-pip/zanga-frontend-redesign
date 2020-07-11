import React from 'react'
import Card from '../components/FeaturedPropertyCard'
import { storiesOf } from '@storybook/react'


storiesOf('Featured Property Card', module).add('Featured Property Card', () => (
    <Card
        description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cum deserunt adipisci ipsum cumque dignissimos est provident dolores rem recusandae.'
        image='https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg'
        price='₦ 300.000.00'
        title='Duplex in wuye, abuja'
        id='daaa'
    />
))

