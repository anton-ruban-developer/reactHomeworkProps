import React from "react";

const MyPet = (props) => {
  const { img, name, breed, description, origin, color, height, weight } =
    props.my_pet;
  return (
    <div>
      <h1 style={{color: props.thema ? "#282929" : "white"}}>{name}</h1>
      <div style={{ display: "flex" }}>
        <img style={{ paddingLeft: "20px", height: "500px" }} src={img} alt="" />
        <div>
          <p style={{ textAlign: "left", margin: "0", paddingLeft: "20px",color: props.thema ? "#282929" : "white" }}>
            {description}
          </p>
          <table style={{ margin: "40px 50px", textAlign: "left",color: props.thema ? "#282929" : "white" }}>
            <tr>
              <th style={{ paddingRight: "130px" }}>Порода:</th>
              <td>{breed}</td>
            </tr>
            <tr>
              <th>Происхождение:</th>
              <td>{origin}</td>
            </tr>
            <tr>
              <th>Цвет:</th>
              <td>{color}</td>
            </tr>
            <tr>
              <th>Рост:</th>
              <td>{height}</td>
            </tr>
            <tr>
              <th>Вес:</th>
              <td>{weight}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPet;
