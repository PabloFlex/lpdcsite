import React from 'react';
import { motion } from 'framer-motion';

const Mixtapes = ({close}) => {
    return (
        <motion.div className='mixtapesBox' initial={{opacity: 0, x:-100 }} animate={{opacity: 1, x:0  }} exit={{opacity: 0,x:-100 }} transition={{delay:0, ease:"easeOut", default: { duration: 0.5}}}>
            <img src='/image/crossBack.png' alt='close' className='close' onClick={() => close(false)} />
            <h1>
                  <img src='/image/mixtapes/MIXTAPES.svg' alt="Playlist"></img>
            </h1>
            <p>RETROUVEZ ICI DES MIX FAITS SPÉCIALEMENT POUR LA RADIO PAR DES DJS BOURRÉS DE TALENT</p>
            <div className='mixtape n1'>
                <img src='/image/mixtapes/1.png' alt='album' className='imgMixtapes' />
                <h2 style={{width:'170%'}}>
                    <img src='/image/mixtapes/FERDIX.svg' alt='right'/>
                </h2>
                    <a href = "https://soundcloud.com/lapatatedouce/mix-from-ferdix-la-patate-douce-mixtape?in=lapatatedouce/sets/la-patate-douce-mixtapes" target = "_blank" rel = "noreferrer" style = {{ marginTop: '-10%'}}>
                    <h2>ÉCOUTER</h2>
                    <img src='/image/mixtapes/right.png' alt='right' className='rightMixtapes'/>
                    </a>
            </div>
            <div className='mixtape n2'>
                <img src='/image/mixtapes/2.png' alt='album' className='imgMixtapes' />
                <h2 style={{width:'150%'}}>
                    <img src='/image/mixtapes/tangz.svg' alt='right'/>
                </h2>
                    <a href = "https://soundcloud.com/lapatatedouce/mix-from-tangz-la-patate-douce-mixtape?in=lapatatedouce/sets/la-patate-douce-mixtapes"
                    target = "_blank"
                    rel = "noreferrer"
                    style = {
                        {
                            marginTop: '-10%'
                        }
                    } >
                        <h2>ÉCOUTER</h2>
                        <img src='/image/mixtapes/right.png' alt='right' className='rightMixtapes'/>
                    </a>
            </div>
            <div className='mixtape n3'>
                <img src='/image/mixtapes/3.png' alt='album' className='imgMixtapes' />
               <h2 style={{width:'150%'}}>
                    <img src='/image/mixtapes/elb.svg' alt='right'/>
                </h2>
                    <a  href = "https://soundcloud.com/lapatatedouce/mix-by-elb-la-patate-douce-mixtape?ref=clipboard&p=a&c=0&utm_campaign=social_sharing&utm_medium=text&utm_source=clipboard"
                    target = "_blank"
                    rel = "noreferrer"
                    style = {
                        {
                            marginTop: '-10%'
                        }
                    } >
                        <h2>ÉCOUTER</h2>
                        <img src='/image/mixtapes/right.png' alt='right' className='rightMixtapes'/>
                    </a>
            </div>
            <div className='mixtape n4'>
                <img src='/image/mixtapes/4.png' alt='album' className='imgMixtapes' />
               <h2 style={{width:'150%'}}>
                    <img src='/image/mixtapes/MARYOLO.svg' alt='right'/>
                </h2>
                    <a href = "https://soundcloud.com/lapatatedouce/mix-by-maryolo-la-patate-douce-mixtape?in=lapatatedouce/sets/la-patate-douce-mixtapes"
                    target = "_blank"
                    rel = "noreferrer"
                    style = {
                        {
                            marginTop: '-10%'
                        }
                    } >
                        <h2>ÉCOUTER</h2>
                        <img src='/image/mixtapes/right.png' alt='right' className='rightMixtapes'/>
                    </a>
            </div>
            <div className='mixtape n5'>
                <img src='/image/mixtapes/5.png' alt='album' className='imgMixtapes' />
                <h2 style={{width:'150%'}}>
                    <img src='/image/mixtapes/nofraje.svg' alt='right'/>
                </h2>
                    <a  href = "https://soundcloud.com/lapatatedouce/mix-from-nofraje-la-patate-douce-mixtape?in=lapatatedouce/sets/la-patate-douce-mixtapes"
                    target = "_blank"
                    rel = "noreferrer"
                    style = {
                        {
                            marginTop: '-10%'
                        }
                    } >
                        <h2>ÉCOUTER</h2>
                        <img src='/image/mixtapes/right.png' alt='right' className='rightMixtapes'/>
                    </a>
            </div>
            <div className='mixtape n6'>
                <img src='/image/mixtapes/6.png' alt='album' className='imgMixtapes' />
                <h2 style={{width:'150%'}}>
                    <img src='/image/mixtapes/FERDIX2.svg' alt='right'/>
                </h2>
                    <a href = "https://soundcloud.com/lapatatedouce/mix-by-ferdix-n2-la-patate-douce-mixtape?in=lapatatedouce/sets/la-patate-douce-mixtapes"
                    target = "_blank"
                    rel = "noreferrer"
                    style = {
                        {
                            marginTop: '-10%'
                        }
                    } >
                        <h2>ÉCOUTER</h2>
                        <img src='/image/mixtapes/right.png' alt='right' className='rightMixtapes'/>
                    </a>
            </div>
            <div className='mixtape n7'>
                <img src='/image/mixtapes/7.png' alt='album' className='imgMixtapes' />
                <h2 style={{width:'150%'}}>
                    <img src='/image/mixtapes/EMILIEN.svg' alt='right'/>
                </h2>
                    <a  href = "https://soundcloud.com/lapatatedouce/mix-from-emilien-la-patate-douce-mixtape?ref=clipboard&p=a&c=0&utm_campaign=social_sharing&utm_medium=text&utm_source=clipboard"
                    target = "_blank"
                    rel = "noreferrer"
                    style = {
                        {
                            marginTop: '-10%'
                        }
                    } >
                        <h2>ÉCOUTER</h2>
                        <img src='/image/mixtapes/right.png' alt='right' className='rightMixtapes'/>
                    </a>
            </div>

            <h2 className='decouvrez'>DECOUVREZ TOUTES NOS MIXTAPES SUR NOTRE <a href="https://soundcloud.com/lapatatedouce" target="_blank" rel="noreferrer">SOUNDCLOUD</a> </h2>

        </motion.div>
    );
};

export default Mixtapes;