import React from 'react'
import './Foot.css'

import RoundButton from '../UI/RoundButton/RoundButton'
import * as ReactIcon from 'react-icons/io5'

const Footer = () => {

    const scrollTopHandle = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='FooterContainer'>
            <div className='FooterInfo'>
                <p className='text'>
                    This is a footer made with love and <ReactIcon.IoHeart color='rgb(221, 74, 74)' fontSize={18} /> <br/>
                    Designed by Junior web developers for training propouse. 
                    This web is currently under construction, please take for good to wait. 
                </p>
            </div>
            <div className='SocialMediaContainer'>
                <div className='SocialMediaButton GitHub'>
                    <ReactIcon.IoLogoGithub className='SocialIcon'/>
                    <p className='SocialMediaName'>Github</p>
                </div>
                <div className='SocialMediaButton LinkedIn'>
                    <ReactIcon.IoLogoLinkedin className='SocialIcon'/>
                    <p className='SocialMediaName'>LinkedIn</p>
                </div>
                <div className='SocialMediaButton Mail'>
                    <ReactIcon.IoMailSharp className='SocialIcon'/>
                    <p className='SocialMediaName'>Mail</p>
                </div>
                <div className='SocialMediaButton Blog'>
                    <ReactIcon.IoNewspaperSharp className='SocialIcon'/>
                    <p className='SocialMediaName'>Blog</p>
                </div>
            </div>
            <div className='ScrollTopButton'>
                <RoundButton selectedIcon={<ReactIcon.IoChevronUp/>} onScrollTop={scrollTopHandle}/>
            </div>
        </div>
    )
}

export default Footer