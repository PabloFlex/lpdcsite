import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/Skyblue';
import React from 'react';
import mobile from './mobile.json'


const Mobile = () => {

    const setting ={
        type:'fade',
        direction: 'ltr',
        height:'100vh',
        width:'100vw',
        arrows: false ,
        pagination: false ,
        autoplay: true,
        rewind: true,
        interval: 500,
        speed: 0,

    };
    return (
        <div className='carousel'>
            <Splide options={setting}>
                    {mobile.map(mobile => {
                            return(
                            <SplideSlide  key={mobile.id} >
                                <img src={mobile.image} alt='fond' className='fond' />
                                <div className='ecran'>
                                    <img src={mobile.logo} alt='logo' className='logo'/>
                                    <img src={mobile.text} alt='text' className='text' />
                                    <div className='btnAll'>
                                        <a href='https://apps.apple.com/fr/app/la-patate-douce/id1542981247' target="_blank" rel="noreferrer" >
                                            <img src={mobile.btn1} alt='btn1' className='btn1'/>
                                        </a>
                                        <a href='' target="_blank" rel="noreferrer" >
                                            <img src={mobile.btn2} alt='btn2'className='btn2' />
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>
                        )
                    })} 
            </Splide>          
        </div>
    );
};

export default Mobile;