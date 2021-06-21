import docs from "../assets/docs.svg"
import coffee from "../assets/coffee.svg"
import screen from "../assets/screen.svg"
import Feature from "./Feature"

const Features = () => {
  const features = [
    {
      icon: coffee,
      title: "Built for developers",
      text: "AlyraKit is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
    },
    {
      icon: screen,
      title: "Designed to be modern",
      text: "Designed with the latest design trends in mind. AlyraKit feels modern, minimal, and beautiful.",
    },
    {
      icon: docs,
      title: "Documentation for everything",
      text: "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
    },
  ]
  return (
    <section>
      {features.map((el, index) => {
        return <Feature key={index} {...el}></Feature>
      })}
    </section>
  )
}

export default Features
