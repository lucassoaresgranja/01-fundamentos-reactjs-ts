import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucassoaresgranja.png",
      name: "Lucas Soares Granja",
      role: "Desenvolvedor de Software",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },

      {
        type: "paragraph",
        content:
          "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio",
      },
      {
        type: "paragraph",
        content: "criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        type: "link",
        content: " devonlane.design",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayke Brito",
      role: "Desenvolvedor de Software",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋" },

      {
        type: "paragraph",
        content:
          "Teste",
      },
      {
        type: "paragraph",
        content: "Teste 54545",
      },
      {
        type: "link",
        content: "teste link",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
