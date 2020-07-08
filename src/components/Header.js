import React, {useState} from 'react'

/*
* Components
* Propriedades
* Estado & Imutabilidade
*/

export default function Header({ title }) {
  
  const [projects, setProjects] = useState(['Desenvolviment', 'Classification'])

  const HandleAddProject = () => {
    setProjects([...projects, `Date: ${Date.now()}`])
  }

  return (
    <header>
      <h1>{title}</h1>
      <ul>
        {projects.map((project) => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={HandleAddProject}>Adicionar novo projeto</button>
    </header>
  )
}
