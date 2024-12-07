/**
 * Podemos imprimir distintos tipos de mensaje en consola
 */

// https://developer.mozilla.org/es/docs/Web/API/console/error_static
console.error("Esto es un error");

// https://developer.mozilla.org/es/docs/Web/API/console/info_static
console.info("Esto es una información");

// https://developer.mozilla.org/es/docs/Web/API/console/log_static
console.log("Esto es un log");

console.warn("Esto es una advertencia");

// https://developer.mozilla.org/es/docs/Web/API/console/trace_static
/**
 * No estándar: Esta característica no es parte de los estándares.
 * No la uses en sitios Web en producción: no funcionará para todos los usuarios.
 * Podrían haber también incompatibilidades considerables entre distintas implementaciones
 * y el comportamiento podría cambiar en el futuro.
 */
const utilidad = () => {
    const saludar = () => {
        console.trace();
    };

    saludar();
};

utilidad();
