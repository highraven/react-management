import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "장선호",
    birthday: "920531",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "나동빈",
    birthday: "930531",
    gender: "남자",
    job: "선생님",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "홍길동",
    birthday: "940531",
    gender: "남자",
    job: "백수",
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gander={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
