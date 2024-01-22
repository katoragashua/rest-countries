import React from "react";
import SearchAndFilter from "../components/SearchAndFilter";
import { getCountries } from "../api";
import { useLoaderData } from "react-router-dom";
import Countries from "../components/Countries";

export async function loader() {
  return await getCountries();
}

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  const [query, setQuery] = React.useState(() => ({ search: "", filter: "" }));

  const [countries, setCountries] = React.useState(() => [...data]);
 
  const handleQuery = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setQuery({ ...query, [name]: value });

    if (name === "search") {
      setCountries((prev) => {
        return data.filter((country) =>
          country.name.common.toLowerCase().includes(value.trim().toLowerCase())
        );
      });
    }
    if (name === "filter") {
      setCountries(
        data.filter(
          (country) => country.region.toLowerCase() === value.toLowerCase()
        )
      );
    }
  };

  console.log(query);
  return (
    <main className="home xl:pt-16">
      <div className="container grid xl:gap-16">
        <SearchAndFilter handleQuery={handleQuery} />
        <Countries countries={countries} />
      </div>
    </main>
  );
};

export default Home;
