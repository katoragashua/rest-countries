import React from "react";
import { Link, useOutletContext, useLoaderData, Navigate, redirect } from "react-router-dom";
import { getCountries, getCountry } from "../api";

export const loader = async ({ req, params }) => {
  const countries = await getCountries();
  const country = await countries.find(
    (country) => country.name.common === params.country
  );
  return { countries, country };
};

const CountryDetail = () => {
  const { countries, country } = useLoaderData();
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,
    borders,
  } = country;
  // console.log(country);

  const { theme } = useOutletContext();

  //Get Native name
  const nativeKeys = Object.keys(name.nativeName);
  // const nativeNames = nativeKeys.map(key => (name.nativeName[key].common)).join(", ")
  const nativeName =
    name.nativeName[nativeKeys[nativeKeys.length - 1]]["common"];

  //Get currencies
  const currencyName = Object.keys(currencies)[0]; //This gets the first item in the currencies object
  const usedCurrencies = currencies[currencyName]; //This gets the object that has the currency name

  //Get languages
  const spokenLanguages = Object.values(languages)
    .map((language) => language)
    .join(", "); //This gets the languages

  return (
    <div className="container grid gap-12 py-12 items-start ">
      <Link to={"/"} className="text-black font-light w-max">
        <button
          className={`px-4 py-2  bg-white rounded-sm shadow-lg  ${
            theme === "dark" && "dark-component"
          }`}
        >
          ← Back
        </button>
      </Link>
      <div
        className="grid xl:grid-cols-2 gap-20
      "
      >
        <div className="w-full max-w-full"><img src={flags?.svg} alt={flags.alt}  className="max-w-full"/></div>
        <div className="grid gap-8">
          <h3 className="font-semibold">{name.common}</h3>
          <div className="flex flex-col items-start md:flex-row  gap-20 ">
            <div className="">
              <div className="grid gap-2">
                <div className="flex gap-2 items-center">
                  <h6>Native Name:</h6>
                  <span>{nativeName}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <h6>Population:</h6>
                  <span>{population.toLocaleString()}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <h6>Region:</h6>
                  <span>{region}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <h6>Sub Region:</h6>
                  <span>{subregion}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <h6>Capital:</h6>
                  <span>{capital[0]}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex gap-2 items-center">
                <h6>Top Level Domain:</h6>
                <span>{tld[0]}</span>
              </div>
              <div className="flex gap-2 items-center">
                <h6>Currencies:</h6>
                <span>
                  {usedCurrencies.name} (
                  {usedCurrencies.symbol && usedCurrencies.symbol}){" "}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <h6>Languages:</h6>
                <span>{spokenLanguages}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <h6>Border Countries:</h6>
            <div className={`flex gap-2 flex-wrap items-start`}>
              {borders?.map((border, index) => (
                <Link
                  key={index}
                  to={`/${countries.find(country => (country.cca3 === border)).name["common"]}`}
                  className="text-black"
                >
                  <span
                    className={`py-1 px-2 shadow-lg  bg-white rounded-sm ${
                      theme === "dark" && "dark-component"
                    }`}
                  >
                    {border}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
