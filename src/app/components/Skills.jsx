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
    { name: "Express", icon: <SiExpress className="text-4xl text-gray-800" /> },
    { name: "React.js", icon: <FaReact className="text-4xl text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
    { name: "Next.js", icon: <TbBrandNextjs className="text-4xl text-black" /> },
    { name: "Zustand", image: "/zustand.svg" },
    { name: "Git", icon: <FaGithub className="text-4xl text-orange-600" /> },
    { name: "Figma", icon: <FaFigma className="text-4xl text-pink-500" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-4xl text-black-600" /> },
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
        <section className="h-screen max-w-7xl bg-[#e9e8e8] mx-auto px-4">
            <h2 className="text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 mb-12 text-center font-bold">
                Skills
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                        }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center gap-4"
                    >
                        {skill.icon || <Image src={skill.image} alt={skill.name} width={40} height={40} />}
                        <h3 className="text-sm md:text-xl text-gray-800 uppercase">{skill.name}</h3>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
