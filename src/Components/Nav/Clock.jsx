import { useState, useEffect } from 'react'
import { getMinutes } from '../../modules/functions.js'

const Clock = ({setDayTime}) => {
  const [date, setDate] = useState(new Date())

  const time = date.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'})

  console.log(time)

  const currentTime = getMinutes(time)

  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000)
    if ((currentTime > 420) && (currentTime < 1020)){
      setDayTime(true)
    } else {
      setDayTime(false)
    }
  },[setDayTime,currentTime])
  return (
    <p className="display-items">
      {time}
    </p>
  )
}

export default Clock