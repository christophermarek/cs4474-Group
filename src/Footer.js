import { motion } from "framer-motion";

export const Footer = ({ pageSelected, setPageSelected }) => {


    const footer_items = [
        { text: 'Home', src: require('./assets/home.svg').default },
        { text: 'Search', src: require('./assets/search.svg').default },
        { text: 'Your Library', src: require('./assets/library.svg').default },
        { text: 'Discover', src: require('./assets/discover.svg').default }
    ]

    const nav_footer = (page) => {
        if(page !== 'Search'){
            setPageSelected(page)
        }
    }

    return (
        <div className='footer'>
            {footer_items.map((item, index) =>
                <motion.div
                    // whileHover={{ scale: 1.1}} 
                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                    className={'footer_item ' + (pageSelected === item.text ? ('selected') : (''))} onClick={() => nav_footer(item.text)}
                >
                    <img src={item.src} alt={item.text}/>
                    <p>{item.text}</p>
                </motion.div>
            )}
        </div>
    )
}