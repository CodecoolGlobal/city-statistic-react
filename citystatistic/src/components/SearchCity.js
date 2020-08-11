import React, { useContext } from "react";
import styled from "styled-components";
import { AllCitySlugContext } from "../context/AllCitySlugContext";

export default function SearchCity() {
  const [citySlugs] = useContext(AllCitySlugContext);
  function givePossibleSearch(e) {
    let value = e.target.value;

    let containsDIV = document.querySelector("#search-result");
    containsDIV.innerHTML = "";
    for (const city of citySlugs) {
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
    if (citySlugs.includes(inputField.value.toLowerCase())) {
      window.location.href = `/city/${inputField.value.toLowerCase()}`;
    }
  }
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
