import './listagemProdutos.css';
import {Link} from 'react-router-dom';
import jsonData from '../../../produtos.json';

function GridProdutos(){ 
    const produtos = jsonData;
    return (
        <div className='wrapper'>
          <ul className='card-showing'>
            <p className='showing'>Showing {produtos.length} products</p>
          </ul>
          <ul className='card-grid'>
            {produtos.map((produto, key) => (
              <li key={key}>
                <article className='card' key={produto.titulo}>
                  <Link
                    to={`/produto/${encodeURIComponent(produto.titulo)}`} style={{textDecoration: 'none'}}>
                    <div className='card-image'>
                      {produto.fotos.map((foto, index) => {
                        if (foto.capa) {
                          return (
                            <img src={foto.url} alt={produto.titulo} key={index}/>
                          );
                        }
                      })}
                    </div>
                    <div className='card-content'>
                      <p className='card-name'>{produto.titulo}</p>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
    ) 
} 
export default GridProdutos