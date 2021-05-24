import React from 'react'
import CardMember from '../CardMember/CardMember'
import style from './CardList.module.scss'
const CardList = ({contactsTeam}) => {
  return (
    <ul className={style.ul}>
      <CardMember contactsTeam={contactsTeam}/>
    </ul>
   );
}
 
export default CardList;