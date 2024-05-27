import React from "react";

function App() {
  const temperature = 25;
  return (
    <div>
      <Header />
      <Content />
      <Main />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <Nav />
      <h1>Welcome to My Website</h1>
      <button>ON / OFF</button>
      <span>Current Temperature: 25°C</span>
    </header>
  );
}

const Content = () => {
  return (
    <div>
      <Temperature />
    </div>
  );
};
const Temperature = () => {
  return <div>25°C</div>;
};

function Main() {
  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>We are a company that values excellence and innovation.</p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <button>Down</button>
        <button>Up</button>
      </div>
      <p>&copy; 2024 My Website</p>
    </footer>
  );
}

export default App;
