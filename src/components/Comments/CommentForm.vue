<template>
      <div class="collapse ms-5" id="comment-form">
        <form class="needs-validation bg-light shadow p-4 p-lg-5 mt-4">
            <div v-if="message">
              <p class="text-danger">{{message}}</p>
            </div>
            <div class="row">
                <div class="mb-3">
                    <label class="form-label" for="com-text">Votre commentaire<sup class="text-danger ms-1">*</sup></label>
                    <textarea class="form-control" id="com-text" rows="6" placeholder="Message..." required v-model="content"></textarea>
                    <div class="invalid-feedback">Ecrivez votre commentaire.</div>
                    <div class="valid-feedback">Ok!</div>
                </div>
            </div>
            <!-- Row -->

            <button class="btn btn-primary" type="submit" @click="saveComment">Post comment</button>
        </form>
      </div>
</template>

<script>
export default {
  name: 'CommentForm',
  props: {
    
  },
  data() {
    return {
        userName: '',
        emailAddress: '',
        content: '',
        published: true,
        userId: this.$store.state.auth.user.userId,
        postId: this.$route.params.id,
        message: ''
    };
  },
  mounted() {

  },
  methods:{

    saveComment() {
      // console.log('Update post processing...');
      if (this.content === '') {
        this.message = 'Merci de saisir un commentaire ...';
        return
      }
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: this.content,
            published: this.published,
            userId: this.userId,
            postId: this.postId
          })
      };

      // console.log(requestOptions);

      fetch("http://localhost:3000/comments/", requestOptions)
        .then(async response => {
            let data = await response.json();
            this.message = 'Commentaire créé !';
            console.log(data);
            
            // Reload the page
            this.$router.go();


        })
        .catch(e => {
          console.error("Une erreur est intervenue lors de la création du commentaire !", e);
          this.message = "Une erreur est intervenue lors de la création du commentaire !";
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: #6a9bf4;
  }
  p {
    line-height: 1.5;
  }
  a {
    color: #766df4;
    transition: color .2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: #493ef0;
      text-decoration: underline;
    }
  }
  .fs-ms {
    font-size: 0.8125rem !important;
  }
  .fs-sm {
    font-size: 0.875rem !important;
  }
  .fw-medium {
    font-weight: 500 !important;
  }
  .text-muted {
    color: #9e9fb4 !important;
  }
  .btn {
    display: inline-block;
    font-weight: 500;
    line-height: 1.5;
    color: #737491;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .5625rem 1.25rem;
    font-size: 1rem;
    border-radius: .75rem;
    transition: color .25s ease-in-out,background-color .25s ease-in-out,border-color .25s ease-in-out;
    text-decoration: none;
  }
  .btn-primary {
    background-color: #766df4 !important;
    border-color: #766df4 !important;
    box-shadow: unset !important;
    color: white !important;
    text-decoration: none;
    &:hover {
      background-color: #5549f1 !important;
      border-color: #5549f1 !important;
      color: #fff !important;
      text-decoration: none;
    }
  }
  .btn-success {
    color: #000;
    background-color: #16c995;
    border-color: #16c995;
    box-shadow: unset;
    &:hover {
      background-color: #12a77b;
      border-color: #12a77b;
      color: #fff;
    }
  }
  .btn-warning {
    color: #000;
    background-color: #ffb15c;
    border-color: #ffb15c;
    box-shadow: unset;
    &:hover {
      background-color: #ff9f36;
      border-color: #ff9f36;
      color: #fff;
    }
  }
  .btn-sm {
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem;
  }
  .btn-outline-danger {
    color: #f74f78;
    border: 1px solid #f74f78;
    &:hover {
      color: #fff;
      background-color: #f74f78;
    }
  }
  .btn>[class^=bi-], .btn>[class*=" bi-"] {
    margin-top: -0.125rem;
    vertical-align: middle;
    font-size: 1rem;
  }

  .alert-danger {
      color: #f74f78;
      background-color: #fef1f4;
      border-color: #fddce4;
  }
  .alert-success {
    color: #16c995;
    background-color: #ecfbf7;
    border-color: #d0f4ea;
  }
  .alert-info {
    color: #6a9bf4;
    background-color: #f3f7fe;
    border-color: #e1ebfd;
  }

</style>