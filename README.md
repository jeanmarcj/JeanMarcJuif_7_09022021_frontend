# Groupomania expression app - frontend

GitHub repository : [lien](https://github.com/jeanmarcj/JeanMarcJuif_7_09022021_frontend.git)

Vue CLI Plugins :
babel - router - vuex - eslint - sass
----------------------------------------------------------------
Boostrap V5 with node

Warning : do not update node-sass@6.0.1 with node v14.17.5.
node-sass@6.0.1 is for node v16

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

============================================================================
TODO:
Lorsqu'un post est modifé pour sa publication, mettre à jour le champ publishedAT.

Routes dynamiques :
<a :href="`/post/${post.id}`">{{post.title}}</a>
<router-link :to="`/post/${post.id}`" class="">{{post.title}}</router-link>
Et récupérer l'id dans un script :
this.getPost(this.$route.params.id);

Router :

{
    path: "/story/:id",
    name: "post",
    component: () => import("@/pages/Post.vue")
}

Text interpolation : {{avatar}}

Binding to attributs :
Inside a component
<img v-bind:src="avatar" height="300" width="300" />

<div v-if="isSuccess">
    We dit it successful !
</div>

// Cette div sera masquée
<div v-if="!isSuccess">
    We did not do it. Not successful.
</div> 
<script>
    data {
        avatar: "http://...",
        isSuccess: true,
    }
</script>

Compter les éléments d'un objet JS:
countObj = Object.keys(object).length;

Components :

  .btn-primary {
    background-color: #766df4 !important;
    border-color: #766df4 !important;
    box-shadow: unset !important;
    color: white !important;
    &:hover {
      background-color: #5549f1 !important;
      border-color: #5549f1 !important;
      color: #fff !important;
    }
  }

  For auth
  router.beforeEach((to, from, next) => {
    const loggedInUserDetail = !!sessionStorage.getItem("chatbot_token");
    if (to.matched.some(m => m.meta.authGuard) && !loggedInUserDetail)
        next({ name: "login" });
    else next();
});