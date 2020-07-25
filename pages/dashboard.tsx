import React from 'react'
import Layout from '../components/Layout'
import WithSession from '../components/WithSession'
import SelectAccountType from '../components/SelectAccountType'


const Page = ({ session }) => {
    return <Layout session={session}>
        <div className='max-w-lg mt-16 m-auto'>
            <SelectAccountType />
        </div>
    </Layout>
}



export default WithSession(Page)