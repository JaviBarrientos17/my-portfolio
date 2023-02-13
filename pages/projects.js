import React, { Fragment } from "react";
import { AiFillGithub } from "react-icons/ai";

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
        <div className="container">
          <main className="grid">
            <article>
              <img
                src="https://i.imgur.com/bPZegib.jpg"
                alt="ReactDex homepage"
              />
              <div className="card">
                <img src="https://tinyurl.com/5cjy2a4x" alt="ReactDex logo" />
                <p>Pokedex project using the PokeApi and React</p>
                <div class="button-container">
                  <a href="https://pkreactdex.netlify.app/">
                    <button className="primary-button linkBtns">Link</button>
                  </a>
                  <a href="https://github.com/JaviBarrientos17/ReactDex">
                    <button className="primary-button linkBtns">
                      <AiFillGithub size={25} />
                    </button>
                  </a>
                  {/* <button class="primary-button">Button 3</button> */}
                </div>
              </div>
            </article>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
