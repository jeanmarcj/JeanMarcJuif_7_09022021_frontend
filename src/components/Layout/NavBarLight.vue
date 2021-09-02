<template>
  <div class="navbarlight">
    <nav class="navbar navbar-expand-lg navbar-light navbar-shadow">
      <div class="container">
        <router-link to="/bloglist" class="navbar-brand">
          <img class="d-none d-lg-block mt-2 me-4" src="../../assets/icon-left-font.png" alt="Groupomania logo" width="153">
          <img class="d-lg-none" src="../../assets/icon.png" alt="Groupomania icon" width="58">
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/bloglist" class="nav-link active">
                <i class="bi bi-newspaper"></i>
                Messages
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
                <span v-if="$store.state.auth.user">
                  <i class="bi bi-person fs-xl"></i>
                  {{$store.state.auth.user.firstName}}
                </span>
                <span v-else>

                </span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <span v-if="isLoggedIn">
                    <a @click="logout" class="dropdown-item text-danger">
                      <i class="bi bi-box-arrow-left"></i>
                      Quitter
                      </a>
                  </span>
                  <span v-else>
                    <router-link to="SignUp" class="dropdown-item">
                      <i class="bi bi-person-plus"></i>
                      S'enregistrer
                    </router-link>
                    <router-link to="/" class="dropdown-item">
                      <i class="bi bi-box-arrow-right"></i>
                      Se connecter
                    </router-link>
                  </span>
                    <router-link to="/account" class="dropdown-item">
                      <i class="bi bi-pen"></i>
                      Votre compte
                    </router-link>
                </li>
                <div v-if="$store.state.auth.user">
                  <div v-if="$store.state.auth.user.isAdmin">
                      <li><hr class="dropdown-divider"></li>
                      <li class="dropdown-item disabled"><strong>Administration</strong></li>
                      <li><a class="dropdown-item disabled" href="#">Utilisateurs</a></li>
                      <li><a class="dropdown-item disabled" href="#">Messages</a></li>
                      <li><a class="dropdown-item disabled" href="#">Commentaires</a></li>
                  </div>
                </div>
                <div v-else></div>
              </ul><!-- dropdown menu -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBarLight',
  computed: {
    isLoggedIn: function(){
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut')
      this.$router.push('/')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  cursor: pointer;
}
.navbar-light {
    background-color: rgba(255,255,255,1) !important;
}
.navbar-shadow {
  box-shadow: 0 .125rem .625rem -0.1875rem rgba(0,0,0,.1);
}
.navbar-collapse {
  flex-grow: 0;
}

.text-muted,
.disabled {
    color: #9e9fb4 !important;
}
.active {
  font-weight: bold !important;
}
.nav-link {
  display: inline-block;
  transition: color .25s ease-in-out,background-color .25s ease-in-out,box-shadow .25s ease-in-out,border-color .25s ease-in-out;
  color: #5a5b75;
  font-weight: 500;
  text-decoration: none;
}
.dropdown-item:hover, .nav-link:hover {
    color: #766df4 !important;
    text-decoration: none;
}
.dropdown-item:visited, .navbar-light.navbar-nav.nav-link:visited {
    color: #5a5b75 !important;
    text-decoration: none;
}
.dropdown-item.active, .dropdown-item:active {
    color: #766df4 !important;
    text-decoration: none;
    background-color: rgb(184, 180, 180);
}
.text-danger {
  color: #f74f78 !important;
}

.bi.bi-info {
  margin-right: -.3rem;
}

</style>
