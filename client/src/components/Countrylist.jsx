import CountryList from "country-list-with-dial-code-and-flag";

function Countrylist() {
  const countries = CountryList.getAll();

  console.log(countries[0].data);

  return (
    <>
      <select className="w-40 py-2 rounded-lg ">
        <option>Select a Country</option>
        {countries.map((country) => (
          <>
            <option>{country.data.name}</option>
          </>
        ))}
      </select>
    </>
  );
}

export default Countrylist;
