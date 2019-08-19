var library = new Array();
	function Books(isbn, title, author, price) {
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.price = price;

	}
	library.push(new Books('9781785150289', 'Go	Set	a Watchman', 'Harper Lee', 9.89));
	library.push(new Books('9780744016697','The	Legend	of	Zelda:	Tri	Force	Heroes', 'Prima	Games', 14.99));
	library.push(new Books('9780099529126', 'Catch-22', 'Joseph	Heller', 6.29));
	library.push(new Books('9780007447831', 'A	Clash	of	Kings', 'George	R.	R.	Martin', 4.95));
	library.push(new Books('9781853260001', 'Pride	and	Prejudice', 'Jane	Austin', 1.99));
	library.push(new Books('9780099576853', 'Casino	Royale', 'Ian	Fleming', 6.79));
	library.push(new Books('9780099549482', 'To	Kill	a	Mockingbird', 'Harper	Lee', 4.99));
	library.push(new Books('9780333998667','Fundamentals	of	Computer	Architecture', 'Mark	Burrell', 41.10));
	library.push(new Books('9780701189358', 'Simply	Nigella:	Feel	Good	Food', 'Nigella	Lawson', 12.50));
    
    
    function printDatabase() {
		for ( var i in library) {
			console.log("ISBN:" + getISBN(library[i].isbn) + "\tTitle:"
					+ library[i].title + "\tAuthor:" + library[i].author
					+ "\tPrice:" + library[i].price);
		}
	}
	function getISBN(isbn) {
		return isbn.substring(0, 3) + "-" + isbn.substring(3, 4) + "-"
				+ isbn.substring(4, 7) + "-" + isbn.substring(7, 12) + "-"
				+ isbn.substring(12, 13);
	}
	function valid(ISBN) {
		var inte = new Array();
		var sum = 0;
		for (var i = 0; i <= 12; i++) {
			var number = parseInt(ISBN.substring(i, i + 1));
			inte.push(number);
			if (i % 2 == 0 && i != 12) {
				sum += number * 1;
			} else {
				if (i != 12) {
					sum += number * 3;
				}
			}
		}
		return 10 - (sum % 10) == inte[12];
	}

	function checks() {
		var Validd = true;
		for ( var i in library) {
			if (!valid(library[i].isbn)) {
				Validd = false;
				console.log("This book has a valid ISBN");
				console
						.log("ISBN:" + getISBN(library[i].isbn) + "\tTitle:"+ library[i].title + "\tAuthor:" + library[i].author + "\tPrice:" + library[i].price);
				library.splice(i, 1);
			}
		}
		if (Validd) {
			console.log("The ISBN is Valid");
			printDatabase();
		}
	}
	checks();
