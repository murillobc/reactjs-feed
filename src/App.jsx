import { Header } from './components/header';
import { Post }  from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App(){
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author="Murillo Brito" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam numquam maiores ratione nulla! Dolorum ducimus incidunt vel pariatur laudantium nam optio, officia eos quae eum! Corporis possimus non laudantium"
          />
          <Post 
            author="Isabela Honorio" 
            content="Um novo post muito legal"
          />
        </main>
      </div>
    

    </div>
  )
}




