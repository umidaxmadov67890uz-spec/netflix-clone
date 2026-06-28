import FilterItem from "./FilterItem"

function Filter(props) {
  const { genres, year, country, setGenres, setYear, setCountry, genresData, yearData, countryData, type} = props
   
  return (
    <div className="flex items-center">
      <FilterItem data={genresData} active={genres} setFunction={setGenres} type={type} />
      <FilterItem data={yearData} active={year} setFunction={setYear} type={type} />
      <FilterItem data={countryData} active={country} setFunction={setCountry} type={type} />
    </div>
  )
}

export default Filter
