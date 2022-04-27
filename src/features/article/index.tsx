import React from 'react'

type Props = {
  title:string,
  style?:React.HTMLAttributes<HTMLDivElement>['style'],
  id?:string,
}

const Article:React.FC<Props> = ({title, children, style, id}) => {
  return (
    <article style={{width:"25vw",...style}} id={id}>
      <h1 style={{fontSize:"2.5rem",marginBottom:4,color:'white'}}>{title}</h1>
      <p style={{fontSize:"1.25rem",margin:0, color:'white'}}>{children}</p>
    </article>
  )
}

export default Article