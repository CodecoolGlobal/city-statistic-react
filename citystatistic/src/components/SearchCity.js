import React from "react";
import styled from "styled-components";

export default function SearchCity() {
  return (
    <SearchContainer>
      <Input
        autoComplete="off"
        id="search-input"
        type="text"
        onChange={givePossibleSearch}
      />
      <Button id="search-button" type="submit" onClick={search} value="search">
        search
      </Button>
      <div className="autocomplete-items" id="search-result"></div>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  float: right;
  margin-top: 0.7%;
`;

const Input = styled.input`
  width: 74%;
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  border: 2px solid black;
  border-radius: 4px;
`;

const Button = styled.button`
  float: right;
  background-color: #b1b493;
  padding: 8px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
`;

let cityNameList = [
  "aarhus",
  "adelaide",
  "albuquerque",
  "almaty",
  "amsterdam",
  "anchorage",
  "andorra",
  "ankara",
  "asheville",
  "asuncion",
  "athens",
  "atlanta",
  "auckland",
  "austin",
  "baku",
  "bali",
  "baltimore",
  "bangkok",
  "barcelona",
  "beijing",
  "beirut",
  "belfast",
  "belgrade",
  "belize-city",
  "bengaluru",
  "bergen",
  "berlin",
  "bern",
  "bilbao",
  "birmingham",
  "birmingham-al",
  "bogota",
  "boise",
  "bologna",
  "bordeaux",
  "boston",
  "boulder",
  "bozeman",
  "bratislava",
  "brighton",
  "brisbane",
  "bristol",
  "brno",
  "brussels",
  "bucharest",
  "budapest",
  "buenos-aires",
  "buffalo",
  "cairo",
  "calgary",
  "cambridge",
  "cape-town",
  "caracas",
  "cardiff",
  "casablanca",
  "charleston",
  "charlotte",
  "chattanooga",
  "chennai",
  "chiang-mai",
  "chicago",
  "chisinau",
  "christchurch",
  "cincinnati",
  "cleveland",
  "cluj-napoca",
  "cologne",
  "colorado-springs",
  "columbus",
  "copenhagen",
  "cork",
  "curitiba",
  "dallas",
  "dar-es-salaam",
  "delhi",
  "denver",
  "des-moines",
  "detroit",
  "doha",
  "dresden",
  "dubai",
  "dublin",
  "dusseldorf",
  "edinburgh",
  "edmonton",
  "eindhoven",
  "eugene",
  "florence",
  "florianopolis",
  "fort-collins",
  "frankfurt",
  "fukuoka",
  "gaillimh",
  "gdansk",
  "geneva",
  "gibraltar",
  "glasgow",
  "gothenburg",
  "grenoble",
  "guadalajara",
  "guatemala-city",
  "halifax",
  "hamburg",
  "hannover",
  "havana",
  "helsinki",
  "ho-chi-minh-city",
  "hong-kong",
  "honolulu",
  "houston",
  "hyderabad",
  "indianapolis",
  "innsbruck",
  "istanbul",
  "jacksonville",
  "jakarta",
  "johannesburg",
  "kansas-city",
  "karlsruhe",
  "kathmandu",
  "kiev",
  "kingston",
  "knoxville",
  "krakow",
  "kuala-lumpur",
  "kyoto",
  "lagos",
  "la-paz",
  "las-palmas-de-gran-canaria",
  "las-vegas",
  "lausanne",
  "leeds",
  "leipzig",
  "lille",
  "lima",
  "lisbon",
  "liverpool",
  "ljubljana",
  "london",
  "los-angeles",
  "louisville",
  "luxembourg",
  "lviv",
  "lyon",
  "madison",
  "madrid",
  "malaga",
  "malmo",
  "managua",
  "manchester",
  "manila",
  "marseille",
  "medellin",
  "melbourne",
  "memphis",
  "mexico-city",
  "miami",
  "milan",
  "milwaukee",
  "minneapolis-saint-paul",
  "minsk",
  "montevideo",
  "montreal",
  "moscow",
  "mumbai",
  "munich",
  "nairobi",
  "nantes",
  "naples",
  "nashville",
  "new-orleans",
  "new-york",
  "nice",
  "nicosia",
  "oklahoma-city",
  "omaha",
  "orlando",
  "osaka",
  "oslo",
  "ottawa",
  "oulu",
  "oxford",
  "palo-alto",
  "panama",
  "paris",
  "perth",
  "philadelphia",
  "phnom-penh",
  "phoenix",
  "phuket",
  "pittsburgh",
  "portland-me",
  "portland-or",
  "porto",
  "porto-alegre",
  "prague",
  "providence",
  "quebec",
  "quito",
  "raleigh",
  "reykjavik",
  "richmond",
  "riga",
  "rio-de-janeiro",
  "riyadh",
  "rochester",
  "rome",
  "rotterdam",
  "saint-petersburg",
  "salt-lake-city",
  "san-antonio",
  "san-diego",
  "san-francisco-bay-area",
  "san-jose",
  "san-juan",
  "san-luis-obispo",
  "san-salvador",
  "santiago",
  "santo-domingo",
  "sao-paulo",
  "sarajevo",
  "saskatoon",
  "seattle",
  "seoul",
  "seville",
  "shanghai",
  "singapore",
  "skopje",
  "sofia",
  "st-louis",
  "stockholm",
  "stuttgart",
  "sydney",
  "taipei",
  "tallinn",
  "tampa-bay-area",
  "tampere",
  "tartu",
  "tashkent",
  "tbilisi",
  "tehran",
  "tel-aviv",
  "the-hague",
  "thessaloniki",
  "tokyo",
  "toronto",
  "toulouse",
  "tunis",
  "turin",
  "turku",
  "uppsala",
  "utrecht",
  "valencia",
  "valletta",
  "vancouver",
  "victoria",
  "vienna",
  "vilnius",
  "warsaw",
  "washington-dc",
  "wellington",
  "winnipeg",
  "wroclaw",
  "yerevan",
  "zagreb",
  "zurich",
];
function givePossibleSearch(e) {
  let value = e.target.value;

  let containsDIV = document.querySelector("#search-result");
  containsDIV.innerHTML = "";
  for (const city of cityNameList) {
    if (value === "") {
      containsDIV.innerHTML = "";
    } else if (city.toLowerCase().indexOf(value.toLowerCase()) > -1) {
      let start = city.toLowerCase().indexOf(value.toLowerCase());
      let length = value.length;
      let subCity = city.substr(start, length);
      let resultCity = city.replace(subCity, "<b>" + subCity + "</b>");
      containsDIV.innerHTML += `<div class="city-contained">${resultCity.toUpperCase()}</div>`;
    }
    const inputField = document.querySelector("#search-input");
    const containedCities = document.querySelectorAll(".city-contained");
    for (const city of containedCities) {
      city.addEventListener("click", function () {
        inputField.value = city.innerHTML
          .replace("<b>", "")
          .replace("</b>", "");
        containsDIV.innerHTML = "";
      });
    }
  }
}
function search(e) {
  const inputField = document.querySelector("#search-input");
  e.preventDefault();
  if (cityNameList.includes(inputField.value.toLowerCase())) {
    window.location.href = `/city?slug=${inputField.value.toLowerCase()}`;
  }
}
