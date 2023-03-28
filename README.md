# code-base-blog

Blog baseado em API do github. A aplicação consome a api do github buscando a `issues` deste projeto e as apresenta como postagens na aplicação.

![Captura de Tela 2023-03-28 às 00 01 15](https://user-images.githubusercontent.com/48260314/228117821-5cec529a-4100-4ab2-9cd5-8cb7130a9dde.png)

O layout utilizado utiliza foje do tradicional e utiliza `100vw` para a exibição dos posts no estilo mansory.

Considerando que a API fornece todo o conteúdo das `issues`, não é necessário requisitá-la novamente para a exibição dos posts. 
Assim, cada postagem é exibida com base no estado hidratado com a requisição `GET`inicial. O contéudo é exibido em um `dialog` Radix.


![Captura de Tela 2023-03-28 às 00 01 39](https://user-images.githubusercontent.com/48260314/228118251-dec38bab-feb1-47e6-a405-0397fad5e846.png)

A função de busca da aplicação também utiliza o estado armazenado, criando uma cópia filtrada para a exibição dos resultados.
