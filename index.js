import React from 'react';
import ReactDOM from 'react-dom';

import defaultSlides from './defaultSlides';

const Slider = ({ slides }) => {
  // slide index
  const [curr, setCurr] = React.useState(0);
  const { length } = slides;
  
  const goToNext = () => {
    // final slide array

    setCurr(curr === length - 1 ? 0 : curr + 1);
  }
  
  // useEffect correr
  React.useEffect(() => {
    // proximo slide
    setTimeout(goToNext, 2000);

    // See the reactjs.org docs on hooks for more info
    return function() {
      clearTimeout(goToNext);
    }
  })
  
  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }
  
  return (
    <section className="slider">
      {slides.map((s, i) => (
        <div
          // ativar classe
          className={i === curr ? "slide active" : "slide"}
          key={s.title}
  
          aria-hidden={i !== curr}
        >
          <div>
            <h1>{s.title}</h1>
            <h2>{s.subtitle}</h2>
          </div>
          {i === curr && (
            <img className="image" src={s.image} alt={`Image for ${s.title}`} />
          )}
        </div>
      ))}
    </section>
  );  
}

const Main = () => {
  return (

    <main>
      <Slider slides={defaultSlides} />
    </main>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));