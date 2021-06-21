import { useState } from "react"

const Form = () => {
  const [sampleRequest, setSampleRequest] = useState(false)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    // get the data
    // do sth with the data
    setSampleRequest(true)
  }
  return (
    <div>
      {!sampleRequest ? (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Your name</label>
          <input id="name" placeholder="Joe Doe" required />

          <label htmlFor="email">Your email</label>
          <input id="email" type="email" placeholder="joe@doe.com" required />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thank you! You will receive your sample soon!</p>
      )}
    </div>
  )
}

export default Form
