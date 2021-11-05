<template>
  <div class="folder-container" v-on:click="$emit('open-folder')">
    <i class="fa fa-folder" />
    <span class="ml-2"> {{ folder.name }} </span>
    <i class="fa fa-angle-right f-2x ml-auto" />
  </div>
</template>

<script>
export default {
  name: 'Folder',
  props: ['folder'],
};
</script>

<style scoped>
.folder-container {
  display: flex;
  padding: 5px 10px;
  align-items: center;
}
.folder-container:hover {
  background-color: rgba(0, 0, 0, 0.2);
  user-select: none;
}
</style>
