import React, { Fragment } from "react";
import ThemeToggle from "../components/ThemeToggle";

const Projects = () => {
  return (
    <Fragment>
      <title>Javi Barrientos Peralta | Portfolio</title>
      {/* <div className="gridDiv">
        <div className="card">
          <img src="https://pkreactdex.netlify.app/static/media/ReactDex.07b1fe57db71ff3dc1cb.png" />
          <section>
            <h4>Pokedex project using the PokeApi and React</h4>
            <button className="primary-button">Link</button>
          </section>
        </div>
      </div> */}
      <section className="gridSection">
        <div class="container">
          <main class="grid">
            <article>
              <img
                src="https://i.imgur.com/bPZegib.jpg"
                alt="ReactDex homepage"
              />
              <div class="text">
                {/* <p className="cardTitle">ReactDex</p> */}
                <img src="https://tinyurl.com/5ysvxbr5" alt="ReactDex logo" />
                <p>Pokedex project using the PokeApi and React</p>
                <a href="https://pkreactdex.netlify.app/"><button className="primary-button">Link</button></a>
                {/* // TODO ADD SPACE BETWEEN THE TWO BTNS */}
                <a href="https://github.com/JaviBarrientos17/ReactDex"><button className="primary-button">Link</button></a>
              </div>
            </article>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
