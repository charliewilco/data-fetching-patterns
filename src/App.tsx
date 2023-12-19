import { useQuery } from "./useQuery-complete";
import { getProductData } from "./get-products";
import { Loading } from "./loading";
import { ProductGrid } from "./ProductGrid";

let count = 20;

interface AppProps {
	delay?: number;
}

function App(props: AppProps) {
	let { isLoading, data } = useQuery(getProductData(count, props.delay));

	return isLoading ? (
		<Loading count={count} />
	) : data ? (
		<ProductGrid products={data.results} />
	) : null;
}

export default App;
