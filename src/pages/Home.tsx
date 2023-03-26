import { GithubLogo, MapPin, Users } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuthorType } from '../@types/AuthorType'
import { GridPosts } from '../components/GridPosts'
import { api } from '../lib/axios'

export const Home = () => {
  const [author, setAuthor] = useState<AuthorType>()

  const getAuthor = async () => {
    const response = await api.get('users/thiagoaramizo')
    setAuthor(response.data as AuthorType)
  }

  useEffect(() => {
    getAuthor()
  }, [])

  return (
    <HomeWrapper>
      <header>
        <img src={author?.avatar_url} alt="" />
        <div>
          <h1>{author?.name}</h1>
          <span>{author?.bio}</span>
          <div className="tags">
            <div>
              <GithubLogo size={20} /> 
              <span>
                <a href={author?.html_url} target="_blank" rel="noreferrer">
                  {author?.login}
                </a>
              </span>
            </div>
            <div>
              <Users size={20} /> <span>{author?.followers} seguidores</span>
            </div>
            <div>
              <MapPin size={20} /> <span>{author?.location}</span>
            </div>
          </div>
        </div>
      </header>
      <GridPosts />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  & > header {
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    & img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.primary};
    }

    & h1 {
      color: ${(props) => props.theme.primary};
      margin-bottom: 0.5rem;
    }

    & .tags {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding-top: 1rem;

      & div {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.875rem;
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
