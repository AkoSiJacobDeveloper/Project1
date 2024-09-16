<template>
    <footer class="footer-container py-2">
        <div class="social-media-container d-flex justify-content-between p-4 text-white">
            <h6 class="heading fw-bold text-white m-0">Get connected with us on social networks: </h6>
            <div class="d-flex gap-2">
                <i v-for="(icon, index) in icons" :key="index" :class="icon.class"></i>
            </div>
        </div>
        <hr class="text-white mt-0">
        <div class="row">
            <div class="col-12 col-md-6">
                <h6 class="website-heading fw-bold">Website Name</h6>
            </div>
            <div class="col-12 col-md-6">
                <h6 class="account-heading fw-bold">Account</h6>
            </div>
            <div class="col-12 col-md-6">
                <h6 class="support-links">Support Links</h6>
            </div>
            <div class="col-12 col-md-6">
                <h6 class="contacts">Contact</h6>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                { class: 'bi bi-facebook' },
                { class: 'bi bi-instagram' },
                { class: 'bi bi-twitter' },
                { class: 'bi bi-youtube' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.footer-container {
    background-color:#4E5340;

}
</style>