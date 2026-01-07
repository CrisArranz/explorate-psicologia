import { useEffect, useState } from 'react';
import { Container, Image, Link, Text } from 'src/components/atoms';
import { formatDateTime } from 'src/ui/utils/formatter/time';
import { mockRooms } from './mockRooms';
import { getTopbarHeight } from 'src/ui/utils/size/getTopbar';

interface Rooms {
	id: string;
	name: string;
	description: string;
	capacity: number;
	available: boolean;
	imageUrl: string;
	startTime?: Date;
	endTime?: Date;
}

/**
 * Página Home - Página principal de la aplicación.
 *
 * @component
 * @description Página de inicio de la aplicación. Actualmente es un placeholder.
 * Esta página será la landing principal después de la autenticación.
 *
 * @returns {React.ReactElement} Página home renderizada
 *
 * @example
 * <Home />
 */
export const Home = () => {
	const [rooms, setRooms] = useState<(Rooms | null)[]>([
		null,
		null,
		null,
		null,
	]);
	const [time, setTime] = useState<Date>(new Date());

	const topbarHeight = getTopbarHeight();

	useEffect(() => {
		setTimeout(() => {
			setRooms(mockRooms);
			console.log({ rooms });
		}, 3000);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Container
				as="SECTION"
				className="p-4 flex flex-col"
				style={{ height: `calc(100svh - ${topbarHeight}px)` }}
			>
				<Text as="H_1" className="text-3xl text-center font-bold mb-4">
					Horario Salas
				</Text>
				<Text as="H_1" className="text-l text-center font-bold mb-4">
					{formatDateTime(time)}
				</Text>
				<Container
					as="DIV"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 auto-rows-max"
				>
					{rooms.map((room, index) => (
						<Link
							href={`/rooms/${room?.id}`}
							key={`link-room-${room?.id}-${index}`}
							className="h-96"
						>
							<Container
								key={index}
								as="DIV"
								className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col overflow-hidden"
							>
								{room === null ? (
									<div className="animate-pulse w-full h-full flex items-center justify-center">
										<div className="bg-gray-300 rounded w-1/2 h-6" />
									</div>
								) : (
									<Container
										as="DIV"
										className="flex justify-center items-center w-full h-full group relative"
									>
										<Image
											src={room?.imageUrl}
											alt={room?.name}
											className="absolute top-0 left-0 w-full h-full object-cover group-hover:blur-sm transition-all ease-in-out duration-100"
										/>
										<Text className="text-transparent bottom-2/4 text-center w-full text-lg font-semibold group-hover:text-white group-hover:z-10 transition-all ease-in-out duration-100">
											{room?.name}
										</Text>
									</Container>
								)}
							</Container>
						</Link>
					))}
				</Container>
			</Container>
		</>
	);
};
