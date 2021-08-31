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
    name: 'UsersList',
    components: {
        
    },
}

</script>