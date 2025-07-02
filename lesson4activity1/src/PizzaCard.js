function PizzaCard(props){
    return(
        <div>
            <h2>Pizza for {props.name}</h2>
            <p>Size: {props.pizzaSize}</p>
            <p>Topping: {props.pizzaToppings}</p>
        </div>
    );
}

export default PizzaCard;