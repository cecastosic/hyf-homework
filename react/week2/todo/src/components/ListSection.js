import React from "react";
import List from "./List";

function ListSection(props) {
  return (
    <section className="List">
      <List items={props.items} />
    </section>
  );
}

export default ListSection;
