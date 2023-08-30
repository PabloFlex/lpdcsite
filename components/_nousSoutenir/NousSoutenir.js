import React from 'react';
import { motion } from 'framer-motion';

const NousSoutenir = ({close}) => {
    return (
        <motion.div className='soutenirBox' initial={{opacity: 0, x:-100 }} animate={{opacity: 1, x:0  }} exit={{opacity: 0,x:-100 }} transition={{delay:0, ease:"easeOut", default: { duration: 0.5}}}>
            <img src='/image/crossBack.png' alt='close' className='close' onClick={() => close(false)} />
            <img src='/image/support/title.png' className='title' alt='soutenir'/>
            <img src='/image/support/mainVisu.png' className='image' alt='soutenir'/>
            <p>Si vous êtes une personne absolument invroyable et que vous voulez faire une bonne action dans ce monde de brute, vous pouvez nous apporter votre soutien en faisant un don !</p>
            <ul>Les dons nous aideront à:
                <li>Continuer à avoir ZERO PUB</li>
                <li>Faire évoluer l’App & Site</li>
                <li>Organiser des évènements</li>
                <li>Payer les nombreux frais existants</li>
            </ul>
            <img src='/image/support/arrow.png' className='arrow' alt='soutenir'/>
            <a href = "https://lydia-app.com/pots?id=75606-soutien-pour-la" target = "_blank" rel = "noreferrer" >
                <img src='/image/support/button.png' className='btn' alt='soutenir'/>
            </a>
        </motion.div>
    );
};

export default NousSoutenir;