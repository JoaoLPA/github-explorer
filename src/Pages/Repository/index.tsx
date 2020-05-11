import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Logo from '../../Assets/1587379765556-attachment.svg';

import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../Services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then(response => setRepository(response.data));
    api
      .get(`repos/${params.repository}/issues`)
      .then(response => setIssues(response.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explorer" />
        <Link to="/">
          <RiArrowLeftSLine size={34} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <h2>{repository.full_name}</h2>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target="_blank">
            <div>
              <h2>{issue.title}</h2>
              <p>{issue.user.login}</p>
            </div>
            <RiArrowRightSLine size={34} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
