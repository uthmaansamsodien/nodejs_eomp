<template>
  <div class="about">
    <h1><ins>WHAT TO KNOW ABOUT US</ins></h1>
    <p class="quote_1">“It takes a long time to become young.” -Pablo Picasso</p>
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
          <h5><ins>NICE TO MEET YOU!</ins></h5>
          <p class="infoabout">Our jouney started when the both of us found out that we had a mutual love and respect for famous artists such as; Vincnt van Gogh,
            Pablo Picasso and Michelangelo to name a few.
            The both of us then took the initiative and decided to work together and come up with ideas to how we can show our love for these famous artist.
           We then decided to buy in and sell these aesthetic masterpices created by these art icons.
          </p>
        </div>
        <div class="col d-md-block">
          <img class="aboutpic"
            src="https://i.postimg.cc/3JYS0G06/pngtree-abstract-line-painting-female-looking-up-png-image-3195196-removebg-preview.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
          <img class="aboutpic d-md-block"
            src=" https://i.postimg.cc/d0xp80cC/pngtree-two-face-line-art-woman-png-png-image-3530532-removebg-preview.png"
            alt="logo"
          />
        </div>
        <div class="col">
          <h5><ins>WHAT WE SELL:</ins></h5>
          <p class="infoabout">We sell only the finest (no pun intended) pieces of artworks which are all replicas and in mint condition. 
            We try our atmost to keep our customers happy when working with them. We can 100% assure that all of our products are authentic and been kept resevered until purchased by customers
            which is then carefully packaged up and ready for delivery (we deliver worldwide).
          All of our antics are the very best thing after the actual paintings.
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h5 {
  font-family: "Belleza", sans-serif;
}
.infoabout {
  font-family: "Belleza", sans-serif;
}
.aboutpic{ 
  margin-bottom: 2rem;
}

@media screen and (max-width: 768px) {
  .aboutpic{
    height: 10rem;   
  }
  .quote_1{
    font-size: 1rem;
  }
  h1{ 
    font-size: 3rem;
  }
}
</style>
