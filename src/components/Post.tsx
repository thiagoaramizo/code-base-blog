import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PostType } from '../@types/PostType'
import { CalendarCheck, GithubLogo, X } from '@phosphor-icons/react'

interface PostProps {
  post: PostType
}

export const Post = ({ post }: PostProps) => {
  function excerpt(text: string) {
    return text.substring(0, 200) + '...'
  }

  return (
    <Dialog.Root>
      <Trigger>
        <Card className="excerpt">
          <h3>{post.title}</h3>
          <p>{excerpt(post.body)}</p>
          <span>
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </Card>
      </Trigger>

      <Dialog.Portal>
        <Overlay />
        <FullCard>
          <Card className="fullCard">
            <h1>{post.title}</h1>
            <div className="authorDate">
              <span>
                <GithubLogo size={20} /> {post.user.login}
              </span>
              <span>
                <CalendarCheck size={20} />
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
            <ReactMarkdown>{post.body}</ReactMarkdown>
            <CloseButton>
              <X size={32} weight="bold" />
            </CloseButton>
          </Card>
        </FullCard>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const Card = styled.article`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;
  line-height: 1.3;
  margin: 0.5rem;
  min-height: 5rem;
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.4s, color 0.4s;

  &:hover {
    transform: scale(1.01);
    background-color: ${(props) => props.theme['gray-700']};
  }

  & h3 {
    text-transform: lowercase;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  & span {
    display: block;
    font-size: 0.75rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['gray-500']};
  }

  &.fullCard {
    padding: 4rem;
    position: relative;
    max-width: 960px;
    margin: 2rem auto;
    animation: slide-in-blurred-top 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;

    &:hover {
      transform: scale(1);
      background-color: ${(props) => props.theme['gray-600']};
    }

    & a {
      color: ${(props) => props.theme['primary-dark']};
    }

    & h1 {
      color: ${(props) => props.theme['primary-dark']};
      text-transform: lowercase;
      font-size: 3.5rem;
      line-height: 4rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid ${(props) => props.theme['gray-500']};
      margin-bottom: 0;

      &::before {
        content: '>';
      }

      &::after {
        content: '_';
        animation: blink 2s ease 0s infinite normal forwards;
      }
    }

    & .authorDate {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 0.875rem;

      & span {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: 1rem;
      }
    }

    & p {
      font-size: 1rem;
      line-height: 1.5;
      text-align: justify;
    }

    & pre {
      padding: 0.5rem 1rem;
      background-color: ${(props) => props.theme['gray-800']};
      border-radius: 6px;
      margin: 1rem 0;
      line-height: 1.6;
    }

    & h2,
    h3,
    h4 {
      text-transform: none;
      margin-top: 3rem;
      margin-bottom: 1rem;
    }

    & h2 {
      border-bottom: 1px solid ${(props) => props.theme['gray-500']};
      padding-bottom: 0.5rem;
    }

    & h3 {
      font-size: 1.2rem;
      margin-bottom: 0;
    }
  }
`

const Trigger = styled(Dialog.Trigger)`
  border: 0;
  background-color: transparent;

  &:focus {
    box-shadow: none;
  }

  &[data-state='open'] {
    & .excerpt {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme['gray-600']};
    }
  }
`

const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
`

const FullCard = styled(Dialog.Content)`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  inset: 0;
  &:focus {
    box-shadow: none;
  }
`

const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme.white};

  &:focus,
  :hover {
    box-shadow: none;
    color: ${(props) => props.theme.primary};
  }
`
