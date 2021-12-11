import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../helpers/selection-filter"
import { BrowserContainer } from "../containers/browse";

export default function Browse() {
  const { series } = useContent("series")
  const { films } = useContent("films")
  const slide = {
    series: selectionFilter(series),
    films: selectionFilter(films)
  }
  console.log(slide)

  return <BrowserContainer>Browse page</BrowserContainer>;
}
