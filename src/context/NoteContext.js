import { createContext, useState } from "react";


const NoteContext = createContext({
    notes: [],
    setNotes: () => {},
    selectedNote: "",
    setSelectedNote: () => {},
});

const Provider = ({ children }) => {
    const [selectedNote, setSelectedNote] = useState(""); 
    const [notes, setNotes] = useState([]); 
    
    const data = {
        notes,
        setNotes,
        selectedNote,
        setSelectedNote,
    };
    
    return (
        <NoteContext.Provider value={data}>
        {children}
      </NoteContext.Provider>
    );
};


  
export { Provider };
    
export default NoteContext;