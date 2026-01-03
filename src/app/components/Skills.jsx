'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import {
    FaHtml5,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaFigma
} from "react-icons/fa";

import {
    SiExpress,
    SiFramer,
    SiMongodb,
} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
const skills = [
    { name: "HTML/CSS", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-4xl text-cyan-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-4xl text-gray-800 dark:text-gray-200" /> },
    { name: "React.js", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: "Next.js", icon: <TbBrandNextjs className="text-4xl text-black dark:text-gray-200" /> },
    { name: "Zustand", image: "/zustand.svg" },
    { name: "Git", icon: <FaGithub className="text-4xl text-orange-600" /> },
    { name: "Figma", icon: <FaFigma className="text-4xl text-pink-500" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-4xl text-black dark:text-gray-200" /> },
];



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

export default function Skills() {
    return (
        <section className="bg-[#e9e8e8] dark:bg-[#252525] px-4 pt-8 pb-16 mb-20"
        style={{backgroundImage: "url('/topolines.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", backdropFilter: "brightness(0.8)"}}
        >
            <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 mb-12 text-center font-bold">
                Skills
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                        }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-800/50 transition-shadow flex flex-col items-center gap-4"
                    >
                        {skill.icon || <Image src={skill.image} alt={skill.name} width={40} height={40} />}
                        <h3 className="text-sm md:text-xl text-gray-800 dark:text-gray-200 uppercase">{skill.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
