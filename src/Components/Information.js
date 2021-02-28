import React from "react"; 
import "../assets/css/information.css"

export default function Information() {
  return (
    <span>
      <i className="fa fa-info-circle" aria-hidden="true"
        data-tooltip="Search by city, state or country. If the city has the same name as another, add the ISO 3166 2 letter country code after the city name and a comma "></i>
    </span>
  )
}