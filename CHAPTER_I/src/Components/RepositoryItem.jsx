
export function RepositoryItem(props){

    return(
        <li>
        <stron>{props.repository.name ?? 'Default'}</stron>
            <p>{props.repository.description}</p>
            <a href="">{props.repository.link}</a>
        </li>
    )
}