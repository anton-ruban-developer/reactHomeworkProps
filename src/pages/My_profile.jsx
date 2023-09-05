import React from "react";

const MyProfile = (props) => {
  console.log(props);
  const {
    img,
    name,
    description,
    dateOfBirth,
    citizenship,
    ocupation,
    workExperience,
    contactPhone,
  } = props.my_profile;
  return (
    <div>
      <h1 style={{color: props.thema ? "#282929" : "white",}}>{name}</h1>
      <div style={{ display: "flex" }}>
        <img style={{ paddingLeft: "20px" }} src={img} alt="" />
        <div>
          <p style={{ textAlign: "left", margin: "0", paddingLeft: "20px",color: props.thema ? "#282929" : "white", }}>
            {description}
          </p>
          <table style={{ margin: "40px 50px", textAlign: "left", color: props.thema ? "#282929" : "white", }}>
            <tr>
              <th style={{ paddingRight: "20px" }}>Год рождения:</th>
              <td>{dateOfBirth}</td>
            </tr>
            <tr>
              <th>Гражданство:</th>
              <td>{citizenship}</td>
            </tr>
            <tr>
              <th>Профессия:</th>
              <td>{ocupation}</td>
            </tr>
            <tr>
              <th>Карьера:</th>
              <td>{workExperience}</td>
            </tr>
            <tr>
              <th>Контакты:</th>
              <td>{contactPhone}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
