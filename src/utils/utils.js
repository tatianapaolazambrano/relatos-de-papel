// Función para navegar a la pagina principal
export const mainPage = (navigate) => {
    navigate('/home');
};

// Función para agregar un libro al carrito
export const handleAddToCart = (addToCart, book) => {
    addToCart(book);
};

// Función para navegar al detalle del libro
export const handleClick = (navigate, bookId) => {
    navigate(`/book/${bookId}`);
};

// Función para calcular el total de la compra
export const calcularTotal = (cartItems) => {
    const total = cartItems.reduce((total, item) => total + item.price, 0);
    return parseFloat(total.toFixed(2)); // Redondea a dos decimales
};

// Función para realizar Scroll al inicio de la pagina
export const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

// Función para mostrar las notificaciones de SweetAlert
export const showNotification = (title, text, icon) => {
    return window.Swal.fire({
        title,
        text,
        icon,
    });
};

// Función para despues de realizar las compras
export const handleCheckout = (cartItems, emptyCart, navigate) => {
    if (cartItems.length === 0) {
        // Mostramos una notificación de advertencia si el carrito está vacío
        return showNotification(
            "Ups, tu carrito está vacío",
            "Explora nuestra tienda y agrega productos antes de proceder con la compra.",
            "warning"
        );
    }

    // Mostramos una notificación de éxito cuando la compra se realiza
    showNotification(
        "¡Gracias por tu compra!",
        "Tu pedido ha sido realizado con éxito. ¡Nos alegra haberte atendido!",
        "success"
    ).then((result) => {
        if (result.isConfirmed) {
            emptyCart(); // Vaciar el carrito
            navigate('/home'); // Redirigir a la página principal
        }
    });
};



