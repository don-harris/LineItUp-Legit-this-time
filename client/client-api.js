import request from 'superagent'

export function getDeals () {
  return request.get('/api/v1/deals')
}
