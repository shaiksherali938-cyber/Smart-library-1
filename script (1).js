const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://covers.openlibrary.org/b/id/10523338-L.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://covers.openlibrary.org/b/id/10958377-L.jpg"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "https://covers.openlibrary.org/b/id/11153259-L.jpg"
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    image: "https://covers.openlibrary.org/b/id/10590258-L.jpg"
  }
];

const bookGrid = document.getElementById("bookGrid");

// Render Books
books.forEach(book => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  bookCard.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <div class="book-info">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    </div>
  `;

  bookGrid.appendChild(bookCard);
});

// Handle Book Request
document.getElementById("requestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Your book request has been successfully submitted.");

  this.reset();
});