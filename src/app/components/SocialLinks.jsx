import { Github, Linkedin, Globe, Mail } from "lucide-react";
export default function SocialLinks() {
    const socialLinks = [
        {
          icon: <Github className="size-6" />,
          href: "https://github.com/amitroy-thedev",
        },
        {
          icon: <Linkedin className="size-6" />,
          href: "https://linkedin.com/in/amitroy-thedev",
        },
        {
          icon: <Globe className="size-6" />,
          href: "https://amitroy.tech",
        },
        {
          icon: <Mail className="size-6" />,
          href: "mailto:hello@amitroy.tech",
        }
      ]
    return (
        <div className="text-white/90 fixed bottom-8 right-8 z-20 mix-blend-difference">
        <div className="px-4 py-2 flex items-center space-x-2">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors duration-300">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    )
}