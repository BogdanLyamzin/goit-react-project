import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import  fetchAwards  from '../../redux/awards/awards-operations';
import AwardsCard from '../../client/awards/components/AwardsCard';

export default function AwardsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAwards());
    
  }, [dispatch])

  return (
    <div>
    <AwardsCard/>
    </div>
  )
}

