import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';

import Page from '../../components/Page';
import Container from '../../components/PuzzleContainer';
import CustomDragLayer from '../../components/PuzzleDragLayer';

const PuzzlePage = () => {
  const backend = isMobile ? TouchBackend : HTML5Backend;

  return (
    <Page>
      <DndProvider backend={backend} options={{ enableMouseEvents: true, enableTouchEvents: true }}>
        <Container />
        <CustomDragLayer />
      </DndProvider>
    </Page>
  );
};

export default PuzzlePage;
