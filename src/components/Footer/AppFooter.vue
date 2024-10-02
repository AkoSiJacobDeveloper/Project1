<template>
    <footer class="footer-main-container pt-2">
        <div class="container-fluid">
            <div class="social-media-container d-flex justify-content-between flex-wrap p-md-2 mb-1 text-white">
                <p class="heading fw-bold text-white m-0 mt-1">Get connected with us on social networks: </p>
                <div class="d-flex gap-2 gap-lg-3 mt-lg-1 icon-container">
                    <i v-for="(icon, index) in icons" :key="index" :class="icon.class"></i>
                </div>
            </div>
            <hr class="text-white mt-0">
            <div class="row d-flex justify-content-center p-3">
                <div class="col-12 col-md-6 footer-container">
                    <h6 class="website-heading fw-bold">Website Name</h6>
                    <hr class="style-line">
                    <p class="website-name">QuickBite</p>
                </div>
                <div class="col-12 col-md-6 footer-container">
                    <h6 class="account-heading fw-bold">Account</h6>
                    <hr class="style-line">
                    <p v-for="(account, index) in accounts" :key="index" class="links">
                        <a :href="account.href">{{account.text}}</a>
                    </p>
                </div>
                <div class="col-12 col-md-6 footer-container">
                    <h6 class="support-links fw-bold">Support Links</h6>
                    <hr class="style-line">
                    <p v-for="(support, index) in supports" :key="index" class="links">
                        <a :href="support.href">{{support.text}}</a>
                    </p>
                </div>
                <div class="col-12 col-md-6 footer-container">
                    <h6 class="contacts fw-bold">Contact</h6>
                    <hr class="style-line">
                    <p v-for="(contact, index) in contacts" :key="index" class="links">
                        <a :href="contact.href">{{contact.text}}</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="copyright p-2 p-md-3 p-xl-4 text-center">
            <p class="text m-0 text-white">&copy; 2024 QuickBite. All rights reserved.</p>
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
            ],

            accounts: [
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

            contacts: [
                { href: '#place', text: 'New York, NY 10012, US' },
                { href: '#email', text: 'quickbite@gmail.com' },
                { href: '#call', text: '01 234 567 88' },
                { href: '#landline', text: '01 234 567 89' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.footer-main-container {
    box-sizing: border-box;
    background-color:#4E5340;
    color: #fff;
    div {
        .social-media-container {
            .heading {
                font-size: 0.7em;
            }
        }
        div {
            .footer-container{
                width: 150px;

                .style-line {
                    width: 20%;
                    margin-top: 0px;
                    color: #fff;
                }
                a {
                    color: #fff;
                    text-decoration: none;

                    &:hover {
                        text-decoration: underline;
                    }
                } 
            }
        }
    }
    .copyright {
        background-color:#393c2f;
    }
}

@media (min-width: 320px) {
    .footer-main-container {
        div {
            div {
                .footer-container {
                    h6 {
                        font-size: 0.9em;
                    }

                    .website-name {
                        font-size: 0.7em;
                    }

                    .links {
                        a {
                            font-size: 0.7em;
                        }
                    }
                }
            }
        }
    }
    .copyright {
        .text {
            font-size: 0.7em;
        }
    }
}

@media (min-width: 425px) {
    .footer-main-container {
        div {
            div {
                .footer-container {
                    h6 {
                        font-size: 0.9em;
                    }

                    .website-name {
                        font-size: 0.7em;
                    }

                    .links {
                        a {
                            font-size: 0.7em;
                        }
    
                    }       

                    i {
                        font-size: 0.7em;
                    }
                }
            }
        }
    }
    .copyright {
        .text {
            font-size: 0.7em;
        }
    }
}

@media (min-width: 768px) {
    .footer-main-container {
        div {
            .social-media-container {
                .heading {
                    font-size: 1em;
                }

                i {
                    font-size: 1em;
                }
            }
            div {
                .footer-container {
                    a {
                        font-size: 0.9em;
                    }
                }
            }
        }
    }
    .copyright {
        .text {
            font-size: 0.7em;
        }
    }
}

@media (min-width: 1024px) {
    .footer-main-container {
        div {
            .social-media-container {
                .heading {
                    font-size: 1em;
                }

                i {
                    font-size: 1em;
                }
            }
            div {
                .footer-container {

                    .style-line {
                        width: 30%;
                        margin-top: 0px;
                        color: #fff;
                    }

                    h6 {
                        font-size: 1em;
                    }

                    .website-name {
                        font-size: 1em;
                    }

                    .links {
                        a {
                            font-size: 1em;
                        }
                    }
                }
            }
        }
    }
    .copyright {
        .text {
            font-size: 1em;
        }
    }
}


</style>