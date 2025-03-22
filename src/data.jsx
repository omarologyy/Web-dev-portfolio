import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiTypescript, SiChakraui, SiTailwindcss } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import pedmonie from '../src/assets/pedmonie.jpg'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Typescript',
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: 'Implementing TypeScript ensures code robustness and maintainability, providing static typing for enhanced error detection and a smoother development workflow. This results in a cleaner, more reliable portfolio codebase.',
  },
  {
    id: nanoid(),
    title: 'NextJs',
    icon: <RiNextjsFill className="h-16 w-16 text-emerald-500" />,
    text: "Utilizing Next.js for server-side rendering and static site generation, I optimize portfolio performance and SEO, delivering fast and efficient user experiences. Next.js's routing and API capabilities streamline development and deployment.",
  },
  {
    id: nanoid(),
    title: 'ChakraUI',
    icon: <SiChakraui className="h-16 w-16 text-emerald-500" />,
    text: 'Chakra UI for rapid, accessible UI development, creating visually appealing interfaces.',
  },
  {
    id: nanoid(),
    title: 'TailwindCSS',
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: 'Tailwind CSS for streamlined, customizable styling, achieving responsive designs efficiently',
  },
]

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://e-commerce-opal-mu-92.vercel.app/',
    github: 'https://github.com/omarologyy/E-commerce',
    title: 'first project',
    text: 'E-commerce website.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://cart-project-kappa.vercel.app/',
    github: 'https://github.com/omarologyy/Cart-Project',
    title: 'second project',
    text: 'Mini cart project.',
  },
  {
    id: nanoid(),
    img: pedmonie,
    url: 'https://www.pedmonie.com.ng/',
    github: 'https://github.com/omarologyy/pedmonie-frontend',
    title: 'third project',
    text: 'Fintech web app',
  },
]
