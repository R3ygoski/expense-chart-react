import { useState, useEffect } from "react"

let date = new Date()
let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
let dayName = days[date.getDay()]

export default function Bars({amount, day}){

    const [barsStyle, SetBarsStyles] = useState({
        height: `1%`,
    })

    useEffect(()=>{
        setTimeout(()=>{
            SetBarsStyles({
                height: `${amount + 3}%`,
            })
        }, 500)
    },[amount])

    return (
        <div className={day===dayName?'bars-today':'bars'} style={barsStyle}>
            <div className="bars__info">${amount}</div>
            <div className={day===dayName?'bars__day--bold':'bars__day'}>{day}</div>
        </div>
    )
}