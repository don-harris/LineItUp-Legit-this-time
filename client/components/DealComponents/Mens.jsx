import React from 'react'
import Men from './Men'

import testData from '../../../data.json'

const Mens = (props) => {
  return (
    <div className="section has-text-centered columns is-multiline">
      {testData.deals.filter(deal => deal.gender === 'male').map((deal) => {
        return (
          <Men deal={deal} key={deal.id} />
        )
      }
      )}
    </div>
  )
}

export default Mens
