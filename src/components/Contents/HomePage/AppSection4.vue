<template>
    <section class="main-container">
        <div class="container">
            <h2 class="heading fw-bold text-center my-5">Join and Start Ordering</h2>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="headline-container pb-2 px-4 col-12 col-md-6">
                    <h3 class="headline-heading fw-bold">Join QuickBite Today and Satisfy Your Cravings!</h3>
                    <p class="headline-text">
                        Create your account in seconds and get access to the best meals from top restaurants. It's fast, easy, and delicious your next favorite dish is just a click away!
                    </p>
                </div>
                <div class="form-container pb-4 px-4 col-12 col-md-6">
                    <form> 
                        <input type="text" placeholder="Full Name" id="fullName" v-model="formData.fullName" required>
                        <input type="email" placeholder="example@gmail.com" id="email" v-model="formData.email" required>
                        <input type="password" placeholder="Password" id="password" v-model="formData.password" required> 
                        <input type="password" placeholder="Confirm Password" id="confirmPass" v-model="formData.confirmPass" required>
                        <input type="phone" placeholder="Phone Number" id="phoneNumber" v-model="formData.phoneNumber" required>
                        <button class="sub-btn">
                            <p class="btn-text m-0 fw-bold">Join QuickBite</p>
                        </button>
                    </form>

                    <!--
                    div v-if="submitted">
                    -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const formData = ref ({
            fullName: '',
            email: '',
            password: '',
            confirmPass: '',
            phoneNumber: '',
        });

        const submitted = ref(false);

        const submitForm = () => {
            submitted.value = true;
            console.log('Form Data:', formData.value);
        };

        return {
            formData,
            submitted,
            submitForm,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/Styles/Styles.scss';
%join-button {
    border: none;
    background: none;
    padding: 15px;
    background-color: #D68B57;
    color: #fff;
    width: 100%;
    border-radius: 5px;
}

.main-container {
    box-sizing: border-box;
    div {
        div {
            .headline-container {
                .headline-text {
                   font-family: $sub-font;
                }
            }
            .form-container {
                box-sizing: border-box;

                form {
                    input {
                        width: 100%;
                        padding: 15px;
                        border: none;
                        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                        margin-bottom: 5px;
                        border-radius: 5px;
                    }
                    .sub-btn {
                        @extend %join-button;
                    }
                }
            }
        }
    }
}


@media (min-width: 1024px) {
    .main-container {
        margin-bottom: 10%;
        div {
            div {
                .headline-container {
                    .headline-heading {
                        font-size: 2.5rem;
                    }

                    .headline-text {
                        font-size: 1.25rem;
                    }
                }

                .form-container {
                    form {
                        input {
                            padding: 25px;
                            margin-bottom: 10px;
                        }
                        .sub-btn {
                            @extend %join-button;
                            padding: 25px;
                            font-size: 1.5rem;
                        }
                    }
                }
            }
        }
    }
}
</style>