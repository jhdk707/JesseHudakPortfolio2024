

<template>
  <div class="emailform max-w-lg mx-auto">
    <form @submit="submitForm" ref="formRef">
      <div class="relative z-0 w-full mb-5 group">
        <label for="user_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Name
        </label>
        <input
          v-model="formData.user_name"
          type="text"
          id="user_name"
          name="user_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
        />
      </div>

      <div class="relative z-0 w-full mb-5 group">
        <label for="user_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Email
        </label>
        <input
          v-model="formData.user_email"
          type="email"
          id="user_email"
          name="user_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
        />
      </div>

      <div class="relative z-0 w-full mb-5 group">
        <label for="message" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Message
        </label>
        <textarea
          v-model="formData.message"
          id="message"
          name="message"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send
      </button>


      <span v-if="isSubmitting">Sending...</span>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

export default {
  data() {
    return {
      formData: {
        user_name: '',
        user_email: '',
        message: '',
      },
      isSubmitting: false,
    };
  },
  methods: {
async submitForm(event) {
  event.preventDefault();

  const form = this.$refs.formRef;

  if (form.checkValidity()) {
    this.isSubmitting = true;

    try {
      await this.sendEmail(form);
      console.log('Email sent successfully!');
      
      // Reset the form fields
      this.formData.user_name = '';
      this.formData.user_email = '';
      this.formData.message = '';
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      this.isSubmitting = false;
    }
  } else {
    console.warn('Form is not valid');
  }
},
    sendEmail(form) {
      return emailjs
        .sendForm(serviceId, templateId, form, userId)
        .then((result) => {
          console.log('SUCCESS!', result.text);
        })
        .catch((error) => {
          console.log('FAILED...', error.text);
          throw error; // Re-throw the error for further handling
        });
    },
  },
};
</script>

<style scoped>
/* Add any additional styling or overrides here */
.emailform {
  width: 600px;
  padding-top: 2em;
  color: aliceblue;
}

.div.modal-overlay {
  max-width: 600px;
  max-height: 600px;
}

input,
textarea {
  color: white; /* Set the text color to white */
}

@media (max-width: 640px) {
.emailform {
 max-width: 250px;
}
}


</style>
