/* eslint-disable @typescript-eslint/ban-ts-comment */
interface QueryResult<T> {
	data: T | null;
	isLoading: boolean;
	error?: Error;
	refetch: () => Promise<void>;
}

// @ts-expect-error
export function useQuery<T>(promiseCB: Promise<T>): QueryResult<T> {
	// @ts-expect-error
	return {};
}
