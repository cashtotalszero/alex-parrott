import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

import Page from '../../components/Page';
import Container from '../../components/PuzzleContainer';
import CustomDragLayer from '../../components/PuzzleDragLayer';

const PuzzlePage = () => (
  <Page>
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true, enableTouchEvents: true }}>
      <Container />
      <CustomDragLayer />
    </DndProvider>
  </Page>
);

export default PuzzlePage;
