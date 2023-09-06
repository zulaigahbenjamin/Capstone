<template>


<div class="footer">
<footer class=" text-center text-lg-start text-white">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row my-4">
      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

        <div class="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style="width: 150px; height: 150px;">
          <img src="https://i.postimg.cc/G2xSH4q0/Urban-Be-1.jpg" height="150" alt=""
               loading="lazy" />
        </div>

        <p class="text-center">Urban Bean Bistro is the local home of the most profound international beans that are shipped from all around the world</p>

        <ul class="list-unstyled d-flex flex-row justify-content-center">
          <li>
            <a class="text-white px-2" href="#!">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a class="text-white px-2" href="#!">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a class="text-white ps-2" href="#!">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>

      </div>


      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-4">Quick Links</h5>

        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="#!" ><router-link to="/products"></router-link>Shop Our Collections</a>
          </li>
          <li class="mb-2">
            <a href="#!" >About Urban Bean Bistro</a>
          </li>
          <li class="mb-2">
            <a href="#!" >Whats in your cart</a>
          </li>
          <li class="mb-2">
            <a href="#!">Login or Register</a>
          </li>
          <li class="mb-2">
            <a href="#!">Cheack Our Insider Notes</a>
          </li>
          <li class="mb-2">
            <a href="#!">Contact</a>
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-4">Contact</h5>

        <ul class="list-unstyled">
          <li>
            <p><i class="fas fa-map-marker-alt pe-2"></i>Wentworth, Durban</p>
          </li>
          <li>
            <p><i class="fas fa-phone pe-2"></i>+27 567 8911</p>
          </li>
          <li>
            <p><i class="fas fa-envelope pe-2 mb-0"></i>urbanbeanbistro@gmail.com</p>
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    © 2023 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">Zulaigah Benjamin</a>
  </div>
  <!-- Copyright -->
</footer>
</div>
    <!-- Footer End -->
</template>

<script>
export default {

}
</script>

<style scoped>

.footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
i, p {
    color:black;
}
</style>
