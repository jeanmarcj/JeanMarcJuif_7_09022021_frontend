# Groupomania expression app

GitHub repository : [lien](https://github.com/jeanmarcj/JeanMarcJuif_7_09022021_frontend.git)


## Project setup to lunch the front-end
```
npm install
```

Warning : do not update node-sass@6.0.1 with node v14.17.5.
node-sass@6.0.1 is for node v16


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


L'application front écoute le port 8080.

### Pour se connecter à l'application :

Compte utilisateur :
Prénom : user
Nom : user
Mail : user@exemple.com
MDP : user

Compte administrateur :

Prénom : Admin
Nom : Admin
Mail : admin@exemple.com
MDP : admin

============================================================================

### Fonctionnalités développées pour cette application
    
Un utilisateur peut :
* Créer un Post (message)
* Créer un commentaire
* Uploader une image
* Modifier/effacer ses propres messages (Post)
* Modifier/effacer ses propres commentaires
* Charger un ficher image

Un administrateur peut :
* Au login, un menu spécial administrateur se débloque (les liens ne sont pas encore opérationnels)
* Modifier tous les Posts (messages)
* Effacer tous les posts (messages)
   
    

Lors de la suppression d'un message, tous les commentaires rattachés sont supprimés;
L'image est supprimée du serveur.

============================================================================
### Pour lancer le serveur - dossier backend du projet :

Dans le dossier backend :

Pour installer les dépendances du projet :

```
npm install
```

Pour lancer le serveur sur le port 3000 :

```
npm run start
```

Consulter le README.md dans le répertoire 'backend' du projet