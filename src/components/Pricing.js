import { useState } from "react"
import PricingSwitch from "./PricingSwitch"

const Pricing = () => {
  const config = {
    yearly: 29,
    monthly: 49,
  }
  const list = [
    "Rich, responsive landing pages",
    "100+ styled components",
    "Flexible, simple license",
    "Speedy build tooling",
    "6 months free support included",
  ]
  const [price, setPrice] = useState(config.yearly)
  const handleSwitchChange = (e) => {
    if (e.target.checked) {
      setPrice(config.monthly)
    } else {
      setPrice(config.yearly)
    }
  }

  return (
    <section id="pricing">
      <h2>Fair, simple pricing for all</h2>

      <p>
        All types of businesses need access to development resources, so we give
        you the option to decide how much you need to use.
      </p>

      <PricingSwitch onChange={handleSwitchChange} />

      <div>
        <div>
          <span>Standard</span>
          <b>{price}</b> /mo
          <ul>
            {list.map((el, index) => {
              return <li key={index}>{el}</li>
            })}
          </ul>
          <button>Get it now</button>
        </div>
        <div>
          <span>Entreprise</span>
          <p>
            We offer variable pricing with discounts for larger organizations.
            Get in touch with us and we’ll figure out something that works for
            everyone.
          </p>
          <button>Contact us</button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
