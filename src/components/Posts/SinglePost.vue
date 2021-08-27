<template>
  <div class="pb-4">
    <h1 class="text-start ms-5">{{postTitle}}</h1>
    <!-- Post author -->
    <div class="row position-relative g-0 align-items-center border-top border-bottom mb-4 ms-5">
      <div class="col-md-6 py-3 pe-md-3">
        <div class="d-flex align-items-center justify-content-center justify-content-md-start">
          <div class="d-flex align-items-center me-grid-gutter">
            <a href="" class="d-block">
              <img class="rounded-circle me-1" src="../../assets/icon.png" alt="Author's image" width="64">
            </a>
            <div class="ps-2">
              <h6 class="nav-heading mb-1 text-start">
                <a href="">{{authorFirstName}}&nbsp;{{authorLastName}}</a>
              </h6>
              <div class="text-nowrap d-flex">
                <div class="meta-link fs-xs">
                    <i class="bi bi-calendar ms-1"></i>
                    &nbsp;{{postCreatedAt}}
                </div>
                <span class="meta-divider"></span>
                <div class="meta-link fs-xs">
                    <i class="bi bi-chat-left"></i>
                    &nbsp;3
                </div>
                <span class="meta-divider"></span>
                <router-link to="/blogedit" class="meta-link" v-if="authorIsAdmin" title="Edit this post">
                  <i class="bi bi-pen-fill text-success"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Post content -->
    <div class="text-start ms-5">
      {{postContent}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
  data() {
    return {
      postTitle: null,
      authorFirstName: null,
      authorLastName: null,
      authorIsAdmin: false,
      postCreatedAt: null,
      postContent: null,
    };
  },
  created() {
    // Get request using fetch with error handling
    fetch("http://localhost:3000/posts/2")
    .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      this.authorFirstName = data.user.firstName;
      this.authorLastName = data.user.lastName;
      this.authorIsAdmin = data.user.isAdmin;

      this.postTitle = data.title;
      this.postContent = data.content;
      let tempPostCreatedAt = new Date(data.createdAt);
      let options = {year: "numeric", month: "long", day: "numeric"};
      // deliveryDate.toLocaleDateString("fr-FR", options);
      this.postCreatedAt = tempPostCreatedAt.toLocaleDateString("fr-FR", options);
    })
    .catch(err => {
      this.errorMessage = err;
      console.error("There was an error !", err);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .me-grid-gutter {
    margin-right: 1.875rem !important;
  }
  .nav-heading, .nav-heading a,
  .nav-heading .nav-heading-title {
    transition: color .25s ease-in-out,background-color .25s ease-in-out,box-shadow .25s ease-in-out,border-color .25s ease-in-out;
    color: #4a4b65;
    font-weight: 600;
    text-decoration: none;
  }
  .meta-link {
    transition: color .2s ease-in-out;
    color: #797a95;
    vertical-align: middle;
    text-decoration: none;
  }
  .fs-xs {
    font-size: 0.75rem !important;
  }
  .meta-link:hover {
    color: #4d4e64;
    text-decoration: none;
  }
  .meta-divider {
      display: inline-block;
      width: 1px;
      height: 1rem;
      margin: 0 .625rem;
      background-color: #dfdfec;
      vertical-align: middle;
  }

</style>
