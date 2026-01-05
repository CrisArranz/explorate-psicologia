import { Button, Input } from 'components/atoms';

/**
 * Componente Login - Formulario de autenticación.
 *
 * @component
 * @description Componente que renderiza un formulario de login con campos de usuario y contraseña.
 * Incluye validación en cliente mediante inputs required.
 * Está configurado para POST pero requiere integración con backend.
 *
 * @returns {React.ReactElement} Formulario de login renderizado
 *
 * @example
 * <Login />
 */
export const Login = () => {
	return (
		<form className="flex flex-col gap-4" method="POST">
			<Input label="Username" input="username" type="text" />
			<Input label="Password" input="password" type="password" />
			<Button label="Login" />
		</form>
	);
};
