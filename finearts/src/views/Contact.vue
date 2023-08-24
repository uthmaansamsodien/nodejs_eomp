<template>
  <div>
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col left">
          <div class="home">
            <div class="headskill animate__animated animate__fadeInDownBig">
              <h2 class="contact-head"><ins>CONTACT US</ins></h2>
              <p class="contact-head">LET'S CONNECT</p>
              <p class="quote_1">
                “What would life be if we had no courage to attempt anything?” -
                Vincent van Gogh
              </p>
            </div>
            <form
              class="p-5"
              action="https://formspree.io/f/xqkonyvj"
              method="POST"
            >
              <div>
                <label for="exampleFormControlInput1" class="form-label"
                  >First Name:</label
                >
                <input
                  name="firstname"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="(required)"
                  required
                  oninvalid="this.setCustomValidity('Please fill in the missing information')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label"
                  >Surname:</label
                >
                <input
                  name="surname"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1" 
                  placeholder="(required)"
                  required
                  oninvalid="this.setCustomValidity('Please fill in the missing information')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label"
                  >Email Address:</label
                >
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="(required)"
                  r
                  required
                  oninvalid="this.setCustomValidity('Please fill in the missing information')"
                  oninput="this.setCustomValidity('')"
                />
              </div>
              <label for="exampleFormControlTextarea1" class="form-label"
                >Comment or Message:</label
              >
              <textarea
                name="message"
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Type a message here..."
                rows="4"
              ></textarea>
              <br />
              <div class="middle d-flex justify-content-center">
                <button type="submit" class="btnproject">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col">
          <img class="conpic"
            src="https://i.postimg.cc/YCXHbCFD/whiteframeart62-removebg-preview.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-head {
  font-family: "Belleza", sans-serif;
  color: #435334;
}
h2 {
  font-size: 80px;
  color: #435334;
}
.left {
  padding-top: 3rem;
}
.conpic{
  height: 31rem;
  margin-top: 4rem;
}
@media screen and (max-width: 768px) {
  .contact-head{
    font-size: 2rem;
  }
  .conpic{
    height: 25rem;
    padding-bottom: 4rem;
  }
}
</style>
