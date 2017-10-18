import React from 'react'
import Woman from './Woman'

import testData from '../../../data.json'

const Womens = (props) => {
  return (
    <div className="section has-text-centered columns is-multiline">
      {testData.deals.filter(deal => deal.gender === 'female').map((deal) => {
        return (
          <Woman deal={deal} key={deal.id} />
        )
      }
      )}
    </div>
  )
}

export default Womens
