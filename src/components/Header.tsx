import { GithubLogo, MagnifyingGlass, MapPin } from '@phosphor-icons/react'
import styled from 'styled-components'
import * as Collapsible from '@radix-ui/react-collapsible'

import { AuthorType } from '../@types/AuthorType'
import { SearchForm } from './SearchForm'
import { PostType } from '../@types/PostType'

interface HeaderProps {
  author: AuthorType
  posts: PostType[] | undefined
  filterPosts: (posts: PostType[]) => void
}

export const Header = ({ author, posts, filterPosts }: HeaderProps) => {
  return (
    <HeaderWrapper>
      <h1>Code Base blog</h1>
      <Collapsible.Root>
        <div className="footerWrapper">
          <div className="author">
            <img src={author?.avatar_url} alt="" />
            <div>
              <h2>{author?.name}</h2>
              <div className="tags">
                <div>
                  <GithubLogo size={16} />
                  <span>
                    <a href={author?.html_url} target="_blank" rel="noreferrer">
                      {author?.login}
                    </a>
                  </span>
                </div>
                <div>
                  <MapPin size={16} /> <span>{author?.location}</span>
                </div>
              </div>
            </div>
          </div>
          <Collapsible.Trigger>
            <MagnifyingGlass size={32} />
          </Collapsible.Trigger>
        </div>
        <Collapsible.Content>
          <SearchForm posts={posts} filterPosts={filterPosts} />
        </Collapsible.Content>
      </Collapsible.Root>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  padding: 2rem;
  margin: 0.5rem;

  & h1 {
    font-size: 5rem;
    color: ${(props) => props.theme.primary};
    text-transform: lowercase;

    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme['gray-500']};
    margin-bottom: 1rem;

    &::before {
      content: '>';
    }

    &::after {
      content: '_';
      animation: blink 2s ease 0s infinite normal forwards;
    }
  }

  & .footerWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & button {
      border: 0;
      line-height: 1;
      background-color: transparent;
      color: ${(props) => props.theme['gray-500']};
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.2s;

      &:focus,
      :hover {
        color: ${(props) => props.theme.primary};
        box-shadow: none;
        transform: scale(1.05);
      }

      &[data-state='open'] {
        color: ${(props) => props.theme.primary};

        &:focus,
        :hover {
          color: ${(props) => props.theme['primary-light']};
        }
      }
    }
  }

  & .author {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.primary};
    }

    & h2 {
      font-size: 1rem;
      color: ${(props) => props.theme.primary};
    }

    & .tags {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding-top: 0.5rem;

      & div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.75rem;
        color: ${(props) => props.theme['gray-400']};

        & a {
          text-decoration: none;
          color: inherit;
        }

        & svg {
          color: ${(props) => props.theme['gray-300']};
        }
      }
    }
  }
`
