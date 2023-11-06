import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your order has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>this weeks specail</h2>
        <button>order menu</button>
      </div>
      menu card
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.id)}
              >
                order now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
