<template>
  <div>
    <div v-bind:key="folder.id" v-for="folder in folders">
      <Folder
        v-bind:folder="folder"
        v-on:open-folder="$emit('open-folder', folder)"
      />
    </div>
  </div>
</template>

<script>
import Folder from './Folder';

export default {
  name: 'Folders',
  components: {
    Folder,
  },
  props: ['folders'],
};
</script>
