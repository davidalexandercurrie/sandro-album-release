import './App.css';
import Sketch from 'react-p5';

function App() {
  let x, y;
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    x = p5.windowWidth / 2;
    y = p5.windowHeight / 2;
  };

  const draw = p5 => {
    p5.clear();
    p5.ellipse(x, y, 70, 70);
    x += p5.random(-1, 1);
    y += p5.random(-1, 1);
  };
  return (
    <>
      <div className="iframe-container">
        <iframe
          title="stream"
          className="iframe"
          src="https://www.youtube.com/embed/8gkxC22E-sY?controls=0&autoplay=1&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="p5-container">
        <Sketch setup={setup} draw={draw} />;
      </div>
    </>
  );
}

export default App;
