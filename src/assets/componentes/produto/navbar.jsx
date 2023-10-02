function Navbar(){
    return (
        <div className='topnav'>
        <div>
          <a className='home'>Lifters Shop</a>
          <a className='itens'>Shop</a>
          <a className='itens'>Stories</a>
          <a className='itens'>About</a>
          <form className='search'>
            <button>
              <i className='fa fa-search'></i>
            </button>
            <input type='text' placeholder=' Search' name='search' />
          </form>
        </div>

        <div className='end'>
          <form className='search bag'>
            <button>
              <i className='fa fa-shopping-bag'></i>
            </button>
          </form>
          <a className='itens login'>Login</a>
        </div>
      </div>
    )
  }
  
  export default Navbar