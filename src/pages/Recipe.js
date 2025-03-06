import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RecipeCard from "../components/RecipeCard";
import food1 from "../images/Foods/food9.jpg";
import food2 from "../images/Foods/food10.jpg";
import food3 from "../images/Foods/food2.jpg";
import food4 from "../images/Foods/food4.jpg";
import food5 from "../images/Foods/food5.jpg";
import food6 from "../images/Foods/food.jpg";
import chef1 from "../images/Chefs/chef1.jpeg";
import chef2 from "../images/Chefs/chef2.jpeg";
import chef3 from "../images/Chefs/chef3.jpg";
import chef4 from "../images/Chefs/chef4.jpeg";
import chef5 from "../images/Chefs/chef5.jpeg";
import chef6 from "../images/Chefs/chef6.jpeg";

const Recipe = () => {
  const searches = [
    "pizza",
    "burger",
    "cookies",
    "ice cream",
    "soup",
    "biryani",
    "mutton",
    "juice",
    "burger",
    "virginito",
    "coke",
    "sausage",
    "meatballs",
    "chowmein",
    "chicken wings",
  ];
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: food1,
      authorImg: chef1,
      description:
        "A chicken pan pizza is a pizza cooked in a pan, resulting in a thick, crispy crust, topped with cooked chicken as the primary ingredients. ",
    },
    {
      title: "Spaghetti and MeatBalls",
      image: food2,
      authorImg: chef2,
      description:
        "Spaghetti and meatballs is an Italian-American pasta dish consisting of spaghetti, tomato sauce, and meatballs.",
    },
    {
      title: "American Cheese Burger",
      image: food3,
      authorImg: chef3,
      description:
        "An American cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time.",
    },
    {
      title: "Mutton Biryani",
      image: food4,
      authorImg: chef4,
      description:
        "Mutton biryani is a flavorful dish of marinated mutton and spiced rice. It's made by layering marinated mutton with spiced rice in a pot and cooking. ",
    },
    {
      title: "Italian Pasta",
      image: food5,
      authorImg: chef5,
      description:
        "Italian pasta is a starchy food made from flour and water, and shaped into ribbons, tubes, and other forms.",
    },
    {
      title: "Thakali Khana Set",
      image: food6,
      authorImg: chef6,
      description:
        "Thakali meal consists of locally grown buckwheat, barley, millet, rice, maize and dal. A kind of dal is also made from the dried, ground buckwheat leaves.",
    },
  ].sort(() => Math.random() - 0.5);
  return (
    <div>
      <div className="previous-searches section">
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {searches.map((search, index) => (
            <div
              className="search-item"
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
            >
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
