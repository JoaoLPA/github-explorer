import styled from 'styled-components';

import { shade, lighten } from 'polished';

export const Header = styled.header`
  display: flex;
  /* margin-top: 16px; */
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.3s ease;

    &:hover {
      color: ${shade(0.3, '#a8a8b3')};
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      height: 120px;
      margin-right: 24px;
    }
    div {
      h2 {
        font-size: 2rem;
        color: #3d3d4d;
      }
      p {
        font-size: 1.5rem;
        color: ${lighten(0.3, '#3d3d4d')};
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    li {
      strong {
        font-size: 1.8rem;
        color: #3d3d4d;
      }
      list-style: none;
      span {
        display: block;
        margin-top: 6px;
        font-size: 1.2rem;
        color: ${lighten(0.3, '#3d3d4d')};
      }
    }
    li + li {
      margin-left: 80px;
    }
  }
`;

export const Issues = styled.div`
  margin-top: 4rem;

  a {
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    width: 100%;
    text-decoration: none;
    padding: 24px;
    transition: transform 0.1s ease-in-out 0.05s;
    text-decoration: none;
    color: #3a3a3a;

    & + a {
      margin-top: 12px;
    }

    &:hover {
      transform: translateX(12px);
    }

    div {
      margin: 0 12px;
      flex: 1;
      p {
        margin-top: 0.3rem;
        color: ${lighten(0.4, '#3a3a3a')};
      }
    }

    svg {
      margin-left: auto;
    }
  }
`;
