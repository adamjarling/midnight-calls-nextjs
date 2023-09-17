import Container from "../Container";
import React from "react";
import { Show } from "@/data/shows";
import ShowListItem from "./ListItem";

const ShowListBig = ({ shows }: { shows: Show[] }) => {
  return (
    <Container className="max-w-3xl">
      <ul>
        {shows.map((show) => {
          return (
            <li key={show.datetime}>
              <ShowListItem show={show} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ShowListBig;
