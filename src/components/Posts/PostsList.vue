<template>
    <div div class="wrapper ps-5">
        
        <!-- Post preview (List): Image on the left -->
        <article class="card card-horizontal card-hover mb-grid-gutter" style="max-width: 52rem;">
            <!-- <div class="col-md-3"> -->
                <a href="" class="card-img-top" :style="{ backgroundImage: `url(${require('@/assets/icon.png')})`}">
                    <!-- <img src="../../assets/icon.png" class="img-fluid rounded-start" alt="image"> -->
                </a>
            <!-- </div> -->
            <!-- <div class="col-md-8"> -->
                <div class="card-body">
                    <!-- <a href="" class="meta-link fs-sm mb-2 text-start">Category</a> -->
                    <h2 class="h4 mb-4 nav-heading text-start">
                        <a href="">Payments made easy. How new Tech will affect E-Commerce industry ?</a>
                    </h2>
                    <a href="" class="d-flex meta-link fs-sm align-items-center pt-3">
                        <img class="rounded-circle" src="../../assets/icon.png" width="36" alt="Author's Name">
                        <div class="ps-2 ms-1 mt-n1">
                            by
                            <span class="fw-semibold ms-1">Author's name</span>
                        </div>
                    </a>
                    <div class="mt-6 text-end text-nowrap">
                        <a href="" class="meta-link fs-xs">
                            <i class="bi bi-chat-left"></i>
                            &nbsp;4
                        </a>
                        <span class="meta-divider"></span>
                        <a href="" class="meta-link fs-xs">
                            <i class="bi bi-calendar ms-1"></i>
                            &nbsp;12 Août
                        </a>

                    </div>
                <!-- </div> -->
            </div>
            <!-- <a class="card-img-top" href="#" style="background-image: url(../../assets/icon.png);"></a> -->
            
        </article>
    </div>
</template>

<script>
export default {
    name: 'PostsList'
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