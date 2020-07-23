import React from 'react'

const ReactMarkdown = require('react-markdown')

export default ({ description = '' }) => {
    return <ReactMarkdown source={description} />
}