import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from '../components/Layout'
import Card from '../components/Card'


storiesOf('Layout', module).add('Layout', () => (
    <Layout>
        <Card><p>Hello</p></Card>
    </Layout>
))

