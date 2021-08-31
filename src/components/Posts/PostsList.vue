<template>
    <div div class="wrapper ps-5">
        <div v-if="posts">
            <!-- Post preview (List): Image on the left -->
            <article class="card card-horizontal card-hover mb-grid-gutter" style="max-width: 52rem;" v-for="post in posts" :key="post.id">
                <a :href="`?#/post/${post.id}`" class="card-img-top" :style="{ backgroundImage: `url(${post.media})`}">
                </a>
                <!-- <router-link :to="`/post/${post.id}`" :style="{ backgroundImage: `url(${require('@/assets/icon.png')})`}">
                </router-link> -->
                <!-- </div> -->
                <!-- <div class="col-md-8"> -->
                <div class="card-body">
                    <h2 class="h4 mb-4 nav-heading text-start">
                        <router-link :to="`/post/${post.id}`" class="">{{post.title}}</router-link>
                    </h2>
                    <router-link to="Account" class="d-flex meta-link fs-sm align-items-center pt-3">
                        <img class="rounded-circle" src="../../assets/icon.png" width="36" alt="Author's Name">
                        <div class="ps-2 ms-1 mt-n1">
                            by
                            <span class="fw-semibold ms-1">{{post.user.firstName}}&nbsp;{{post.user.lastName}}</span>
                        </div>
                    </router-link>
                    <div class="mt-6 text-end text-nowrap">
                        <router-link :to="`/post/${post.id}`" class="meta-link fs-xs">
                            <i class="bi bi-chat-left"></i>
                            &nbsp;{{post.comments.length}}
                        </router-link>
                        <span class="meta-divider"></span>
                        <span class="meta-link fs-xs">
                            <i class="bi bi-calendar ms-1"></i>
                                &nbsp;{{formatDate(post.publishedAT)}}
                        </span>
                    </div>
                </div>
            </article>
        </div>
        <div v-else>
            <div class="alert-warning">
                <br />
                    <p>Please click on a Post...</p>
                <br />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PostsList',
    components: {
        
    },
    data() {
        return {
            posts: null,
            currentPost: null,
            currentIndex: -1,
            title: "",
            postCreatedAt: "",
        }
    },
    methods: {
        retrievePosts() {
            // console.log('Retrieve all Post....');

            fetch("http://localhost:3000/posts/published")
                .then(async response => {
                    this.posts = await response.json();
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response statusText
                        const error = (this.posts && this.posts.message) || response.statusText;
                        return Promise.reject(error);
                    }
                    // console.log(this.posts);
                    // console.log(this.posts[2].comments[0].lenght);
                    // console.log(typeof this.posts[2].comments);
                    // console.log(typeof this.posts[0].comments);
                    // let nbOfComments = Object.keys(this.posts[0].comments).length;
                    // console.log(nbOfComments);

                })
                .catch(e => {
                    console.error("There was an error on getting all posts !", e);
                });
        },

        refreshList() {
            this.retrievPosts();
            this.currentPost = null;
            this.currentIndex = -1;
        },

        setActivePost(post, index) {
            this.currentPost = post;
            this.currentIndex = index;
        },

        removeAllTutotials() {
            console.log('This acion will removed all Post...')
        },

        formatDate(date) {
            let tempPostCreatedAt = new Date(date);
            let options = {year: "numeric", month: "long", day: "numeric"};
            let dateFormated = tempPostCreatedAt.toLocaleDateString("fr-FR", options);
            return dateFormated;
        },

        getAllComments(id) {
            // console.log(id);
    
            fetch("http://localhost:3000/comments/published/count/" + id)
                .then(async response => {

                    this.comments = await response.json();
                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response statusText
                        const error = (this.comments && this.comments.message) || response.statusText;
                        return Promise.reject(error);
                    }
                    // this.totalComments = 0;
                    console.log(this.comments.totalPublishedComments);
                    this.totalComments = this.comments.totalPublishedComments;
                    console.log('Total return ', this.totalComments);
                    return this.totalComments;
                })
                .catch(e => {
                    console.error("There was an error on getting total comments !", e);
                });
        }
    },
    mounted() {
        this.retrievePosts();
    }
}

</script>

<style scoped>
article {
    height: 18rem;
}
.fs-sm {
    font-size: 0.875rem !important;
}
.fw-semibold {
    font-weight: 600 !important;
}
.mt-n1 {
    margin-left: .25rem !important;
}
.mt-6 {
    margin-top: 3.5rem !important;
}
.fs-xs {
    font-size: 0.75rem !important;
}

@media (min-width: 500px) {
    .card-horizontal {
        flex-direction: row;
    }
    .card-horizontal .card-img-top {
        border-radius: 0;
        border-top-left-radius: calc(1rem - 1px);
        border-bottom-left-radius: calc(1rem - 1px);
    }
    .card-horizontal .card-img-top,
    .card-horizontal .card-img-bottom {
        width: 43%;
    }
}

.card-hover {
    transition: border-color .2s ease-in-out, box-shadow .2s ease-in-out;
}
.card.card-hover:hover,
.card.card-active {
    border-color: rgba(118,109,244,.35) !important;
    box-shadow: .1875rem .1875rem .625rem -0.125rem rgba(0,0,0,.09) !important;
}
.card-img,
.card-img-top,
.card-img-bottom {
    flex-shrink: 0;
    min-height: 15rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.mb-grid-gutter {
    margin-bottom: 1.875rem !important;
}
.nav-heading,
.nav-heading a,
.nav-heading.nav-heading-title {
    transition: color .25s ease-in-out,background-color .25s ease-in-out,box-shadow .25s ease-in-out,border-color .25s ease-in-out;
    color: #4a4b65;
    font-weight: 600;
    text-decoration: none;
}
.nav-heading:hover,
.nav-heading:hover .nav-heading-title,
.nav-heading a:hover,
.nav-heading a:hover .nav-heading-title,
.nav-heading .nav-heading-title:hover,
.nav-heading .nav-heading-title:hover .nav-heading-title {
    color: #766df4;
    text-decoration: none;
}
.meta-link {
    transition: color .2s ease-in-out;
    color: #797a95;
    font-size: 0.9rem !important;
    vertical-align: middle;
    text-decoration: none;
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