import React from 'react'
import Company from './Company'

import testData from '../../data.json'

const Container = (props) => {
  return (
    <div className="section has-text-centered columns is-multiline">
      {testData.deals.map((deal) => {
        return (
          <Company deal={deal} key={deal.id} />
        )
      }
      )}
    </div>
  )
}

export default Container
