import monitor from "../assets/monitor.svg"

const Header = () => {
  return (
    <header>
      <h1>
        Welcome to <span>AlyraKit.</span> Develop anything.
      </h1>
      <p>Build a beautiful, modern website with React and Chakra UI.</p>

      <a href="#buy-now">Buy it now</a>

      <img
        src={monitor}
        alt="Illustration with a computer on the desk"
        width="500"
        height="378"
      />
    </header>
  )
}

export default Header
