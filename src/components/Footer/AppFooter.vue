<template>
    <footer class="main-container container-fluid">
        <div class="container">
            <div class="row">
                <!-- Left Column for Sign In / Login -->
                <div class="col-12 col-md-6">
                    <div class="d-flex flex-column align-items-center">
                        <div v-for="(link, index) in links" :key="index" class="m-2">
                            <p class="account-link">
                                <a :href="link.href">{{ link.text }}</a>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right Column for Support Links -->
                <div class="col-12 col-md-6">
                    <div class="d-flex flex-column align-items-center">
                        <div v-for="(support, index) in supports" :key="index" class="m-2">
                            <p class="support-link">
                                <a :href="support.href">{{ support.text }}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { href: '#Signin', text: 'Sign In' },
                { href: '#Login', text: 'Login' }
            ],

            supports: [
                { href: '#Aboutus', text: 'About Us' },
                { href: '#Contactus', text: 'Contact Us' },
                { href: '#Helpcenter', text: 'FAQ' },
                { href: '#Termscondition', text: 'Terms & Conditions' },
                { href: '#Privacypolicy', text: 'Privacy Policy' }
            ]
        };
    }
};
</script>

<style scoped>
/* Add some basic styles to adjust the appearance */
footer {
    padding: 20px 0;
    background-color: #f8f9fa;
}

.account-link, .support-link {
    font-size: 1rem;
    text-align: center;
}

a {
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: underline;
}
</style>
