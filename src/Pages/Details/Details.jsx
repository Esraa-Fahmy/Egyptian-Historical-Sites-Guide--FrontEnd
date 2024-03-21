//import React from 'react'
import ExistReview from "../../Components/ExistReview/ExistReview";
import PlaceDetail from "../../Components/PlaceDetails/PlaceDetail";
import { useParams } from "react-router-dom";
import Review from "../../Components/Review/Review";
export default function Details() {
  const { id } = useParams();
  return (
    <>
    <PlaceDetail id={id}/>
    <ExistReview id={id}/>
    <Review/>
    </>
  )
}
