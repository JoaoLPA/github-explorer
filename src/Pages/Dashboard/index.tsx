import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Title, Form, Repositories, Error } from './styles';

import api from '../../Services/api';

import logo from '../../Assets/1587379765556-attachment.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handdleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Procure no formato owner/repo');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handdleAddRepository}>
        <input
          placeholder="Digite aqui"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <h2>{repository.full_name}</h2>
              <p>{repository.description}</p>
            </div>
            <RiArrowRightSLine size={34} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
