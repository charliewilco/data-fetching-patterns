import { useMemo } from "react";
import formatDistance from "date-fns/formatDistance";

interface ProductCardProps {
	title: string;
	description: string;
	dateAdded: Date;
	imageURL: string;
}

export function ProductCard(props: ProductCardProps) {
	let dateAdded = useMemo(
		() => formatDistance(props.dateAdded, Date.now()),
		[props.dateAdded]
	);
	return (
		<div className="Content">
			<div className="ContentMedia">
				<img src={props.imageURL} alt={props.title} />
				<div>
					<h1>{props.title}</h1>
					<p>{dateAdded.toString()}</p>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}
