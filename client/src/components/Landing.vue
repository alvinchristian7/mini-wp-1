<template>
  <div>
    <!-- Full Page Intro -->
    <div class="view">
      <video
        class="video-intro"
        poster="https://mdbootstrap.com/img/Photos/Others/background.jpg"
        playsinline
        autoplay
        muted
        loop
      >
        <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4">
      </video>
      <!-- Mask & flexbox options-->
      <div class="mask rgba-gradient align-items-center">
        <!-- Content -->
        <div class="container px-md-3 px-sm-0">
          <!--Grid row-->
          <div class="row wow fadeIn">
            <!--Grid column-->
            <div class="col-md-12 mb-4 white-text text-center wow fadeIn">
              <h3 class="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">Mini WP</h3>
              <hr class="hr-light my-4 w-75">
              <h2
                class="subtext-header mt-2 mb-4"
                style="font-family: 'Indie Flower', cursive;"
              >Blogging means sharing, and sharing means caring, right?</h2>
              <a
                href="#"
                class="btn btn-lg btn-info btn-rounded my-auto"
                data-toggle="modal"
                data-target="#modalLRForm"
                style="font-family: 'Eater', cursive;"
              >
                <i class="fas fa-address-card mr-3"></i>YES !!!
              </a>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
        <!-- Content -->
      </div>
      <!-- Mask & flexbox options-->
    </div>
    <!-- <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">Mini WP</h1>
        <p class="lead mb-0" style="font-family: 'Indie Flower', cursive;">Blogging means sharing, and sharing means caring, right?</p>
        <a
        href="#"
        class="btn btn-lg btn-outline-default"
        data-toggle="modal"
        data-target="#modalLRForm"
        style="font-family: 'Eater', cursive;"
      ><i class="fas fa-address-card mr-1"></i>YES !!!</a>
      </div>
    </div>
    </div>-->
    <!--Modal: Login / Register Form-->
    <div
      class="modal fade"
      id="modalLRForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog cascading-modal" role="document">
        <!--Content-->
        <div class="modal-content">
          <!--Modal cascading tabs-->
          <div class="modal-c-tabs">
            <!-- Nav tabs -->
            <ul id="authTab" class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#panel7" role="tab">
                  <i class="fas fa-user mr-1"></i>
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel8" role="tab">
                  <i class="fas fa-user-plus mr-1"></i>
                  Register
                </a>
              </li>
            </ul>

            <!-- Tab panels -->
            <div class="tab-content">
              <!--Panel 7-->
              <div class="tab-pane fade in show active" id="panel7" role="tabpanel">
                <!--Body-->
                <div class="modal-body mb-1">
                  <form @submit.prevent="login">
                    <div class="md-form form-sm mb-5">
                      <i class="fas fa-envelope prefix"></i>
                      <input
                        v-model="inputLogin.email"
                        type="email"
                        id="modalLRInput10"
                        class="form-control form-control-sm validate"
                      >
                      <label data-error="wrong" data-success="right" for="modalLRInput10">Your email</label>
                    </div>
                    <div class="md-form form-sm mb-4">
                      <i class="fas fa-lock prefix"></i>
                      <input
                        v-model="inputLogin.password"
                        type="password"
                        id="modalLRInput11"
                        class="form-control form-control-sm validate"
                      >
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput11"
                      >Your password</label>
                    </div>
                    <div class="row justify-content-around align-items-center mt-2">
                      <button class="btn btn-info">
                        Log in
                        <i class="fas fa-sign-in ml-1"></i>
                      </button>
                      <div id="google-signin-button"></div>
                    </div>
                  </form>
                </div>
                <!--Footer-->
                <div class="modal-footer">
                  <div class="options text-center text-md-right mt-1">
                    <p>
                      Not a member?
                      <a
                        onclick="$('#authTab li:last-child a').tab('show')"
                        href="#"
                        class="blue-text"
                      >Sign Up</a>
                    </p>
                    <!-- <p>
                          Forgot
                          <a href="#" class="blue-text">Password?</a>
                    </p>-->
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-info waves-effect ml-auto"
                    data-dismiss="modal"
                  >Close</button>
                </div>
              </div>
              <!--/.Panel 7-->

              <!--Panel 8-->
              <div class="tab-pane fade" id="panel8" role="tabpanel">
                <!--Body-->
                <div class="modal-body">
                  <form @submit.prevent="register" enctype="multipart/form-data">
                    <div class="md-form form-sm mb-5">
                      <i class="fas fa-user prefix"></i>
                      <input
                        v-model="inputRegister.name"
                        type="text"
                        id="modalLRInput21"
                        class="form-control validate"
                      >
                      <label data-error="wrong" data-success="right" for="modalLRInput21">Your name</label>
                    </div>
                    <div class="md-form form-sm mb-5">
                      <i class="fas fa-envelope prefix"></i>
                      <input
                        v-model="inputRegister.email"
                        type="email"
                        id="modalLRInput22"
                        class="form-control form-control-sm validate"
                      >
                      <label data-error="wrong" data-success="right" for="modalLRInput22">Your email</label>
                    </div>
                    <div class="md-form form-sm mb-5">
                      <i class="fas fa-lock prefix"></i>
                      <input
                        v-model="inputRegister.password"
                        type="password"
                        id="modalLRInput23"
                        class="form-control form-control-sm validate"
                      >
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput23"
                      >Your password</label>
                    </div>
                    <div class="md-form form-sm mb-5">
                      <i class="fas fa-lock prefix"></i>
                      <input
                        v-model="inputRegister.repeatPass"
                        type="password"
                        id="modalLRInput24"
                        class="form-control form-control-sm validate"
                      >
                      <label
                        data-error="wrong"
                        data-success="right"
                        for="modalLRInput24"
                      >Repeat password</label>
                    </div>
                    <div class="custom-file">
                      <input
                        @change="selectFile"
                        type="file"
                        class="custom-file-input"
                        id="modalLRInput25"
                      >
                      <label class="custom-file-label" for="modalLRInput25">Choose file</label>
                    </div>
                    <div class="text-center form-sm mt-2">
                      <button class="btn btn-info">
                        Sign up
                        <i class="fas fa-sign-in ml-1"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <!--Footer-->
                <div class="modal-footer">
                  <div class="options text-right">
                    <p class="pt-1">
                      Already have an account?
                      <a
                        onclick="$('#authTab li:first-child a').tab('show')"
                        href="#"
                        class="blue-text"
                      >Log In</a>
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-info waves-effect ml-auto"
                    data-dismiss="modal"
                  >Close</button>
                </div>
              </div>
              <!--/.Panel 8-->
            </div>
          </div>
        </div>
        <!--/.Content-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios.js";
