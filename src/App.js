import GlobalStyles from '../src/styles/globals'
import Header from './components/Header'
import Board from "./components/Board";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { createTransition } from 'react-dnd-multi-backend';
function App() {
  const MouseTransition = createTransition('mousedown', (e) => {
    return e.type
      && e.type.indexOf('touch') === -1
      && e.type.indexOf('mouse') !== -1;
  });

  const HTML5ToTouch = {
    backends: [
      {
        backend: HTML5Backend,
      },
      {
        backend: TouchBackend({ enableMouseEvents: false }),
        preview: true,
        transition: TouchTransition,
      },
      {
        backend: HTML5Backend,
        transition: MouseTransition,
      },
    ],
  };

  return (
    <>
      <DndProvider backend={HTML5ToTouch} options={backendOptions}>
        <Header />
        <Board />
        <GlobalStyles />
      </DndProvider>
    </>
  );
}

export default App;
