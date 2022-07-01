import React, { useState } from "react";
import Photo from "./Photo";
const PhotoChange = (props: any) => {
  const [car, changeCar] = useState({
    color: "1",
    bodykit: false,
  });

  const changeMpak = (e: any) => {
    var mpak = car.bodykit;
    if (e.target.id === "mpak") {
      mpak = !mpak;

      changeCar((prev) => ({
        ...prev,
        bodykit: mpak,
      }));
    }
  };
  const changeCarId = (e: any) => {
    changeCar((prev) => ({
      ...prev,
      color: e.target.id,
    }));
  };

  return (
    <>
      <div
        className="color cFirst"
        id="1"
        data-value="Blue"
        onClick={changeCarId}
      />
      <div
        className="color cSecond"
        id="2"
        data-value="White"
        onClick={changeCarId}
      />
      <input type="checkbox" id="mpak" value="mpak" onClick={changeMpak} />

      <Photo car={car} />
    </>
  );

  /*const [newid, changeNewId] = useState("1");
  const [newmpak, addPakiet] = useState("0");
  const handleIdChange = (e: any) => {
    if (e.target.name == "check") {
      if (e.target.checked) {
        addPakiet("1");
      }
      if (!e.target.checked) {
        addPakiet("0");
      }
    } else {
      changeNewId(e.target.id);
    }
  };

  return (
    <>
      <input type="button" id="1" value="Niebieski" onClick={handleIdChange} />
      <input type="button" id="2" value="Biały" onClick={handleIdChange} />
      <input type="checkbox" name="check" onClick={handleIdChange} />

      <Photo id={newid} m={newmpak} />
    </>
  );
  */
};
export default PhotoChange;
