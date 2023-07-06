import React from 'react';
import men from './men.jpg';
import women from './women.jpg';
import kids from './kids.jpg';
import wallet from './wallets.jpg';
import watch from'./wa.jpg';
import sunglass from './sunglasses.jpg'
const Home = () => {
  return (
    <div>
    <div className='container-breakpoint xs'>
      <h2 id='part3'>CLOTHING COLLECTION</h2>
      </div>
      <div>
        <a href='https://www.darveys.com/catalog/men/clothing'><img id='clothing'  src={men} alt=''></img></a>
        <a href='https://www.darveys.com/catalog/women/clothing'><img  id='clothing'  src={women} alt=''></img></a>
        <a href='https://www.darveys.com/catalog/kids/clothing'><img  id='clothing' src={kids} alt=''></img></a>
      </div>
      <div className='container-breakpoint xs'>
      <h2 id='part3'>ACCESSORIES</h2>
      </div>
      <br></br>
      <div>
        <h6>MEN</h6>
      
        <h6>____</h6>
        <div class="card-group">
  <a href='https://www.darveys.com/catalog/men/accessories/category-type/sunglasses'><div id='card1'class="card">
    <img src={sunglass} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h1 id='card-title' >SUNGLASSES</h1>
    </div>
   
  </div></a>
  <div id='card1' class="card">
<img src={watch} class="card-img-top" alt="..."></img> 
    <div class="card-body">
    <a href='https://www.darveys.com/catalog/kids/clothing'>
        <h1  id='card-title'>WATCH</h1></a>
    </div>
   
  </div>
  <div id='card1' class="card">
    <a href='https://www.darveys.com/catalog/men/accessories/category-type/wallets'><img src={wallet} class="card-img-top" alt="..."></img></a>
    <div class="card-body">
      <h1 id='card-title' >WALLET</h1>
    </div>
    
  </div>
</div>
      </div>
      <footer id='footer'>Copyright @ 2023 Darveys.com</footer>
    
    </div>
  );
};

export default Home;

