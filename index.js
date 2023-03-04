fetch("data.json")
  .then((Response) => Response.json())
  .then((Response) => {
    document.getElementById(
      "first"
    ).innerHTML += `<img src="${Response[0].icon}" alt="image" /><h4>${Response[0].category} <span>${Response[0].score} / 100</span> </h4>
      `;
    document.getElementById(
      "second"
    ).innerHTML += `<img src="${Response[1].icon}" alt="image" /><h4>${Response[1].category} <span>${Response[1].score} / 100</span> </h4>
      `;
    document.getElementById(
      "third"
    ).innerHTML += `<img src="${Response[2].icon}" alt="image" /><h4>${Response[2].category} <span>${Response[2].score} / 100</span> </h4>
      `;
    document.getElementById(
      "forth"
    ).innerHTML += `<img src="${Response[3].icon}" alt="image" /><h4>${Response[3].category} <span>${Response[3].score} / 100</span> </h4>
      `;

    const Average = () => {
      const total = Response.map((Response) => Response.score).reduce(
        (a, b) => a + b
      );
      return Math.round(total / Response.length);
    };
    console.log(Average());
    document.getElementById("Average").innerHTML += `${Average()}`;
  });