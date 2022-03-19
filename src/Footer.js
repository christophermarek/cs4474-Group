import { motion } from "framer-motion";

export const Footer = ({ pageSelected, setPageSelected }) => {

    const home = require('./assets/home.png')

    const footer_items = [
        { text: 'Home', src: home },
        { text: 'Search', src: home },
        { text: 'Your Library', src: home },
        { text: 'Discover', src: home }
    ]

    return (
        <div className='footer'>
            {footer_items.map((item, index) =>
                <motion.div
                    // whileHover={{ scale: 1.1}} 
                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                    className={'footer_item ' + (pageSelected === item.text ? ('selected') : (''))} onClick={() => setPageSelected(item.text)}
                >
                    <img src={item.src} />
                    <p>{item.text}</p>
                </motion.div>
            )}
        </div>
    )
}