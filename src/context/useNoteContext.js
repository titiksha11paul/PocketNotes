import { useContext } from 'react';
import NoteContext from '../context/NoteContext';

const useNoteContext = () => {
  return useContext(NoteContext);
}

export default useNoteContext;
