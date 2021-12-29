

 interface RepositoryItemProps {
  repository: {
    name: string,
    description?: string,
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  const { repository: {name, description, html_url} } = props;
  return (
      <li>
        <strong>{name}</strong>
        <p>{description}</p>
        <a href={html_url}>
          Acessar Repositório
        </a>
      </li>
  )
}