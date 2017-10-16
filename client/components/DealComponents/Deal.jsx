import React from 'react'
import testData from '../../../data.json'

const Deal = (props) => {
  const id = Number(props.match.params.id)
  const deal = testData.deals.find((deal) => deal.id === id)
  return (
    <div>
      <h2>{deal.Deal}</h2>
    </div>
  )
}

export default Deal
