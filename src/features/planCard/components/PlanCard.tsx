import React from 'react';
import { PrimaryButton } from '../../buttons';
import '../PlanCard.css'

type Props = {
  title:string,
  price:number,
}

const PlanCard:React.FC<Props> = ({title, price, children}) => {
  return (
    <div className='PlanCardContainer'>
      <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end", justifyContent:"space-between"}}>
        <h1 style={{fontSize:"2.5rem",marginBottom:4}}>{title}</h1>
        <h2 style={{fontSize:"1.5rem",marginBottom:4}}>{price} zł</h2>
      </div>
      <ul>
      {children}
      </ul>
      <PrimaryButton filled>Zamów</PrimaryButton>
    </div>
  )
}

export {PlanCard}