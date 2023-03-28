import { X } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { AuthorType } from '../@types/AuthorType'
import { PostType } from '../@types/PostType'
import { GridPosts } from '../components/GridPosts'
import { Header } from '../components/Header'
// import { postsMock } from '../components/postsMock'
import { api } from '../lib/axios'

export const Home = () => {
  const [author, setAuthor] = useState<AuthorType>()
  const [posts, setPosts] = useState<PostType[]>([])
  const [filteredPosts, setFilteredPosts] = useState<PostType[]>()

  const getAuthor = async () => {
    const response = await api.get('users/thiagoaramizo')
    setAuthor(response.data as AuthorType)
  }

  const getPosts = async () => {
    const text = ''
    const repo = 'code-base-blog'
    const username = 'thiagoaramizo'
    const response = await api.get(`/search/issues`, {
      params: {
        q: `${text} repo:${username}/${repo}`,
      },
    })
    setPosts(response.data.items)
    // setPosts(postsMock)
  }

  useEffect(() => {
    getAuthor()
    getPosts()
  }, [])

  const filterPosts = (posts: PostType[]) => {
    setFilteredPosts(posts)
  }

  const handleCleanSearch = () => {
    setFilteredPosts(undefined)
  }

  return (
    <HomeWrapper>
      <Header author={author!} posts={posts} filterPosts={filterPosts} />

      {filteredPosts && (
        <SearchMenu>
          <h2>Resultado da pesquisa:</h2>
          <button type="button" onClick={handleCleanSearch}>
            <X size={20} /> Limpar pesquisa
          </button>
        </SearchMenu>
      )}
      {filteredPosts && filteredPosts.length < 1 ? (
        <SearchMenu>
          <h1>Ops! Não encontramos nada...</h1>
        </SearchMenu>
      ) : (
        ''
      )}
      <GridPosts posts={filteredPosts || posts} />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

const SearchMenu = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h2 {
    color: ${(props) => props.theme.primary};
  }

  & button {
    background-color: transparent;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${(props) => props.theme['gray-500']};
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 6px;
    cursor: pointer;
    transition: color 0.3s, border-color 0.3s;

    &:hover {
      color: ${(props) => props.theme.primary};
      border: 1px solid ${(props) => props.theme.primary};
    }
  }
`
