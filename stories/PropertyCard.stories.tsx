import React from 'react'
import { storiesOf } from '@storybook/react'
import PropertyCard from '../components/PropertyCard'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
    title: 'PropertyCard',
    decorators: [withKnobs]
}

export const PropertyCardComponent = () => (
    <PropertyCard

        {...property}
        featured={boolean('Featured', false)}


    />
)

const property = {
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut iusto odit magni tempore deserunt repellendus animi blanditiis quam reiciendis veritatis iure suscipit fuga fugit nesciunt aperiam totam voluptates eius odio, similique, quia dolores? Repellat atque iste fuga eligendi sit dignissimos mollitia consequatur at ut ullam ab esse sed omnis dolores, corporis magnam placeat quidem! Sint excepturi qui similique dignissimos temporibus corporis nam molestiae amet, quia accusamus fuga consequuntur et porro labore error sunt velit eveniet eum vitae voluptatem aliquid recusandae culpa? Facilis, soluta. Harum magnam quaerat adipisci doloremque libero sit rem voluptate magni, eius accusamus quidem dicta nobis porro asperiores?',
    id: 'sda',
    image: 'https://ik.imagekit.io/myzanga/property_o444TeODtMI.jpg',
    price: '₦ 300.000.00',
    title: 'Duplex in wuye, abuja',
    bounty: 50,
    location: 'Abuja, Gwarinpa',

}