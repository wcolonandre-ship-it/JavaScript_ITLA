import { hacer_pedido_pizza } from './main.js';

// Nota: Se han omitido los tests para las Tareas 1, 2 y 3 (Notas, Shrek, Calculadora)
// ya que las creamos en la conversación anterior. Nos centraremos en la nueva Tarea de la pizza.



describe('🍕 TAREA 4: Pedido de Pizza Bella Napoli', () => {
    
    // --- Casos de Éxito: Pizza Vegetariana ---
    it('debería confirmar una pizza vegetariana con Pimiento', () => {
        const tipo = 'vegetariana';
        const ingrediente = 'Pimiento';
        const esperado = "La pizza elegida es vegetariana y lleva Mozzarella, Tomate y Pimiento.";
        
        expect(hacer_pedido_pizza(tipo, ingrediente)).toBe(esperado);
    });

    it('debería confirmar una pizza vegetariana con Tofu', () => {
        const tipo = 'vegetariana';
        const ingrediente = 'Tofu';
        const esperado = "La pizza elegida es vegetariana y lleva Mozzarella, Tomate y Tofu.";
        
        expect(hacer_pedido_pizza(tipo, ingrediente)).toBe(esperado);
    });

    // --- Casos de Éxito: Pizza NO Vegetariana ---
    it('debería confirmar una pizza NO vegetariana con Peperoni', () => {
        const tipo = 'no vegetariana';
        const ingrediente = 'Peperoni';
        const esperado = "La pizza elegida es no vegetariana y lleva Mozzarella, Tomate y Peperoni.";
        
        expect(hacer_pedido_pizza(tipo, ingrediente)).toBe(esperado);
    });
    
    it('debería confirmar una pizza NO vegetariana con Salmón', () => {
        const tipo = 'no vegetariana';
        const ingrediente = 'Salmón';
        const esperado = "La pizza elegida es no vegetariana y lleva Mozzarella, Tomate y Salmón.";
        
        expect(hacer_pedido_pizza(tipo, ingrediente)).toBe(esperado);
    });

    // --- Casos de Fallo: Ingredientes Inválidos para el Tipo ---
    it('debería retornar un error si se elige Tofu (Veg) para una pizza NO vegetariana', () => {
        const tipo = 'no vegetariana';
        const ingrediente = 'Tofu';
        const esperado = "Error";
        
        expect(hacer_pedido_pizza(tipo, ingrediente)).toBe(esperado);
    });
    
    it('debería retornar un error si se elige Jamón (No-Veg) para una pizza vegetariana', () => {
        const tipo = 'vegetariana';
        const ingrediente = 'Jamón';
        const esperado = "Error";
        
        expect(hacer_pedido_pizza(tipo, ingrediente)).toBe(esperado);
    });

    // --- Casos de Fallo: Datos de Entrada Inválidos ---
    it('debería retornar un error si el tipo de pizza no es reconocido', () => {
        const tipo = 'vegana'; // No es 'vegetariana' ni 'no vegetariana'
        const ingrediente = 'Pimiento';
        const esperado = "Error";
        
        expect(hacer_pedido_pizza(tipo, ingrediente)).toBe(esperado);
    });
    
    it('debería retornar un error si el ingrediente extra no existe', () => {
        const tipo = 'vegetariana';
        const ingrediente = 'Piña'; // ¡Anatema!
        const esperado = "Error";
        
        expect(hacer_pedido_pizza(tipo, ingrediente)).toBe(esperado);
    });
});