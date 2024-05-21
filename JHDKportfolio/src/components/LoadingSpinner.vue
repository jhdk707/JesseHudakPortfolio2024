<template>
    <div class="loading-container" v-if="loading">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
export default {
  name: 'LoadingSpinner'
}
  </script>
  
  <style scoped>
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(42, 41, 41, 0.8);
    z-index: 9999;
  }
  
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #09f;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  