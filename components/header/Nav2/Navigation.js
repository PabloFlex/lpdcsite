import React from 'react';
import {
    useState
} from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import Backgrounds from '../../_backgrounds/Backgrounds'
import Jingles from '../../__jingles/Jingles'
import Concept from '../../_concept/Concept'
import Mixtapes from '../../_mixtapes/Mixtapes'
import Selections from '../../_selections/Selections'
import Goodies from '../../_goodies/Goodies'
import NousSoutenir from '../../_nousSoutenir/NousSoutenir'



const Navigation = ({closeMenu}) => {

    const [backgrounds, setBackgrounds] = useState(false);
    const [jingles, setJingles] = useState(false);
    const [concept, setConcept] = useState(false);
    const [mixtapes, setMixtapes] = useState(false);
    const [selection, setSelection] = useState(false);
    const [goodies, setGoodies] = useState(false);
    const [nousSoutenir, setNousSoutenir] = useState(false);
    
    return (
        <AnimatePresence >
            <motion.nav className='Navigation' key="child" initial={{opacity: 0 }} animate={{opacity: 1 }} exit={{opacity: 0 }} transition={{delay:0, ease:"easeOut", default: { duration: 0.7}}} >

                {backgrounds && <Backgrounds close={setBackgrounds} />}
                {jingles && <Jingles close={setJingles} />}
                {concept && <Concept close={setConcept} />}
                {mixtapes && <Mixtapes close={setMixtapes} />}
                {selection && <Selections close={setSelection} />}
                {goodies && <Goodies close={setGoodies} />}
                {nousSoutenir && <NousSoutenir close={setNousSoutenir} />}


                <img src='/image/crossBack.png' alt='close' className='close' onClick={() => closeMenu(false)}/>
                <img src='/image/menu/titleMenu.png' className='titleMenu' alt='Menu'onClick={() => closeMenu(false)} />
                <div className='Menu'>
                    <img src='/image/menu/background.png'className='btnImg' alt='btn' onClick={()=>{setBackgrounds(true);}} />
                    <img src='/image/menu/jingle.png'className='img2' alt='btn' onClick={()=>{setJingles(true);}} />   
                    <img src='/image/menu/concept.png'className='btnImg' alt='btn' onClick={()=>{setConcept(true);}} />    
                    <div className='group1'>
                        <img src='/image/menu/mixtapes.png'className='btn' alt='btn' onClick={()=>{setMixtapes(true);}} />
                        <img src='/image/menu/playlists.png'className='btn' alt='btn' onClick={()=>{setSelection(true);}} />
                    </div>
                    <div className='group3'>
                        <a href='https://shop-lapatatedouceradio.com/' target = "_blank" rel = "noreferrer">
                            <img src='/image/menu/goodies.png'className='btnImg2' alt='btn' />
                        </a>
                    </div>
                    <img src='/image/menu/soutenir.png'className='btnImg' alt='btn' onClick={()=>{setNousSoutenir(true);}} /> 
                    <div className='group2'>
                        <a href="https://linktr.ee/LaPatateDouce" target="_blank" rel="noreferrer">
                            <img src='/image/menu/appMobile.png'className='btnImg' alt='btn' />
                        </a>
                        <a href="https://www.instagram.com/lapatatedouce_radio/" target="_blank" rel="noreferrer">
                            <img src='/image/menu/instagram.png'className='btnImg' alt='btn'/>
                        </a> 
                    </div>
                      <a href = "https://www.pigallestud.io/" target="_blank" rel="noreferrer">
                        <p style = {{color:'#F4ECC4',fontFamily:'FuturaBold',fontSize:14}}>Made with 🍠 by </p>
                        <p style = {{color:'#F4ECC4',fontFamily:'FuturaBold',fontSize:14, textDecoration:'underline'}} className = 'by'>Le Studio Pigalle</p>
                     </a> 
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};
export default Navigation;