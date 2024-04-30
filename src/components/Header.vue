<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" active-class="active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/BlackJack" active-class="active">BlackJack</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/About" active-class="active">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
</script>
<style scoped>
.navbar-nav {
    align-items: center;
}

/* Custom styles for active link */
.nav-link.active {
    color: blue;
    /* Change this to your desired active color */
    font-weight: bold;
    /* Optionally, you can make the active link bold */
}
</style>
