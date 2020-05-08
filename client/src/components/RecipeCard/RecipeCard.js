import React from "react";
import DeleteBtn from "../DeleteBtn";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

const RecipeCard = (props) => (
  <div className="card recipe-card">
    <img src={props.thumbnail} alt="favorite-recipe" className="recipe-image" />
    <div className="card-body recipe-card-body">
      <h5>{props.title}</h5>
      <p className="card-text">{props.ingredients}</p>
      <a rel="noreferrer noopener" target="_blank" href={props.href}>
        Go to recipe!
      </a>
      <Link to="#">
        <DeleteBtn
          onClick={() => {
            props.deleteFave(props.id);
          }}
        />
      </Link>
    </div>
  </div>
);

export default RecipeCard;
