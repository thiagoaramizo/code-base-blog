import { MagnifyingGlass } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'
import { PostType } from '../@types/PostType'

interface SearchFormProps {
  posts: PostType[] | undefined
  filterPosts: (posts: PostType[]) => void
}

export const SearchForm = ({ posts, filterPosts }: SearchFormProps) => {
  const [search, setSearch] = useState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let filteredPosts: PostType[] = posts ? [...posts] : []
    filteredPosts = filteredPosts.filter((post) => {
      const title = post.title.search(search)
      const content = post.body.search(search)
      return title > 0 || content > 0
    })

    filterPosts(filteredPosts)
    setSearch('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <SearchFormWrapper onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Pesquise um termo"
          value={search}
          onChange={handleInputChange}
          autoFocus
        />
      </div>
      <button type="submit">
        <MagnifyingGlass size={16} weight="bold" /> Pesquisar
      </button>
    </SearchFormWrapper>
  )
}

const SearchFormWrapper = styled.form`
  width: 100%;
  padding-top: 2rem;
  animation: fade 0.2s linear 0s 1 normal forwards;
  display: flex;
  gap: 0.5rem;

  & > div {
    flex: 1;

    & input {
      width: 100%;
      padding: 1rem;
      border: 0;
      border-radius: 6px;

      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-300']};
    }
  }

  & button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 1rem;
    background-color: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme['gray-700']};
    }
  }
`
