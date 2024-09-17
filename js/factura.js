    // Función para actualizar el contenido del carrito y la factura en el main
    function actualizarCarrito() {
        const cartItemsElement = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        const facturaTableBody = document.querySelector('#tabla-factura tbody');
        const facturaTotalElement = document.getElementById('factura-total');
    
        let totalPrecio = 0;
        let cartHTML = '';
        let facturaHTML = '';
    
        carrito.forEach((producto, index) => {
            // Crear HTML para cada producto en el dropdown del carrito
            cartHTML += `
                <div style="margin-bottom: 15px;">
                    <strong>${index + 1}. ${producto.nombre}</strong><br>
                    <span>Cantidad: ${producto.cantidad}</span><br>
                    <span>Precio: $${(producto.precio / producto.cantidad).toFixed(2)}</span>
                </div>
            `;
            totalPrecio += producto.precio;
    
            // Crear filas para la tabla de la factura
            facturaHTML += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.cantidad}</td>
                    <td>$${(producto.precio / producto.cantidad).toFixed(2)}</td>
                    <td>$${producto.precio.toFixed(2)}</td>
                </tr>
            `;
        });
    
        // Actualizar el contenido del carrito en el dropdown
        cartItemsElement.innerHTML = cartHTML;
        cartTotalElement.textContent = 'Precio total: $' + totalPrecio.toFixed(2);
    
        // Actualizar la tabla de la factura
        facturaTableBody.innerHTML = facturaHTML;
    
        // Mostrar el precio total en la factura
        facturaTotalElement.innerHTML = `<strong>Total: $${totalPrecio.toFixed(2)}</strong>`;
    
        // Actualizar las variables globales
        totalProductos = carrito.reduce((sum, producto) => sum + producto.cantidad, 0);
        document.getElementById('cart-count').textContent = totalProductos;
    }
    
    