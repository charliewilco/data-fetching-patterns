import { useMemo } from "react";

interface LoadingProps {
	count: number;
}

export function Loading(
	props: LoadingProps = {
		count: 20,
	}
) {
	let items = useMemo(() => {
		return new Array(props.count).fill(null);
	}, [props.count]);

	return (
		<div className="LoadingContainer" aria-live="polite" aria-busy>
			<span className="visually-hidden">Loading...</span>

			{items.map((_, i) => {
				return (
					<div key={i} className="Loading Content" role="status">
						<div className="LoadingItem" />
						<div className="LoadingItem tiny" />
						<div className="LoadingItem tiny" />
					</div>
				);
			})}
		</div>
	);
}
