const Feature = ({ icon, title, text }) => {
  return (
    <div>
      <img width="64px" src={icon} alt="" />
      <h2 as="h2">{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Feature
