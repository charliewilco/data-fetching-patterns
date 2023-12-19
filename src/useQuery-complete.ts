import { useCallback, useEffect, useRef, useState } from "react";

interface QueryResult<T> {
	data: T | null;
	isLoading: boolean;
	error?: Error;
	refetch: () => Promise<void>;
}

export function useQuery<T>(promiseCB: Promise<T>): QueryResult<T> {
	const [isLoading, setLoading] = useState(false);
	const didFire = useRef(false);
	const dataResultRef = useRef<T | null>(null);
	const errResultRef = useRef<unknown | null>(null);
	const refetch = useCallback(() => {
		setLoading(true);

		return promiseCB
			.then((data) => {
				dataResultRef.current = data;
			})
			.catch((err) => {
				errResultRef.current = err;
			})
			.finally(() => {
				setLoading(false);
			});
	}, [setLoading, promiseCB]);

	useEffect(() => {
		if (didFire.current) {
			return;
		}
		refetch();
		didFire.current = true;
	}, [refetch]);

	return {
		isLoading,
		get data() {
			return dataResultRef.current;
		},
		get error() {
			return new Error(errResultRef.current?.toString());
		},
		refetch,
	};
}
