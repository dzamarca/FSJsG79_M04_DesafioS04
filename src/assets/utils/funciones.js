export function setearValor(valor){
    return valor.toLocaleString()
}

export const aumentaPizza = (cart, id) => {
    return cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
};

export const disminuyePizza = (cart, id) => {
    return cart
        .map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0);
};

export const calculaTotal = (cart) => {
    return cart.reduce((suma, pizza) => suma + pizza.price * pizza.count, 0);
};