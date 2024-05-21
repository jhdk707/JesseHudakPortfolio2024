<template>
  <div v-if="isOpen" class="modal-overlay fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
    <div class="modal bg-white p-5 rounded-lg shadow-lg max-w-lg mx-auto">
      <button @click="closeModal" class="close-button absolute top-3 right-5 text-red-700 hover:text-gray-900">
        <span class="text-2xl">×</span>
      </button>

      <!-- Contact Form -->
      <form @submit.prevent="submitForm" ref="formRef" class="space-y-6">
        <div>
          <label for="user_name" class="block text-sm font-medium text-gray-700">Name</label>
          <input v-model="formData.user_name" type="text" id="user_name" name="user_name" class="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
        </div>
        <div>
          <label for="user_email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="formData.user_email" type="email" id="user_email" name="user_email" class="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea v-model="formData.message" id="message" name="message" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
        </div>
        <button type="submit" :disabled="isSubmitting" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Send
        </button>
        <span v-if="isSubmitting" class="text-center text-blue-500">Sending...</span>
      </form>
    </div>
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
  props: {
    isOpen: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    async submitForm() {
      const form = this.$refs.formRef;
      if (form.checkValidity()) {
        this.isSubmitting = true;
        try {
          await emailjs.sendForm(serviceId, templateId, form, userId);
          console.log('Email sent successfully!');
          this.formData = { user_name: '', user_email: '', message: '' };
        } catch (error) {
          console.error('Failed to send email:', error);
        } finally {
          this.isSubmitting = false;
          this.closeModal();
        }
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.modal {
  position: relative;
  padding: 20px;
  background: white;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  z-index: 1000;
}
.close-button {
  cursor: pointer;
  background: none;
  border: none;
}
</style>
