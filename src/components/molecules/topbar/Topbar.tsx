import { Image, Link } from '../../atoms';
import { List } from '../../atoms/list';
import { HtmlElementMap } from '../../types';

export const Topbar = () => {
	const Navbar = HtmlElementMap['NAV'];
	return (
		<Navbar className="w-full flex items-center py-4 px-6">
			<Link href="/">
				<Image
					src="https://exploratepsicologia.es/wp-content/smush-webp/2024/07/cropped-JPEG_Logo_1.1-scaled-1-278x83.jpg.webp"
					alt="Logo"
					className="max-w-72 h-auto object-cover"
				/>
			</Link>
			<List
				as="UL"
				key="topbar-menu"
				className="ml-auto flex gap-6"
				items={[
					{ content: <Link href="/">Inicio</Link> },
					{ content: <Link href="/team">Equipo profesional</Link> },
					{ content: <Link href="/contact">Contacto</Link> },
				]}
			/>
		</Navbar>
	);
};
