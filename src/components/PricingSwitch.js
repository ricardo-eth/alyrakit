const PricingSwitch = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="monthly" mb="0">
        Enable <span>monthly</span> pricing
      </label>
      <input type="checkbox" onChange={onChange} />
    </div>
  )
}

export default PricingSwitch
