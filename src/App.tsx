import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './component/Header'
import { Banner } from './component/Banner'
import { Movies } from './types/Movies'
import { Footer } from './component/Footer'

function App() {
  type movie = {
    avatar: String
    titulo: String
  }
  const [num, useNum] = useState(0);
  const [mov, setMov] = useState<Movies[]>([]);

  let list = ['carlos', 'luis', 'doni'];

  const loadMov = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMov(json);
        console.log(json);
      })
  }

  const loadMov2 = async () => {
    let res = await fetch('https://api.b7web.com.br/cinema/');
    let json = await res.json();
    setMov(json);
  }
  useEffect(() => {


  }), [];
  loadMov();

  return (
    <>
      <Header />
      <Banner />
      <section>
        <div className='container background__color'>
          <h1 className='title__section'>Alguns dos Nossos Filmes</h1>
          <div className='content__filme'>
            {mov.map((item, index) => (
              <div className='card__filme'>
                <img src={item.avatar} alt="" />
                <p>{item.titulo}</p>
              </div>
            ))}

          </div>
        </div>

      </section>
      <Footer />
    </>
  );

}

export default App
