import { useState } from 'react';

import Slide1 from '../assets/slide1.jpg';
import Slide2 from '../assets/slide2.jpg';
import Slide3 from '../assets/slide3.jpg';
import Slide4 from '../assets/slide4.jpg';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const Slides = [ Slide1, Slide2, Slide3, Slide4 ];

    setInterval((Slides) => {
        if(currentSlide >= 3) {
            setCurrentSlide(0);
            return;
        }
        setCurrentSlide(currentSlide+1);
        return;
    }, 5000);

    return (
        <div className='my-4 h-full'>
            <img src={Slides[currentSlide]} alt="Slides" className='h-full' />
        </div>
    );
};

export default Carousel;