import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer " +
      "4d4921cdcd382bd0f124284de7ff0c530fd6424423d6e5f80225099879d0a5eb33500c218a581ac09b1cdbbf5e86dc5257f7bbd9f4a120c964f51657d6b4076e1d294c9b3cdeebf57f852bf0cd91131beb531dc21000802fca19ea605f4fc12f02369664a57fc57ef8547c2073dbf5aecb1a2afd368fe6b21b3169abdd20a734",
  },
});
