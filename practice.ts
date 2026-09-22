/**
 * number[]                    			// array of numbers
 * string[]                    			// array of strings
 * Set<number>                 			// set of numbers
 * Record<string, number>      			// object: string keys → number values
 * let longest: string | null = null; 	// can genuinely be either
 * let count: number = 0;             	// always a number
 */

{
	// Write a function that returns both the smallest and largest number.
	type Result = {
		smallest: number | null;
		largest: number | null;
	};
	const numbers: number[] = [5, 2, 9, 1, 7];
	function smallestAndLargest(numbers: number[]): Result | null {
		if (!numbers.length) return null;
		let smallest = numbers[0]!;
		let largest = numbers[0]!;
		for (const num of numbers) {
			if (num < smallest) {
				smallest = num;
			}
			if (num > largest) {
				largest = num;
			}
		}
		return {
			smallest,
			largest,
		};
	}
	console.log(smallestAndLargest(numbers));
}

{
	const words: string[] = ["cat", "elephant", "dog", "giraffe", "ox"];
	function longestWord(words: string[]): string | null {
		let longest: string | null = null;
		let count: number = 0; // always a number
		for (const word of words) {
			if (word.length > count) {
				count = word.length;
				longest = word;
			}
		}
		return longest;
	}
	// console.log(longestWord(words));
}

{
	const numbers: number[] = [4, 7, 2, 9, 7, 3];
	function largestEvenNumber(numbers: number[]): number | null {
		let highest: number | null = null;
		for (const num of numbers) {
			if (num % 2 === 0 && (highest === null || num > highest)) {
				highest = num;
			}
		}
		return highest;
	}
	// console.log(largestEvenNumber(numbers));
}

{
	const words: string[] = ["dog", "cat", "dog", "bird", "cat", "dog"];
	function mostFrequentWord(words: string[]): string | null {
		let results: Record<string, number> = {};
		let wordCount = null;
		let count = 0;
		for (const word of words) {
			if (results[word]) {
				results[word]++;
			} else {
				results[word] = 1;
			}

			if (results[word] > count) {
				count = results[word];
				wordCount = word;
			}
		}
		return wordCount;
	}
	// console.log(mostFrequentWord(words));
}

{
	const numbers: number[] = [4, 7, 2, 9, 7, 3];
	function getFirstRepeatedNumber(numbers: number[]): number | null {
		let seen = new Set<number>();
		for (const num of numbers) {
			if (seen.has(num)) {
				return num;
			}
			seen.add(num);
		}
		return null;
	}
	// console.log(getFirstRepeatedNumber(numbers));
}

{
	interface Product {
		id: number;
		name: string;
		price: number;
		inStock: boolean;
		description?: string;
	}

	const products: Product[] = [
		{ id: 1, name: "Dog Food", price: 42, inStock: true, description: "Chicken recipe" },
		{ id: 2, name: "Cat Toy", price: 12, inStock: false },
		{ id: 3, name: "Dog Toy", price: 18, inStock: true },
		{ id: 4, name: "Cat Food", price: 36, inStock: true },
	];

	function getAvailableProducts(products: Product[]): Product[] {
		// use filter()
		return products.filter((item) => item.inStock);
	}
	// console.log(getAvailableProducts(products));

	function getProductDescription(product: Product): string {
		// return the description if it exists
		// otherwise return "No description"
		return product.description ? product.description : "No description";
	}
	// const firstProduct = products[0];
	// if (firstProduct) {
	// 	console.log(getProductDescription(firstProduct));
	// }

	function getAvailableProductNames(products: Product[]): string[] {
		// only in-stock products
		// then return just their names
		return products.filter((item) => item.inStock).map((item) => item.name);
	}
	// console.log(getAvailableProductNames(products));

	function getProductNames(products: Product[]): string[] {
		// return just the product names
		return products.map((item) => item.name);
	}
	// console.log(getProductNames(products));

	function findProductById(products: Product[], id: number): Product | null {
		for (const item of products) {
			if (item.id === id) {
				return item;
			}
		}
		return null;
	}
	// console.log(findProductById(products, 3));
	// const product = findProductById(products, 10);
	// if (product) {
	// 	console.log(product.name);
	// }

	// function getAvailableProducts(products: Product[]): Product[] {
	// 	let newArray: Product[] = [];
	// 	for (const item of products) {
	// 		if (item.inStock) {
	// 			newArray.push(item);
	// 		}
	// 	}
	// 	return newArray;
	// }
	// console.log(getAvailableProducts(products));
}
