import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../helpers/selection-filter"
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  const { series } = useContent("series")
  const { films } = useContent("films")
  const slides = {
    series: selectionFilter(series),
    films: selectionFilter(films)
  }

  return <BrowseContainer slides={slides}>Browse page</BrowseContainer>;
}
