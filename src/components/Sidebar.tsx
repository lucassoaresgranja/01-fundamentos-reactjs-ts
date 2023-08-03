import { PencilLine } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/lucassoaresgranja.png"/>
        <strong>Lucas Soares Granja</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar se Perfil
        </a>
      </footer>
    </aside>
  );
}
