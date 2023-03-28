import styled from 'styled-components'
import { XBlock, XMasonry } from 'react-xmasonry'

import { PostType } from '../@types/PostType'
import { Post } from './Post'

interface GridPostsProps {
  posts: PostType[]
}

export const GridPosts = ({ posts }: GridPostsProps) => {
  function getRandomIntInclusive() {
    const min = Math.ceil(1)
    const max = Math.floor(4)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <GridPostsWrapper>
      <XMasonry>
        {posts.map((post) => {
          return (
            <XBlock key={post.id} width={getRandomIntInclusive()}>
              <Post post={post} />
            </XBlock>
          )
        })}
      </XMasonry>
    </GridPostsWrapper>
  )
}

const GridPostsWrapper = styled.main`
  width: 100%;
  @keyframes comeIn {
    0% {
      transform: scale(0);
    }
    75% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }

  & .xmasonry .xblock {
    animation: comeIn ease 0.5s;
    animation-iteration-count: 1;
    transition: left 0.3s ease, top 0.3s ease;
  }
`
