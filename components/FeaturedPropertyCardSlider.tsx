import React from 'react'
import Slider from 'react-styled-carousel-am'
import FeaturedPropertyCard, { Props as FeaturedProperty } from './FeaturedPropertyCard'

interface Props {
    properties: FeaturedProperty[]
}

export default (props: Props) => {
    return <>
        <Slider
            cardsToShow={1}
            autoSlide={4000}
            showArrows={false}
        >
            {props.properties.map((property, i) => {
                return <div
                    className='w-full p-5 flex justify-start align-middle items-center'
                >
                    <FeaturedPropertyCard
                        {...property}
                        key={i}
                    />
                </div>
            })}
        </Slider>
    </>
}