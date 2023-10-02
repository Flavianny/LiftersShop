import GridProdutos from './GridProdutos';
import Barra from './barra';
import './listagemProdutos.css';

function ListagemProdutos() {
 
  const categorias = [
    'Jackets',
    'Fleece',
    'Sweatshirts & Hoodies',
    'Sweaters',
    'Shirts',
    'T-Shirts',
    'Pants & Jeans',
  ];
  const colors1 = ['#df9167', '#7b61ff', '#219653', '#2f80ed', '#eb5757'];
  const colors2 = ['#56ccf2', '#4f4f4f', '#bb6bd9', '#f2f2f2', '#6fcf97'];

  return (
    <div>
      <Barra />
      <div className='grade'>
        <div className='filters'>
          <div className='filters-titulo'>
            <p className='filters-name'>Filters</p>
            <a className='link'>Clear filters</a>
          </div>
          <p className='categories'>Categories</p>
          <div className='checkbox-list'>
            {categorias.map((categoria, id) => (
              <article className='checkbox-opcoes' key={id}>
                <input type='checkbox' value={categoria} className='checkbox' />
                <p className='checkbox-titulo'>{categoria}</p>
              </article>
            ))}
          </div>
          <p className='categories'>Color</p>
          <ul className='colors'>
            {colors1.map((color, id) => (
              <article key={id}>
                <input type='checkbox' value={color} className='radio' style={{backgroundColor: color}}
                />
              </article>
            ))}
          </ul>
          <ul className='colors'>
            {colors2.map((color,id) => (
              <article key={id}>
                <input type='checkbox' value={color} className='radio' style={{backgroundColor: color}}/>
              </article>
            ))}
          </ul>
        </div>
        <GridProdutos/>
      </div>
    </div>
  );
}

export default ListagemProdutos;
