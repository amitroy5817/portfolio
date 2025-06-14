"use client"
import { useState } from 'react';
import { useMousePosition } from "react-haiku";

export default function Footer() {
    const { x, y } = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);

    return (
        <footer className="mb-25 mx-auto relative" id='footer'>
            <div 
                className="flex justify-center items-center relative w-fit mx-auto flex-col">
                <div onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className='flex flex-col'
                >
                <a className="text-5xl font-bold cursor-pointer p-5 text-center" href="https://drive.usercontent.google.com/download?id=1ZDD3MViX-_jSpkMOyD-m4f3YptNQDPCJ&export=download">LET<span className="text-red-500">'</span>S WORK TOGETHER</a>
                {isHovering && (
                    <div
                        className="fixed pointer-events-none z-50 transition-all duration-100 ease-in"
                        style={{
                            left: x+25,
                            top: y+20
                        }}
                    >
                        <button
                            className="bg-red-500 text-white px-6 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="icon is-small"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 9L5 4H3V9V10V11L13 11V13H11V15H13V13H15V11L17 11V9H15V7H13V5H11V7L13 7V9H5Z" fill="currentColor"></path></svg>
                            DOWNLOAD CV
                        </button>
                    </div>
                )}
                <span className='text-center'>Open for <b>freelance Projects</b> & <b>Internships</b></span>
                </div>

                <a href="mailto:hello@amitroy.tech" className="text-center text-gray-500">hello@amitroy.tech</a>
                </div>
                <span className="text-center text-black/5 text-[6em] md:text-[15em] font-bold absolute -bottom-25 left-15 pointer-events-none leading-none">v1.0.0</span>
        </footer>
    );
}