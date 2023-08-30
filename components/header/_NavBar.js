import React from 'react';
import {
       useState
} from 'react';
import { AnimatePresence } from 'framer-motion'
import Navigation from './Nav2/Navigation';


const NavBar = () => {
    const [Open, setOpen] = useState(false);


    return (
            <AnimatePresence>
                <div className='shop' alt='shop'>
                    <a href='https://shop-lapatatedouceradio.com/' target = "_blank" rel = "noreferrer">
                        <img src='/image/menu/shop.png' className='btnShop' alt='shop'/>
                    </a>
                </div>
                <div className='burgerMenu' onClick={()=>{setOpen(true);}} >
                  <div className='o1' onClick={()=>{setOpen(true);}}/>
                  <div className='o2' onClick={()=>{setOpen(true);}} />
                  <div className='o3' onClick={()=>{setOpen(true);}}/>
                </div>
                {Open && <Navigation closeMenu={setOpen} />}
            </AnimatePresence>
    );
};

export default NavBar;