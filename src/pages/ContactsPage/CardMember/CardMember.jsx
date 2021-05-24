import React from 'react'
import style from './CardMember.module.scss'
const CardMember = ({ contactsTeam = [] }) => {

  const teamRender = contactsTeam.map(({ name, position, about, src },index) => 

  <li key={index}>
        <img src={src} alt={name} />
        <h3 className={style.name}>{name}</h3>
        <p className={style.position}>{position}</p>
        <p className={style.about}>{about}</p>
      </li>
    )
  
  return (
      <>
      {teamRender}
      </>
   );
}
 
export default CardMember;