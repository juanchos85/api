import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_Diets, get_recipe } from "../../Reduxx/Actions/actions";
import { useRef } from "react";
import Style from "./Search.module.css";
import { useEffect } from "react";

export default function SearchBar() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.get_recipe);
  const lele = useRef(null);

  function handleChanges(e) {
    e.preventDefault();
  }
  function handleSubmit(e) {
    e.preventDefault();

    const pepe = lele.current.value;
    dispatch(get_recipe(pepe));
  }
  useEffect(() => {
    dispatch(get_recipe(" "));
    dispatch(get_Diets());
  }, [recipes]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          // id="id"
          ref={lele}
          type="text"
          placeholder="busqueda de producto..."
          onChange={(e) => handleChanges(e)}
        />
        <input className={Style.button} type="submit" value="Agregar" />
      </form>
    </div>
  );
}
