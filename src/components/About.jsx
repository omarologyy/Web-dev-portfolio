import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section class="bg-white py-20" id="about">
      <div class="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            I'm a Frontend Developer with a strong passion for crafting modern,
            responsive, and user-centric web applications. Proficient in React,
            Typescript, and TailwindCSS, I focus on building intuitive
            interfaces that enhance user experience. Let’s collaborate and
            create something impactful! 🚀
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
