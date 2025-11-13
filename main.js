/*
TAREA:

La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los ingredientes para cada tipo de pizza aparecen a continuación.

Ingredientes vegetarianos: Pimiento y tofu.

Ingredientes no vegetarianos: Peperoni, Jamón y Salmón.

Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en función de su respuesta le muestre un menú con los ingredientes disponibles para que elija. Solo se puede eligir un ingrediente además de la mozzarella y el tomate que están en todas la pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana o no y todos los ingredientes que lleva.
*/

// TAREA 4: Pedido de Pizza Bella Napoli
// Recibe el tipo ('vegetariana'/'no vegetariana') y el ingrediente elegido.
//el resultado debe ser asi: "La pizza elegida es vegetariana y lleva Mozzarella, Tomate y Pimiento."
//En caso de que el tipo de pizza y el ingrediente no coincida, o que no sea un ingrediente válido, debe retornar: "Error"
export const hacer_pedido_pizza = (tipo_pizza, ingrediente_extra) => {
    let resumen = ''

    console.log("Bienvenido a la pizzería Bella Napoli")
    console.log("Qué tipo de pizza desea: 'vegetariana' o 'no vegetariana'")

    if (tipo_pizza == "vegetariana"){ 
        console.log("Qué ingrediente desea: Pimiento o Tofu")
        if (ingrediente_extra == "Pimiento"){
            resumen = "La pizza elegida es vegetariana y lleva Mozzarella, Tomate y Pimiento."
        } else if (ingrediente_extra == "Tofu"){
            resumen = "La pizza elegida es vegetariana y lleva Mozzarella, Tomate y Tofu."
        } else {
            resumen = "Error"
        }

    } else if (tipo_pizza == "no vegetariana"){
        console.log("Qué ingrediente desea: Peperoni o Salmón")
        if (ingrediente_extra == "Peperoni"){
            resumen = "La pizza elegida es no vegetariana y lleva Mozzarella, Tomate y Peperoni."
        } else if (ingrediente_extra == "Salmón"){
            resumen = "La pizza elegida es no vegetariana y lleva Mozzarella, Tomate y Salmón."
        } else {
            resumen ="Error"
        }

    } else {
        resumen = "Error"
    }

    return resumen
}
