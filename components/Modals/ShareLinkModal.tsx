import React from 'react'
import Card from '../Card'
import InfoBar from '../InfoBar'
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import TextInput from '../TextInput'

export interface Props {
    url: string
    title: string
}

const ShareButton = ({ title, url }: Props) => {
    const ButtonProps = {
        url,
        style: {
            marginRight: 10
        },
        title
    }

    const IconProps = {
        round: true,
        size: 35
    }

    return <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
        <FacebookShareButton quote='' hashtag='#Realestate' {...ButtonProps} >
            <FacebookIcon {...IconProps} />
        </FacebookShareButton>
        <TwitterShareButton {...ButtonProps} hashtags={['myzanga', 'property', 'realestate']} >
            <TwitterIcon {...IconProps} />
        </TwitterShareButton>
        <WhatsappShareButton separator=' ' {...ButtonProps}>
            <WhatsappIcon   {...IconProps} />
        </WhatsappShareButton>
    </div>
}

export default (props: Props) => {
    return <Card noShadow>
        <div>
            <h2 className=' text-center font-pop text-xl  font-bold text-blue mb-5'>Your Referral Link </h2>
            <InfoBar
                icon='Info'
                text='Share this link on any platform and earn per visit.'
                className='text-blue mb-5 opacity-75'
            />
            <TextInput

                editable={false}
                value={props.url}
            />
            <div className='flex justify-center mt-5'>
                <ShareButton  {...props} />
            </div>
        </div>
    </Card>
}

