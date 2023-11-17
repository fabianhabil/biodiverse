'use client';

import { useEffect, useState } from 'react';

export default function WindowSize() {
    const [windowSize, setWindowSize] = useState<{
        innerHeight: number;
        innerWidth: number;
    }>(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize(): any {
        if (typeof window !== 'undefined') {
            const { innerWidth, innerHeight } = window;
            return { innerWidth, innerHeight };
        }
    }

    return windowSize;
}
