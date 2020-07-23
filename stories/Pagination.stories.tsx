import React from 'react'
import { storiesOf } from '@storybook/react'
import Pagination from '../components/Pagination'
import { withKnobs, boolean } from '@storybook/addon-knobs'

export default {
    title: 'Pagination',
    decorators: [withKnobs]
}

export const PaginationComponent = () => (
    <Pagination

        currentPage={1}
        onChange={(number) => { }}
        pageSize={5}
        totalCount={15}
        


    />
)