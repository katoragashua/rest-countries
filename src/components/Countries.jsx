import React from "react";
import CountryCard from "./CountryCard";

const Countries = (props) => {
  const { countries } = props;
  const allCountries = countries.map((country) => (
    <CountryCard key={country.name.common} {...country}/>
  ));
  return <div className="countries ">{allCountries}</div>;
};

export default Countries;
