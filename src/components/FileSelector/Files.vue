<template>
  <div>
    <div v-bind:key="file.id" v-for="file in files">
      <File
        v-bind:file="file"
        v-bind:selected="selectedFiles.some((f) => f.id === file.id)"
        v-on:select-file="$emit('select-file', file)"
        v-on:unselect-file="$emit('unselect-file', file)"
      />
    </div>
  </div>
</template>

<script>
import File from './File';
export default {
  name: 'Files',
  components: { File },
  props: ['files', 'selectedFiles'],
};
</script>
