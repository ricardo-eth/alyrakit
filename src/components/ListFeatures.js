import working from "../assets/working.svg"

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ]
  return (
    <div>
      <img
        src={working}
        alt="Illustration with a computer on the desk"
        width="400"
        height="295"
      />

      <h2>The most useful resource ever created for designers</h2>
      <ul>
        {list.map((el, index) => {
          return <li key={index}>{el}</li>
        })}
      </ul>
    </div>
  )
}

export default ListFeatures
