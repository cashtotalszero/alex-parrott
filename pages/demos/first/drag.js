import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import Example from './example';

function App() {
  return (
    <div className="App">
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: false, enableTouchEvents: true }}>
        <Example />
      </DndProvider>
    </div>
  );
}

export default App;
