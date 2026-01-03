'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#252525] transition-opacity duration-500 ${
                isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="text-4xl font-bold text-[#ec4e39] mb-8">
                Portfolio 2026<sup>©</sup>
            </div>
        </div>
    );
} 