export default {
  data() {
    return {
      inputLogin: {
        email: "",
        password: ""
      },
      inputRegister: {
        name: "",
        email: "",
        password: "",
        repeatPass: "",
        image: ""
      }
    };
  },
  mounted() {
    gapi.signin2.render("google-signin-button", {
      onsuccess: this.onSignIn
    });
  },
  methods: {
    emptyOnSuccess() {
      this.inputLogin.email = "";
      this.inputLogin.password = "";
      this.inputRegister.name = "";
      this.inputRegister.email = "";
      this.inputRegister.password = "";
      this.inputRegister.repeatPass = "";
      this.inputRegister.image = "";
    },
    emptyOnFail() {
      this.inputLogin.password = "";
      this.inputRegister.password = "";
      this.inputRegister.repeatPass = "";
    },
    selectFile() {
      if (event.target.files[0])
        this.inputRegister.image = event.target.files[0];
    },
    register() {
      if (this.inputRegister.password !== this.inputRegister.repeatPass) {
        Swal.fire("Error", "Password doesn't match", "error");
      } else {
        let formData = new FormData();
        formData.append("name", this.inputRegister.name);
        formData.append("email", this.inputRegister.email);
        formData.append("password", this.inputRegister.password);
        formData.append("image_url", this.inputRegister.image);
        axios({
          method: "post",
          url: `/users/register`,
          enctype: "multipart/formdata",
          data: formData
        })
          .then(({ data }) => {
            this.emptyOnSuccess();
            Swal.fire({
              type: "success",
              title: "Registered!",
              showConfirmButton: false,
              timer: 2000
            });
          })
          .catch(({ response }) => {
            this.emptyOnFail();
            Swal.fire("Error", response.data.message, "error");
          });
      }
    },
    login() {
      axios({
        method: "post",
        url: `/users/login`,
        data: this.inputLogin
      })
        .then(({ data }) => {
          this.emptyOnSuccess();
          $("#modalLRForm").modal("hide");
          localStorage.setItem("access-token", data["access-token"]);
          this.$emit("loginSuccess");
          Swal.fire({
            type: "success",
            title: "Logged In!",
            showConfirmButton: false,
            timer: 2000
          });
        })
        .catch(({ response }) => {
          this.emptyOnFail();
          Swal.fire("Error", response.data.message, "error");
        });
    },
    onSignIn(googleUser) {
      console.log("halo");

      let id_token = googleUser.getAuthResponse().id_token;
      axios({
        method: "POST",
        url: `/users/signingoogle`,
        data: {
          id_token
        }
      })
        .then(({ data }) => {
          if (data.newPass) {
            Swal.fire(
              "Signed In via Google!",
              `You Have Been Logged In Successfully. Hurry up change your password now, your password is ${
                data.newPass
              }`,
              "info"
            );
          }
          else {
            Swal.fire(
              "Signed In via Google!",
              `You Have Been Logged In Successfully`,
              "success"
            );
          }
          localStorage.setItem("signedInVia", true);
          localStorage.setItem("access-token", data["access-token"]);
          this.$emit('loginSuccess')
          this.emptyOnSuccess();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
html,
body,
header,
.view {
  height: 100%;
}

@media (max-width: 740px) {
  html,
  body,
  header,
  .view {
    height: 100vh;
  }
}

.top-nav-collapse {
  background-color: #563e91 !important;
}

.navbar:not(.top-nav-collapse) {
  background: transparent !important;
}

@media (max-width: 991px) {
  .navbar:not(.top-nav-collapse) {
    background: #563e91 !important;
  }
}

.rgba-gradient {
  background: -moz-linear-gradient(
    45deg,
    rgba(213, 15, 61, 0.6),
    rgba(13, 17, 198, 0.69) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(213, 15, 61, 0.6),
    rgba(13, 17, 198, 0.69) 100%
  );
  background: linear-gradient(
    to 45deg,
    rgba(213, 15, 61, 0.6),
    rgba(13, 17, 198, 0.69) 100%
  );
}
</style>
