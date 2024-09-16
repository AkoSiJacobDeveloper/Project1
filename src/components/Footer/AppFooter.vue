<template>
    <footer class="main-container container-fluid">
        <div class="container container py-3 px-3">
            <div class="row row p-3">
                <div class="col-12 col-md-6 main-wrapper d-flex justify-content-center align-items-center">
                    <div class="d-flex flex-column align-items-center text-white wrapper-container p-2">
                        <h5 class="heading text-center fw-bold">Account</h5>
                        <div v-for="(link, index) in links" :key="index" class="m-2">
                            <p class="account-link">
                                <a :href="link.href">{{ link.text }}</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 border-start border-1">
                    <div class="d-flex flex-column align-items-center text-white wrapper-container">
                        <h5 class="heading text-center fw-bold">Support</h5>
                        <div v-for="(support, index) in supports" :key="index" class="m-2">
                            <p class="support-link">
                                <a :href="support.href">{{ support.text }}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-12 col-md-6 p-2 text-white fs-5">
                    <div class="accounts-links d-flex gap-3 justify-content-start">
                        <i v-for="(icon, index) in icons" :key="index" :class="icon.class"></i>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="footer-text d-flex justify-content-end">
                        <p class="text m-0 text-white">&copy; 2024 QuickBite. All rights reserved.</p>
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
            ],

            icons: [
                { class: 'bi bi-facebook' },
                { class: 'bi bi-instagram' },
                { class: 'bi bi-twitter' },
                { class: 'bi bi-youtube' }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
footer {
    padding: 20px 0;
    background-color:#4E5340;
    .container {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        border-radius: 5px;
        .row {
            div {
                .wrapper-container {
                    .account-link {
                        a {
                            text-decoration: none;
                            color: #fff;


                            &:hover {
                                text-decoration: underline;
                            }
                            
                        }
                    }

                    .support-link {
                        font-size: 1rem;
                        text-align: center;

                        a {
                            text-decoration: none;
                            color: #fff;

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
        hr {
            border: 1px solid #fff;
            margin-top: 0px;
        }
    }
}
</style>
