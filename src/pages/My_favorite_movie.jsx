import React from "react";

const MyFavoriteMovie = (props) => {
  const { img, name, producer, description, country, type, year, budget } =
    props.my_favorite_movie;
  return (
    <div>
      <h1 style={{ color: props.thema ? "#282929" : "white" }}>{name}</h1>
      <div style={{ display: "flex" }}>
        <img
          style={{ paddingLeft: "20px", height: "500px" }}
          src={img}
          alt=""
        />
        <div>
          <p
            style={{
              textAlign: "left",
              margin: "0",
              paddingLeft: "20px",
              color: props.thema ? "#282929" : "white",
            }}
          >
            {description}
          </p>
          <table
            style={{
              margin: "40px 50px",
              textAlign: "left",
              color: props.thema ? "#282929" : "white",
            }}
          >
            <tr>
              <th style={{ paddingRight: "130px" }}>Продюсер:</th>
              <td>{producer}</td>
            </tr>
            <tr>
              <th>Страна:</th>
              <td>{country}</td>
            </tr>
            <tr>
              <th>Жанр:</th>
              <td>{type}</td>
            </tr>
            <tr>
              <th>Год выпуска:</th>
              <td>{year}</td>
            </tr>
            <tr>
              <th>Бюджет:</th>
              <td>{budget}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFavoriteMovie;
