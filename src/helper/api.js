import axios from "axios";
import Constants from "expo-constants";

// Bible API
// https://scripture.api.bible/livedocs
var HTMLParser = require("fast-html-parser");

const BIBLE_API_KEY = Constants.expoConfig.extra.bible_api_key;

const bibleAPI = axios.create({
  baseURL: `https://api.scripture.api.bible/v1/bibles/179568874c45066f-01`,
  headers: { "api-key": BIBLE_API_KEY },
});

// response interceptor
bibleAPI.interceptors.response.use(
  function (response) {
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

// Mass Readings RSS
// https://universalis.com/canada/n-link.htm
const dailyMass = axios.create({
  baseURL: `https://universalis.com/northamerica.Canada`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    responseType: "application/json",
  },
});

// response interceptor
dailyMass.interceptors.response.use(
  function (response) {
    const dataHTML = response.data.substring(
      "universalisCallback(".length,
      response.data.length - 3
    );

    const dataJSON = JSON.parse(dataHTML);

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
