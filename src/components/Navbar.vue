<template>
  <div>
    <!--Navigation Bar-->
    <nav
      class="navbar navbar-expand-sm navbar-light justify-content-between border"
    >
    <!--Navbar Logo-->
      <a class="navbar-brand" href="#"
        ><div class="d-flex align-items-center justify-content-center">
          <img src="../assets/LOGO.png" alt="Vue" /></div
      ></a>
      <!--Navbar Search-->
      <div
        class="form-group d-flex align-items-center justify-content-center position-relative w-25"
        style="height: 45px;"
      >
        <input type="text" class="form-control" placeholder="Arama Yap" />
        <span>
          <img class="material-icons" src="../assets/navbar-icons/ara.png" alt="">
        </span>
      </div>
      <!--Sign-up button-->
      <button class="btn btn-success border-0 px-5" style="background: #41cb83; height: 45px; white-space: nowrap;" >
        Üye Ol
      </button>
      <!--Social Media Icons-->
      <div class="d-flex social-media-icons">
        <a href="https://www.facebook.com/izmirbuyuksehirbel/?locale=tr_TR"
          ><img src="../assets/navbar-icons/facebook.png" alt=""
        /></a>

        <a href="https://www.instagram.com/izmirbuyuksehirbelediyesi/"
          ><img src="../assets/navbar-icons/instagram.png" alt=""
        /></a>
        <a href="https://twitter.com/izmirbld"
          ><img src="../assets/navbar-icons/twitter.png" alt=""
        /></a>
        <a href="https://www.linkedin.com/company/i%CC%87zmir-b%C3%BCy%C3%BCk%C5%9Fehir-belediyesi/?originalSubdomain=tr"
          ><img src="../assets/navbar-icons/linkedin.png" alt=""
        /></a>
        <a href="https://www.youtube.com/channel/UC1FsIvLFw-ntqAHWm8nEi5A"
          ><img src="../assets/navbar-icons/youtube.png" alt=""
        /></a>
      </div>
      <!--Notification Icons-->
      <div class="d-flex navbar-icons me-5">
        <a href="/dashboard"
          ><img src="../assets/navbar-icons/bildirimler-icon.png " class="pe-2" alt=""
        /></a>
        <a href="/dashboard"
          ><img src="../assets/navbar-icons/menu.png" alt=""
        /></a>
      </div>
    </nav>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style scoped>
.navbar-brand {
  width: var(--sidebar-width);
}
a{
  margin-right: 15px;
}
.material-icons{
  margin-left: -45px;
}
.form-control{
  background-color: #F7F7F7;
  padding-left: 24px;
  border-radius: 10px;
}
/* Responsive Navbar */
@media (max-width: 1020px){
  .form-control{
    display: none;
  }
  a{
  margin-right: 2px;
}
nav{
  justify-content: flex-start !important;
}
}
@media (max-width: 1020px) and (min-width: 576px){
nav{
  justify-content: flex-start !important;
}
}
</style>
