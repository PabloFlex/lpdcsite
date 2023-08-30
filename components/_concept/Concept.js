import React from 'react';
import { motion } from 'framer-motion';

const Concept = ({close}) => {
    return (
        <motion.div className='conceptBox' initial={{opacity: 0, x:-100 }} animate={{opacity: 1, x:0  }} exit={{opacity: 0,x:-100 }} transition={{delay:0, ease:"easeOut", default: { duration: 0.5}}}>
            <img src='/image/crossBack.png' alt='close' className='close' onClick={() => close(false)} />
            <img src='/image/concept/mainLogo.png' alt='logo' className='logoConcept'/>
            <p className='textConcept'>La Patate Douce radio est un mélange de saveurs groovy et smoothy, une autoroute du soleil direction ta mer et purée que c’est bon !
                <br/><br/>
                Ce légume 4 saisons t’apporte de la douceur tout en donnant la pêche. Un assortiment Disco-Funk saupoudré de Bossa Nova, de Jazz accompagné par sa dose d’Electro et de musiques afro. 
                <br/><br/>
                Ici aucune Pub, uniquement du partage. Une bibliothèque constamment alimentée de nouveautés pour un plein de Vitamines C. 
                <br/><br/>
                Cette radio reste avant tout le projet d’un passionné dont le but est simple : 
            </p>
            <h3>DONNEZ LA PATATE (DOUCE)</h3>
        </motion.div>
    );
};

export default Concept;