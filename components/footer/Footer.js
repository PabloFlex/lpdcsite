import React from 'react';

const Footer = () => {


    return (
        <div className='footer'>
            <div className='logos'>
              
                <a href='https://soundcloud.com/lapatatedouce' target="_blank" rel="noreferrer" >
                    <img src='/image/soundcloud.png' alt='logo' className='soundcloud' />
                </a>
                <a href='https://www.instagram.com/lapatatedouce_radio/' target="_blank" rel="noreferrer" >
                    <img src='/image/insta.png' alt='logo' className='insta' />
                </a>
            </div>
            <div className='btnApp'>
                <a href='https://apps.apple.com/fr/app/la-patate-douce/id1542981247' target="_blank" rel="noreferrer" >
                    <img src='/image/appStore.svg' alt='logo' className='btn1' />
                </a>
                <a href = 'https://play.google.com/store/apps/details?id=la.patate.douce'
                target = "_blank"
                rel = "noreferrer" >
                    <img src='/image/googlePlay.svg' alt='logo' className='btn2'/>
                </a>
            </div>
                

        </div>
    );
};

export default Footer;