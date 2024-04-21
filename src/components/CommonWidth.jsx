import React, { useState, useEffect } from 'react';

export const CommonWidth = (theme) => {

    let [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    let borderColor = theme === 'dark' ? 'border-blue-400' : 'border-gray-400';

    useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return deviceWidth;
}