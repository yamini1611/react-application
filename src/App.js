import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import card4 from './card4.jpg';

import './App.css';

function App() {
  return (

    <div >
      <h1>DARVEYS</h1>
      <a id='a' href='https://www.darveys.com/'>   <i class="fa-regular fa-user"></i> Login / Signup</a>
      <a href='https://www.darveys.com/wishlist'><i id='fa' class="fa-sharp fa-regular fa-heart"></i></a>
      <i id='fa1' class="fa-solid fa-bag-shopping"></i>
      <header id='head'>
        <nav id='nav' class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/catalog/men" >Men</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="https://www.darveys.com/catalog/women">Women</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/catalog/all/kids" >Kids</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/designers/#" >Designers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/catalog/all/clothing" >Clothing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/catalog/all/bags#" >bags</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/catalog/all/footwears#" >Footwear</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/catalog/all/accessories#" >Accessories</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/catalog/all/innerwear#" >Intimates</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="https://www.darveys.com/catalog/all#" >Offers</a>
                </li>
              </ul>
              <form class="d-flex">
                <input id='in' class="form-control me-2" type="search" placeholder="     Search  Product " aria-label="Search"></input><i id='search' class="fa-solid fa-magnifying-glass"></i><button class="btn btn-outline-success" type="submit">Search</button>

              </form>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-ride="carousel" data-interval="300">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row g-0">
                <div class="col-sm-4 col-md-7">
                  <img id='image' src={img1} class="d-block w-100" height='500px' width='100px' alt=""></img>
                </div>
                <div  id='con1' class="col-6 col-md-4">  <h1>TODAY'S FLASH SALE</h1>
                <h1>TORY BURCH</h1>
                <h1>WOMEN'S ACCESSORIES UPTO 40% OFF</h1>  
                <buton id='button' type='button'>SHOP NOW</buton>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row g-0">
                <div  class="col-sm-6 col-md-8">     
                 <img src={img2} class="d-block w-100" height='600px' width='100px' alt=""></img>
                </div>
                <div  id='con2' class="col-6 col-md-3"><h2 id='cap'>DEAL OF THE DAY</h2>
                <h3>PHILLIPE MODEL</h3>
                <h4>MRP:₹55,000</h4>
                <h2>DEAL PRICE:₹35,950</h2>  
                <buton  id='button' type='button'>SHOP NOW</buton></div>
             
              </div>
            </div>
            <div class="carousel-item">
              <div class="row g-0">
                <div class="col-sm-6 col-md-8">  
                    <img src={img3} class="d-block w-100" height='500px' width='100px' alt=""></img>
                </div>
                <div id='con3' class="col-6 col-md-4"><h2 id='cap'>MICHAEL KNORS </h2>
                <h4>Sale</h4>
                <p>_____________________________________________</p>
                <h2> UPTO 60% OFF</h2>  
                <buton  id='button' type='button'>SHOP NOW</buton></div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class='container-breakpoint xs'>
          <h2 ID='part2'>DESGINERS OF THE WEEK</h2>
        </div>
        <div class="card-group">
  <div id='card1' class="card">
    <img   src={card1} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">DIESEL</h5>
      <p class="card-text">Undeniably Stylish</p>
    </div>
   
  </div>
  <div  id='card1' class="card">
    <img   src={card2} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">MICHAEL KNORS</h5>
      <p class="card-text">Richly Detailed</p>
    </div>
   
  </div>
  <div id='card1' class="card">
    <img   src={card3} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">TORY BURCH</h5>
      <p class="card-text">Suave Styles</p>
    </div>
   
  </div>
  <div  id='card1' class="card">
    <img  src={card4} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">ALEXANDAR MCQUEEN</h5>
      <p class="card-text">Iconic Updates</p>
    </div>
    
  </div>
</div>
      </div>
      <footer id='footer'>Copyright @ 2023 Darveys.com</footer>
    </div>




  );
}

export default App;
