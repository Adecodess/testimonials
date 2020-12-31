import React from "react";
import Testimonials from "./Testimonials";

function App() {
  return (
    <main className="container">
      <section>
        <div className="title">
          <h2>Our Testimonials</h2>
          <div className="underline"></div>
        </div>
        <Testimonials />
      </section>
    </main>
  );
}

export default App;
