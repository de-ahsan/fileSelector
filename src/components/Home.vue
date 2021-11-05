<template>
  <div class="container">
    <FileSelector
      v-bind:key="!!folderStructure"
      v-bind:folderStructure="folderStructure"
      v-bind:currSelectedFiles="selectedFiles"
      v-on:on-select="onSelect"
    />

    <div>
      <b>File selected</b>
      <div v-bind:key="file.id" v-for="file in selectedFiles">
        <p>{{ file.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import FileSelector from './FileSelector/FileSelector';
import { getFolderStructure } from '../apis/';
export default {
  name: 'Home',
  components: { FileSelector },
  data: () => {
    return {
      folderStructure: null,
      selectedFiles: null,
    };
  },
  created() {
    getFolderStructure()
      .then(({ data }) => {
        this.folderStructure = data;
      })
      .catch((err) => console.log('Error', err.response || err));
  },
  methods: {
    onSelect(selectedFiles) {
      this.selectedFiles = selectedFiles;
    },
  },
};
</script>
