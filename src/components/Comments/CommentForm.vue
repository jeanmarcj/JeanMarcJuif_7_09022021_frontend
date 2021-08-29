<template>
      <div class="collapse ms-5" id="comment-form">
        <form action="" class="needs-validation bg-light shadow p-4 p-lg-5 mt-4">
            
            <div class="row">
                <div class="col-sm-6 mb-6">
                    <label for="com-name" class="form-label">
                    Your name
                    </label>
                    <sup class="text-danger ms-1">*</sup>
                    <input class="form-control" type="text" id="com-name" placeholder="Enter your name" required="" v-model="userName">
                    <div class="invalid-feedback">Please enter your name.</div>
                    <div class="valid-feedback">Looks good!</div>
                </div>

                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="com-email">Email address<sup class="text-danger ms-1">*</sup></label>
                    <input class="form-control" type="email" id="com-email" placeholder="Enter your email" required="" v-model="emailAddress">
                    <div class="invalid-feedback">Please provide a vild email address.</div>
                    <div class="valid-feedback">Looks good!</div>
                </div>
            </div><!-- Row -->

            <div class="row">
                <div class="mb-3">
                    <label class="form-label" for="com-text">Comment<sup class="text-danger ms-1">*</sup></label>
                    <textarea class="form-control" id="com-text" rows="6" placeholder="Write your comment here" required="" v-model="content"></textarea>
                    <div class="invalid-feedback">Please write your comment.</div>
                    <div class="valid-feedback">Looks good!</div>
                </div>
            </div><!-- Row -->
            
            <div class="row">
                <div class="col-sm-6 mb-6">
                    <label for="com-userId" class="form-label">
                    userId
                    </label>
                    <sup class="text-danger ms-1">*</sup>
                    <input class="form-control" type="number" id="com-userId" placeholder="userId" required="" v-model="userId">
                    <div class="invalid-feedback">Please enter the userId.</div>
                    <div class="valid-feedback">Looks good!</div>
                </div>

                <div class="col-sm-6 mb-3">
                    <label class="form-label" for="com-postId">PostId<sup class="text-danger ms-1">*</sup></label>
                    <input class="form-control" type="number" id="com-postId" placeholder="Enter the postId" required="" v-model="postId">
                    <div class="invalid-feedback">Please enter the postId</div>
                    <div class="valid-feedback">Looks good!</div>
                </div>
            </div><!-- Row -->

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
        userId: 0,
        postId: 0,
        message: ''
    };
  },
  mounted() {

  },
  methods:{

    saveComment() {
      // console.log('Update post processing...');
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

      console.log(requestOptions);

      fetch("http://localhost:3000/comments/", requestOptions)
        .then(async response => {
            let data = await response.json();
            this.message = 'Comment created !';
            console.log(data);
            
            // Reload the page
            this.$router.go();


        })
        .catch(e => {
          console.error("Error while created the comment !", e);
          this.message = "Error while created the comment !";
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