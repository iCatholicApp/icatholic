// https://scripture.api.bible/livedocs
import axios from "axios";
import Constants from "expo-constants";
var HTMLParser = require("fast-html-parser");

const BIBLE_API_KEY = Constants.expoConfig.extra.bible_api_key;

const bibleAPI = axios.create({
  baseURL: `https://api.scripture.api.bible/v1/bibles/06125adad2d5898a-01`,
  headers: { "api-key": BIBLE_API_KEY },
});

// response interceptor
bibleAPI.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  }
);

const dailyMass = axios.create({
  baseURL: `https://universalis.com/northamerica.Canada/%7B%7D/jsonpmass.js`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    responseType: "application/json",
  },
});

// response interceptor
dailyMass.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger

    const dataHTML = response.data.substring(
      "universalisCallback(".length,
      response.data.length - 3
    );
    const dataJSON = JSON.parse(dataHTML);
    const dataParsed = HTMLParser.parse(dataJSON);
    const data = dataParsed.childNodes;

    const massReadings = {
      number: dataJSON.number,
      date: dataJSON.date,
      day: HTMLParser.parse(dataJSON.day).childNodes[0].childNodes[0]
        .childNodes[0].rawText,
      r1: {
        heading: dataJSON.Mass_R1.heading,
        source: dataJSON.Mass_R1.source,
        text: dataJSON.Mass_R1.text,
      },
      ps: {
        source: dataJSON.Mass_Ps.source,
        text: dataJSON.Mass_Ps.text,
      },
      r2: {
        heading: dataJSON?.Mass_R2?.heading,
        source: dataJSON?.Mass_R2?.source,
        text: dataJSON?.Mass_R2?.text,
      },
      ga: {
        source: dataJSON.Mass_GA.source,
        text: dataJSON.Mass_GA.text,
      },
      g: {
        heading: dataJSON.Mass_G.heading,
        source: dataJSON.Mass_G.source,
        text: dataJSON.Mass_G.text,
      },
    };

    // console.log("DATA\n", JSON.stringify(data, null, 2));
    // console.log("data", dataJSON.Mass_R1.text);
    // console.log(
    //   "dataParsed",
    //   JSON.stringify(HTMLParser.parse(dataJSON.Mass_R1.text), null, 2)
    // );
    // console.log("massReadings", JSON.stringify(massReadings, null, 2));

    return massReadings;
  },
  function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  }
);

export { bibleAPI, dailyMass };
