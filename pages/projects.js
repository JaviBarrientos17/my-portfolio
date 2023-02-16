import React, { Fragment } from "react";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <Fragment>
      <title>Javi Barrientos Peralta | Portfolio</title>
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
                <div className="button-container">
                  <a href="https://pkreactdex.netlify.app/">
                    <button className="primary-button linkBtns">Link</button>
                  </a>
                  <a href="https://github.com/JaviBarrientos17/ReactDex">
                    <button className="primary-button linkBtns">
                      <AiFillGithub size={25} />
                    </button>
                  </a>
                </div>
              </div>
            </article>
            <article>
              <img
                src="https://i.imgur.com/bPZegib.jpg"
                alt="ReactDex homepage"
              />
              <div className="card">
                <img src="https://tinyurl.com/5cjy2a4x" alt="Forecast Checker logo" />
                <p>Weather app, built with NextJS and the <a href="https://openweathermap.org/api">Weather API from OpenWeather</a></p>
                <div className="button-container">
                  <a href="https://forecast-checker.netlify.app/">
                    <button className="primary-button linkBtns">Link</button>
                  </a>
                  {/* TODO CHANGE GIT REPOSITORY LINK */}
                  <a href="https://github.com/JaviBarrientos17/ReactDex">
                    <button className="primary-button linkBtns">
                      <AiFillGithub size={25} />
                    </button>
                  </a>
                </div>
              </div>
            </article>
            <article>
              <img
                src="https://i.imgur.com/bPZegib.jpg"
                alt="ReactDex homepage"
              />
              <div className="card">
                <img src="https://tinyurl.com/5cjy2a4x" alt="ReactDex logo" />
                <p>Pokedex project using the PokeApi and React</p>
                <div className="button-container">
                  <a href="https://pkreactdex.netlify.app/">
                    <button className="primary-button linkBtns">Link</button>
                  </a>
                  <a href="https://github.com/JaviBarrientos17/ReactDex">
                    <button className="primary-button linkBtns">
                      <AiFillGithub size={25} />
                    </button>
                  </a>
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
