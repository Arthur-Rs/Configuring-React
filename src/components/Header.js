import React, {useState,useEffect} from 'react'
import api from '../services/api'


/*
* Components
* Propriedades
* Estado & Imutabilidade
*/

export default function Header({ title }) {
  
  const [projects, setProjects] = useState(['Desenvolviment', 'Classification'])

  useEffect(()=>{
    api.get('/projects').then((res)=>{
      setProjects(res.data)
  
    })
  },[])

  const HandleAddProject = () => {
    api.post('/projects', {
      id: Math.floor(Math.random() * 64),
      title: 'Desenvolvimento',
      tasks: ['Começo', 'fim']
    }).then((res)=>{
      api.get('/projects').then((res)=>{
        setProjects(res.data)
    
      })
    })
    
  }
  return (
    <header>
      <h1>{title}</h1>
      <ul>
      {
      projects.map((project) => (
        <li key={project.id}>
          <span>{project.title}</span>
        </li>
        ))
      }
      </ul>
      <button type="button" onClick={HandleAddProject}>Adicionar novo projeto</button>
    </header>
  )
}
