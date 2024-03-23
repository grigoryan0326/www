const api =
  "https://raw.githubusercontent.com/jarosluv/russian_infrastructure/master/moscow/metro_stations.json";

const stations = [];
fetch(api)
  .then((res) => res.json())
  .then((data) =>
    data.forEach((line) => {
      stations.push(...line.stations);
    })
  );

function getOptions(word, station) {
  return station.filter((s) => {
    const regexp = new RegExp(word, "gi");
    return s.name.match(regexp);
  });
}

function displayOptions() {
  const options = getOptions(this.value, stations);
  const html = options
    .map((station) => {
      const regexp = new RegExp(this.value, "ig");
      const stationName = station.name.replace(
        regexp,
        `<span class="hl">${this.value}</span>`
      );
      return `<li>${stationName}</li>`;
    })
    .slice(0, 10)
    .join("");
  console.log(html);
  serarchOptions.innerHTML = this.value ? html : null;
}

const search = document.querySelector(".search");
const serarchOptions = document.querySelector(".options");

search.addEventListener("keyup", displayOptions);
