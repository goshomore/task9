import React from "react";

interface Task9Props {
  firstname: string;
  lastname: string;
  title: string;
}

function Task9(props: Task9Props) {
  return (
    <header id="user">
      <h2>
        {props.firstname} {props.lastname}
      </h2>
      <p>{props.title}</p>
    </header>
  );
}

export default Task9;
