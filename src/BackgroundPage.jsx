import { useState, useEffect } from 'react';
import CloudsImg from './assets/clouds.png';
import RainImg from './assets/rain.png';
import ClearImg from './assets/clear.png';
import DrizzleImg from './assets/drizzle.png';
import SnowImg from './assets/snow.png';
import './BackgroundPage.css';

export default function BackgroundPage() {
    const images = [CloudsImg, RainImg, ClearImg, DrizzleImg, SnowImg];
    const [currImage, setCurrentImage] = useState(CloudsImg);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => {
                const currentIndex = images.indexOf(prev);
                return images[(currentIndex + 1) % images.length];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, );
    

    return (
        <div
            className="background-container"
            style={{ backgroundImage: `url(${currImage})` }}
        >
        </div>
    );
}
