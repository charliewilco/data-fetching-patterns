import { ProductCard } from "./ProductCard";
import type { Product } from "./get-products";

export function ProductGrid(props: { products: Product[] }) {
	return (
		<ul className="ProductGrid">
			{props.products.map((product) => {
				return <ProductCard {...product} key={product.id} />;
			})}
		</ul>
	);
}
