import React, { useState, useEffect } from 'react';

const ImageSlideshow = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Cycle through images
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // change image every 3 seconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow-container" style={{ textAlign: 'center' }}>
            <button onClick={prevSlide}>❮</button>
            <img
                src={"/projectImages/"+images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                style={{ width: '100%', height: '100%', borderRadius: '8px' }}
            />
            <button onClick={nextSlide}>❯</button>
        </div>
    );
};

export default ImageSlideshow;
