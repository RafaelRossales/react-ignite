import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'



interface Repository{
    name:string,
    description:string,
    html_url:string
}
export function RepositoryList(){

    const [respositories, setRepositories] = useState<Repository[]>([])

    // Nunca esquecer de passar o segundio parâmetro
    // Se nao passar  a funcao entrará em loop
    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[]);

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {respositories.map(repository => {
                    return  <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}