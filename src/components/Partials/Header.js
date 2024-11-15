import React from "react";
import { Helmet } from "react-helmet";
import v1 from '../../assets/images/v1.png';
const Header = () => {
  return (
    <Helmet>
      {/* Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Tab Icon */}
      <link rel="icon" href={v1} />

      {/* FontAwesome */}
      <link rel="stylesheet" href="../assets/fontawesome/css/fontawesome.css" />
      <link rel="stylesheet" href="../assets/fontawesome/css/brands.css" />
      <link rel="stylesheet" href="../assets/fontawesome/css/solid.css" />

      {/* Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
        defer
      ></script>

      {/* Swiper Library */}
      <link rel="stylesheet" href="https://unpkg.com/swiper@6.7.0/swiper-bundle.min.css" />

      {/* jQuery */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js" defer></script>

      {/* Site Title */}
      <title>Restaurants, Eateries & Foodie Heaven - KELP</title>
    </Helmet>
  );
};

export default Header;
