import React, { Children } from 'react'
import "../PlanCard.css"

type Props = {
    enabled?:boolean
}

const PlanPoint:React.FC<Props> = ({children,enabled}) => {
  return (
    <li className={`PlanPoint ${!enabled?"PlanPointDisabled":''}`}>{children}</li>
  )
}

export {PlanPoint}