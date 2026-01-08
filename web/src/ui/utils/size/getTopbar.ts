const TOPBAR_ELEMENT_ID = 'navbar-topbar';

/**
 * Calcula y devuelve la altura (en píxeles) del elemento topbar con id `navbar-topbar`.
 * Retorna 0 si el elemento no existe o si estamos en contexto SSR (sin documento).
 *
 * @returns {number} La altura en píxeles del topbar, o 0 si no está disponible
 */
export function getTopbarHeight(): number {
	// En entorno SSR (sin documento), retornar 0
	if (typeof document === 'undefined') {
		return 0;
	}

	const topbarElement = document.getElementById(TOPBAR_ELEMENT_ID);

	// Si el elemento no existe, retornar 0
	if (!topbarElement) {
		return 0;
	}

	const elementBounds = topbarElement.getBoundingClientRect();
	return Math.round(elementBounds.height);
}
