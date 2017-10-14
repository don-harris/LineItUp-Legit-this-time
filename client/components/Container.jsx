import React from 'react'
import Company from './Company'

import testData from '../../data.json'

const Container = (props) => {
  return (
    <div className="section has-text-centered columns is-multiline">
      {testData.deals.map((data) => {
        return (
          <Company company={data.company} key={data.id} image={data.image} deal={data.deal} />
        )
      }
      )}
    </div>
  )
}

export default Container
