import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  margin-top: 3rem;
  max-width: 18ch;
  font-size: 4rem;
  line-height: 3.8rem;
  color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
  margin: 3rem 0 0;
  display: flex;
  max-width: 715px;

  input {
    flex: 1;
    padding: 20px 12px;
    border-radius: 5px 0 0 5px;
    border: 0;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${props =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
        border-right: 0px;
      `}

    &::placeholder {
      color: #3a3a3a;
    }
  }

  button {
    padding: 0 42px;
    background-color: #04d361;
    color: #fff;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    transition: all 0.25s ease-in-out;

    &:hover {
      background-color: ${shade(0.35, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 4rem;
  max-width: 715px;

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

    img {
      height: 64px;
      border-radius: 50%;
    }

    svg {
      margin-left: auto;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.5rem;
`;
