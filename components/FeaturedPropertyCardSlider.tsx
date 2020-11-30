import React from 'react'
import Slider from 'react-styled-carousel-am'
import FeaturedPropertyCard, { Props as FeaturedProperty } from './FeaturedPropertyCard'

export interface Props {
    properties: FeaturedProperty[]
}

export default (props: Props) => {
    return <div
        className="grid grid-cols-1  sm:grid-cols-2 gap-4 md:grid-cols-3 "
    // cardsToShow={1}
    // autoSlide={4000}
    // showArrows={false}
    >
        {props.properties.map((property, i) => {
            return <div

            >
                <FeaturedPropertyCard
                    {...property}
                    key={i}
                />
            </div>
        })}
    </div>

}