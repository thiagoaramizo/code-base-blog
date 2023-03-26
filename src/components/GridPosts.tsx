import styled from 'styled-components'
import { XMasonry, XBlock } from 'react-xmasonry'

export const GridPosts = () => {
  const posts = [
    { id: 1 },
    { id: 2 },
    {
      id: 3,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in lobortis ante, nec bibendum nisi. Donec ultricies luctus lorem, vitae dignissim orci ornare non. Suspendisse vulputate magna vitae libero scelerisque posuere lacinia in nibh. Morbi quam lectus, sollicitudin in auctor vitae, cursus ac risus. Praesent vel eleifend felis. Donec auctor neque suscipit pharetra pulvinar. Nam nec rhoncus orci.',
    },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
  ]

  function getRandomIntInclusive() {
    const min = Math.ceil(1)
    const max = Math.floor(2)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <GridPostsWrapper>
      <XMasonry>
        {posts.map((post) => (
          <XBlock key={post.id} width={getRandomIntInclusive()}>
            <article className="card">
              <h3>{post.id}</h3>
              {post.content ? <p>{post.content}</p> : ''}
            </article>
          </XBlock>
        ))}
      </XMasonry>
    </GridPostsWrapper>
  )
}

const GridPostsWrapper = styled.main`
  width: 100%;

  & .card {
    background-color: ${(props) => props.theme['gray-600']};
    border-radius: 6px;
    padding: 2rem;
    line-height: 1.3;
    margin: 0.5rem;
    min-height: 5rem;

    & h3 {
      line-height: 1.2rem;
      margin-bottom: 1rem;
    }

    & p {
      font-size: 0.8rem;
      line-height: 1.5;
    }
  }

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
