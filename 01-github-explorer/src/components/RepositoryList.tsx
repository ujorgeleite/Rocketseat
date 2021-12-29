import { useEffect, useState } from 'react';
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

interface Repository {
    name: string,
    description?: string,
    html_url: string
}

export function RepositoryList() {
  const url = 'https://api.github.com/users/ujorgeleite/repos';
  const [repositories, setRepositories] = useState<Repository[]>([]);


  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setRepositories(data))

  },[])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {
          repositories && repositories.map((repository) => 
            <RepositoryItem key={repository.name} repository = {repository}/>   
          )
        }

        
      </ul>
    </section>
  )

}