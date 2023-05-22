














import {createContext, useContext, useState, } from 'react'


const Video = createContext()


function ProjectContext({children}) {
  const [selected, setSelected] = useState('New');
  const [active, setActive] = useState("videos");
  
  return (
    <Video.Provider value={{selected, setSelected, active, setActive}}>
      {children}
    </Video.Provider>
  );
}

export default ProjectContext;
export const ProjectState = () => {
  return useContext(Video)
}




