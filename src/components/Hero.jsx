import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24  ">
      <div className=" align-element  grid  md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Umar</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/omarologyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/umar-sulaiman-a91a43175?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block ">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  )
}
export default Hero
