<template>
	<div v-for="message in messages">
	  <Message :message="message"></Message>
	</div>
</template>

<script>

import Message from "./Message.vue";

export default {
  components: {Message},
  props: {
    messages: {
      type: Array
    }
  }
}
</script>

<style>
</style>