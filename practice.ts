/**
 * number[]                    			// array of numbers
 * string[]                    			// array of strings
 * Set<number>                 			// set of numbers
 * Record<string, number>      			// object: string keys → number values
 * let longest: string | null = null; 	// can genuinely be either
 * let count: number = 0;             	// always a number
 * result[num]							// the value stored at the key num
 */

{
	// Task: return the two numbers that add up to the target.
	const numbers: number[] = [2, 7, 11, 15];
	const target: number = 9;
	function twoNumsAddUp(numbers: number[], target: number): number[] | null {
		let seen: Set<number> = new Set();
		for (const num of numbers) {
			let needed = target - num;
			if (seen.has(needed)) {
				return [needed, num];
			}
			seen.add(num);
		}
		return null;
	}
	console.log(twoNumsAddUp(numbers, target));
}

{
	// frequency counter + second pass through original input
	// Task: return the first non-repeating character.
	const text: string = "aabbcddee";
	function firstNonRepeatChar(text: string): string | null {
		let result: Record<string, number> = {};
		let target = 1;
		for (const letter of text) {
			if (result[letter]) {
				result[letter]++;
			} else {
				result[letter] = 1;
			}
		}

		for (const char of text) {
			if (result[char] === target) {
				return char;
			}
		}
		return null;
	}
	// console.log(firstNonRepeatChar(text));
}

{
	// Task: group the words by their first letter.
	const words: string[] = ["apple", "apricot", "banana", "blueberry", "cherry"];
	function groupByLetter(words: string[]): Record<string, string[]> {
		let result: Record<string, string[]> = {};
		for (const word of words) {
			let letter = word[0];
			if (letter === undefined) continue;
			if (result[letter]) {
				result[letter].push(word);
			} else {
				result[letter] = [word];
			}
		}
		return result;
	}
	// console.log(groupByLetter(words));
}

{
	// Task: return an object containing the frequency of each word.
	const words: string[] = ["red", "blue", "red", "green", "blue", "red"];
	function freqOfEachWord(words: string[]): Record<string, number> {
		let result: Record<string, number> = {};
		for (const word of words) {
			if (result[word]) {
				result[word]++;
			} else {
				result[word] = 1;
			}
		}
		return result;
	}
	// console.log(freqOfEachWord(words));
}

{
	// Task: return the largest even number.
	const numbers: number[] = [5, 2, 9, 4, 7, 6];
	function largestEvenNumber(numbers: number[]): number | null {
		let largest: number | null = null;
		for (const num of numbers) {
			if (num % 2 === 0 && (largest === null || num > largest)) {
				largest = num;
			}
		}
		return largest;
	}
	// console.log(largestEvenNumber(numbers));
}

{
	// Task: return the longest word.
	const words: string[] = ["cat", "dog", "elephant", "fox", "giraffe"];
	function getLongestWord(words: string[]): string | null {
		let longest: string | null = null;
		for (const word of words) {
			if (longest === null) {
				longest = word;
			} else if (word.length > longest.length) {
				longest = word;
			}
		}
		return longest;
	}
	// console.log(getLongestWord(words));
}

{
	// Task: return the first word that starts with "b".
	const words: string[] = ["apple", "banana", "apricot", "blueberry", "avocado"];
	function firstWordB(words: string[]): string | null {
		let target: string | null = "b";
		for (const word of words) {
			let letter = word[0];
			if (letter === undefined) continue;
			if (letter === target) {
				return word;
			}
		}
		return null;
	}
	// console.log(firstWordB(words));
}

{
	// Task: return true if the same number appears twice within k indexes of each other.
	const numbers: number[] = [1, 2, 3, 1, 4];
	const k: number = 3;
	function sameNumberTwice(numbers: number[], k: number): boolean {
		let results: Record<string, number> = {};
		for (let i = 0; i < numbers.length; i++) {
			let num = numbers[i];
			if (num === undefined) continue;
			const previousIndex = results[num];
			if (previousIndex !== undefined) {
				const distance = i - previousIndex;
				if (distance <= k) {
					return true;
				}
			}
			results[num] = i;
		}
		return false;
	}
	// console.log(sameNumberTwice(numbers, k));
}

{
	// Task: return the first repeated number.
	const numbers: number[] = [8, 3, 6, 2, 3, 9];
	function firstRepeatedNumber(numbers: number[]): number | null {
		let seen: Set<number> = new Set();
		for (const num of numbers) {
			if (seen.has(num)) {
				return num;
			}
			seen.add(num);
		}
		return null;
	}
	// console.log(firstRepeatedNumber(numbers));
}

{
	// Task: return the number that appears most often.
	const numbers: number[] = [3, 5, 3, 2, 5, 5, 7];
	function numberAppearsMostOften(numbers: number[]): number | null {
		let result: Record<string, number> = {};
		let count = 0;
		let numMostOften: number | null = null;
		for (const num of numbers) {
			if (result[num]) {
				result[num]++;
			} else {
				result[num] = 1;
			}
			console.log(result);
			if (result[num] > count) {
				count = result[num];
				numMostOften = num;
			}
		}
		return numMostOften;
	}
	// console.log(numberAppearsMostOften(numbers));
}

{
	// group words by first letter because it introduces a slightly richer object type:
	const words: string[] = ["apple", "banana", "avocado", "blueberry", "cherry"];
	function groupByFirstLetter(words: string[]): Record<string, string[]> {
		let results: Record<string, string[]> = {};
		for (const word of words) {
			let letter = word[0];
			if (letter === undefined) continue;
			if (results[letter]) {
				results[letter].push(word);
			} else {
				results[letter] = [word];
			}
		}
		return results;
	}
	// console.log(groupByFirstLetter(words));
}

{
	// Task: return the word that appears most often.
	const words: string[] = ["cat", "dog", "cat", "bird", "dog", "cat"];
	function returnTheWord(words: string[]): string | null {
		let results: Record<string, number> = {};
		let highestCount = 0;
		let highestCountWord: string | null = null;
		for (const word of words) {
			if (results[word]) {
				results[word]++;
			} else {
				results[word] = 1;
			}

			console.log(results);

			if (results[word] > highestCount) {
				highestCount = results[word];
				highestCountWord = word;
			}
		}
		return highestCountWord;
	}
	// console.log(returnTheWord(words));
}

{
	// return the first repeated number.
	type Record = {};
	const numbers: number[] = [4, 7, 2, 9, 7, 3];
	function firstRepeatNumber(numbers: number[]): number | null {
		let seen = new Set<number>();
		for (const num of numbers) {
			if (seen.has(num)) {
				return num;
			}
			seen.add(num);
		}
		return null;
	}
	// console.log(firstRepeatNumber(numbers));
}

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
	// console.log(smallestAndLargest(numbers));
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
