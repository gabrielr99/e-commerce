<template>
  <header>
    <div class="nav-container">
      <div class="nav">
        <div class="nav-top-margin nav-left">
          <img id="nav-logo-ml" src="../images/logo-mercadolivre.jpeg" alt="logo mercado livre">
        </div>
        <div class="nav-top-margin nav-center">
          <form class="form-search" action="">
            <input type="text" id="nav-search" placeholder="Buscar produtos, marcas e muito mais...">
            <button id="nav-search-button" type="submit">
              <div class="container-lupa-search">
                <img id="lupa-search" src="../images/lupa-arredondada.jpeg" alt="">
              </div>
            </button>
          </form>
        </div>
        <div class="nav-top-margin nav-right">
          <img id="img-meli" src="../images/mercadolivre-meli+.jpeg" alt="meli +">
        </div>
      </div>
      <div class="nav">
        <div class="nav-top-margin nav-left">
        </div>
        <div class="nav-top-margin nav-center nav-center-bottom">
          <a href="" class="categorias">
            <p>Categorias</p>
            <p class="circun">
            </p>
          </a>
          <p>Ofertas</p>
          <p>Cupons</p>
          <p>Supermercado</p>
          <p>Moda</p>
          <p>Mercado Play</p>
          <p>Vender</p>
          <p>Contato</p>
        </div>
        <div class="nav-top-margin nav-right">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
  header {
    background-color: #FFE600;
    color: white;
    display: flex;
    justify-content: center;
    height: 100px;
    width: 100%;
  }

  .nav-container {
    height: 100%;
    width: 70%;
    padding: 8px;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
  }

  .nav-top-margin {
    margin: 0 20px 0 20px;
  }

  .nav-left {
    width: 15%;
    height: 100%;
  }

  .nav-center {
    height: 100%;
    width: 60%;
  }

  .nav-right {
    width: 35%;
    height: 100%;
    padding-left: 7%;
  }

  .nav-center-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(65, 65, 65);
  }

  .nav-center-bottom p {
    padding-top: 12px;
    font-size: 12px;
  } 

  .form-search {
    background-color: white;
    width: 100%;
    min-width: 580px;
    height: 98%;
    padding: 3px;
    display: flex;
    border-radius: 2px;
    box-shadow: 1px 1px 1px rgb(202, 202, 202);
  }

  #nav-search {
    width: 100%;
    height: 100%;
    border: none;
    padding: 5px 12px 5px 10px;
  }

  #nav-search::placeholder {
    color: rgb(161, 161, 161);
    font-size: 15px;
    
  }

  #nav-search-button {
    background-color: white;
    height: 100%;
    width: 8%;
    padding: 7px 0;
  }

  .container-lupa-search {
    border-left: 1px solid rgb(233, 233, 233);
    padding: 3px;
    padding-left: 5px;
    width: 100%;
    height: 100%;
  }

  #lupa-search {
    margin-left: 12px;
    width: 44%;
    height: 94%;
  }

  #nav-logo-ml {
    min-width: 145px;
  }

  #img-meli {
    width: 100%;
    min-width: 270px;
    height: 97%;
  }

  .categorias {
    display: flex;
    align-items: center;
  }

  .circun {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: relative;
}

.circun::after {
  border-style: solid;
  border-width: 0 1.5px 1.5px 0;
  content: "";
  display: inline-block;
  height: 2px;
  transform: rotate(45deg);
  width: 2px;
  color: rgba(0, 0, 0, .3);
  margin-left: 3px;
  bottom: -3px;
  right: 2px;
  position: absolute;
  padding: 2px;
  left: -10px; /* Para alinhar com a seta */
}
</style>