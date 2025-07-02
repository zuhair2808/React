import Pizza from "./PizzaCard";
function App() {
  const name = "Alice";
  const pizzaSize = "Medium";
  const pizzaToppings = "Cheese,Mushroom";
  
  
  const another = {
    name: "Bob",
    pizzaSize: "Large",
    pizzaToppings:"Olive, Cheese"
  };    
    return (
    <div>
      <h1>Pizza Orders</h1>
      <Pizza name={name} pizzaSize={pizzaSize} pizzaToppings={pizzaToppings} />
            <Pizza name={another.name} pizzaSize={another.pizzaSize} pizzaToppings={another.pizzaToppings} />
    </div>
  );
}

export default App;
