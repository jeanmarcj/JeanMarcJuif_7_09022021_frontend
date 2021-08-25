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