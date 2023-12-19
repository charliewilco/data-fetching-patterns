import { faker } from "@faker-js/faker";

export interface Product {
	id: string;
	title: string;
	dateAdded: Date;
	description: string;
	imageURL: string;
}

function createFakeDatum(): Product {
	return {
		id: faker.string.nanoid(),
		title: faker.commerce.productName(),
		dateAdded: faker.date.anytime(),
		description: faker.commerce.productDescription(),
		imageURL: faker.image.urlLoremFlickr({
			category: "nature",
			width: 72,
			height: 72,
		}),
	};
}

export async function getProductData(
	count: number = 20,
	delay: number = 2000
): Promise<{ results: Product[] }> {
	return new Promise((resolve) =>
		setTimeout(() => {
			const results = new Array(count).fill(null).map(createFakeDatum);
			resolve({
				results,
			});
		}, delay)
	);
}
