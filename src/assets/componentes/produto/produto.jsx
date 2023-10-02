import './produto.css';
import 'font-awesome/css/font-awesome.min.css';
import {useParams} from 'react-router-dom';
import jsonData from '../../../produtos.json';
import Navbar from './Navbar';

function Produto() {
  const {titulo} = useParams();

  const tituloDecodificado = decodeURIComponent(titulo);
  const produto = jsonData.find((p) => p.titulo === tituloDecodificado);

  return (
    <div>
      <Navbar/>
      <div className='grid'>
        <div className='album'>
          <ul className='galery'>
            {produto.fotos.map((foto, id) => (
              <div className='image' key={`${foto.url}-${id}`}>
                <img src={foto.url} alt={produto.titulo} />
              </div>
            ))}
          </ul>
        </div>
        <div className='dados-produto'>
          <div>
            <h1 className='titulo'>{produto.titulo}</h1>
            <p className='valor'>{produto.valor}</p>
            <p className='descricao'>{produto.descricao}</p>
            <p className='color'>Color</p>
            <ul className='colors'>
              {produto.cores.map((color, id) => (
                <article key={id}>
                  <input type='checkbox' value={color.nome} className='radio'style={{backgroundColor: color.codigo}}/>
                </article>
              ))}
            </ul>
            <p className='color'>Size</p>
            <div>
              <ul className='list-tamanhos'>
                {produto.tamanhos.map((tamanho, id) => (
                  <div className='card-tamanho' key={id}>
                    <p className='tamanho'>{tamanho}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div>
          <a href='/'>
            <button name='back' className='back'>
              Back
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produto;
