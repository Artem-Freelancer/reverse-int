module.exports = function reverse (n) {
	if (n < 0) {
		n = n * (-1);
		n = n.toString();
		let arrayNumbers = Array.from(n);
		arrayNumbers.reverse();
		n = String(arrayNumbers);
		n = n.replace(/,/g, "");
		return n;
	} else {
		n = n.toString();
		let arrayNumbers = Array.from(n);
		arrayNumbers.reverse();
		n = String(arrayNumbers);
		n = n.replace(/,/g, "");
		return n;
	}
}
