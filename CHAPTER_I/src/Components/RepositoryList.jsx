import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name:'undefined',
    description:'testando',
    link:'https://github.com/janascher/01-github-explorer'
}
export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}