console.log("it is not wrking");
const BASEURL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

// async function getCountryCode(lat, lng) {
//   const res = await fetch(`${BASEURL}?latitude=${lat}&longitude=${lng}`);
//   const data = await res.json();
//   const countryCode = data.countryCode;

//   getRate(countryCode);
// }

// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     getCountryCode(lat, lng);
//   },
//   (error) => {
//     console.error("Error getting location:", error);
//   }
// );

// async function getRate(countryCode) {
//   const res = await fetch(
//     `https://api.frankfurter.app/latest?base=USD&symbols=ETB`
//   );
//   console.log(res);
//   // const data = await res.json();
//   // console.log(data);
// }

async function getRate() {
  const res = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await res.json();
  console.log(data.rates);
}

getRate();
