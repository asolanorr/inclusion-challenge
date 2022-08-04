import dayjs from 'dayjs'
import { useFetchData } from '../utils/use-fetch'

const StatusCard = ({ url }) => {
  const { data, loading, error } = useFetchData(`https://api.factoryfour.com/${url}/health/status`)

  if (loading) {
    return (
      <div className='card'>
        <p className='title'>Loading...</p>
        <p>Loading...</p>
        <p>Loading...</p>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    let date = dayjs(data.time).toString()

    return (
      <div className='card' key={data.time}>
        <p className='title'>An error has ocurred.</p>
        <p>Outage! <span className='unhealthy-dot'></span>:(</p>
        <p>{date}</p>
        <p>{data.version}</p>
      </div>
    )
  }

  if (data) {

    let date = dayjs(data.time).toString()

    return (
      <div className='card' key={data.time}>
        <p className='title'>{data.hostname}</p>
        {data.message ? data.message.includes('Healthy') ? <p>Healthy! <span className='healthy-dot'></span> :)</p> : <p>Outage! <span className='unhealthy-dot'></span>:(</p> : null}
        <p>{date}</p>
        <p>{data.version}</p>
      </div>
    )
  }
}

export default StatusCard
