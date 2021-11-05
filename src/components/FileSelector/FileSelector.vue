<template>
  <div>
    <button class="btn btn-primary" v-on:click="toggleFileSelector">
      Select file
    </button>

    <div
      class="files-info-container"
      v-if="fileSelectorOpened && currentFolder"
    >
      <div class="d-flex align-items-center pb-2 pl-2">
        <div
          class="d-flex align-items-center"
          v-if="currentFolder.hasOwnProperty('parentFolderId')"
        >
          <i class="fa fa-arrow-left fa-2x" v-on:click="goBack" />
          <span class="ml-2">{{ currentFolder.name }}</span>
        </div>
        <i class="fa fa-close fa-lg ml-auto" v-on:click="close" />
      </div>
      <div>
        <div class="file-list-container">
          <Folders
            v-bind:folders="currentFolder.folders"
            v-on:open-folder="openFolder"
          />
          <Files
            v-on:select-file="selectFile"
            v-on:unselect-file="unselectFile"
            v-bind:files="currentFolder.files"
            v-bind:selectedFiles="selectedFiles"
          />
        </div>
        <div class="d-flex">
          <button
            class="btn btn-primary btn-sm ml-auto mt-2"
            v-on:click="submitSelectedFiles"
          >
            Select {{ this.selectedFiles.length || '' }} Files
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import script from './scripts/fileSelector';

export default script;
</script>

<style scoped>
.files-info-container {
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 30%;
  padding: 10px;
  margin: 20px;
  position: absolute;
  background-color: white;
}

.file-list-container {
  overflow: scroll;
  height: 200px;
}
</style>
