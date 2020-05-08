import React, { useState, FormEvent } from 'react';

import { RiArrowRightSLine } from 'react-icons/ri';
import { Title, Form, Repositories } from './styles';

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
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handdleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handdleAddRepository}>
        <input
          placeholder="Digite aqui"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <h2>{repository.full_name}</h2>
              <p>{repository.description}</p>
            </div>
            <RiArrowRightSLine size={34} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
