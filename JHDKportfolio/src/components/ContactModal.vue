<!-- ContactModal.vue -->

<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
      <button @click="closeModal" class="close-button">×</button>
      <!-- Include the ContactMeForm component -->
      <ContactMeForm @submit="handleFormSubmit" />
    </div>
  </div>
</template>

<script>
import ContactMeForm from './ContactMeForm.vue';

export default {
  props: {
    isOpen: Boolean, 
  },
  methods: {
    closeModal() {
      this.$emit('close'); // Emit the close event
    },
    handleFormSubmit(formData) {
      // Handle the form submission
      console.log('Form data submitted:', formData);
      // Close the modal after form submission
      this.closeModal();
    },
  },
  components: {
    ContactMeForm, 
  },
};
</script>

<style scoped>
/* Add your modal styles here */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
  color: white;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
}
</style>
