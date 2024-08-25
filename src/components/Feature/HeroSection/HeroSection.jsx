import { motion } from 'framer-motion';
import { Button } from 'antd';
import icon from '../../../assets/images/if.mp4';
import { Link } from 'react-router-dom';


function HeroSectionWithVideo() {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 50, delay: 0.3 }
        }
    };

    return (
        <div className="relative bg-cover bg-center bg-no-repeat h-screen ">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src={icon} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <motion.div
                className="relative flex flex-col items-center justify-center h-full text-center p-6 md:p-12 "
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >

                <div className=" flex justify-center gap-8      w-full">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button type="primary" size="large">
                            <Link to='/coins' >
                                Get Started
                            </Link>
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button type="default" size="large">
                            Learn More
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default HeroSectionWithVideo;
