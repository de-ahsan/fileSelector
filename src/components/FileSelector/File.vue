<template>
  <div class="file-container" v-on:click="onCheckboxClick">
    <i class="fa fa-file" />
    <span class="ml-2"> {{ file.name }} </span>
    <i class="fa fa-check-circle fa-lg ml-auto icon-blue" v-if="selected" />
  </div>
</template>

<script>
export default {
  name: 'File',
  props: ['file', 'selected'],
  methods: {
    onCheckboxClick() {
      if (!this.selected) this.$emit('select-file');
      else this.$emit('unselect-file');
    },
  },
};
</script>

<style scoped>
.file-container {
  display: flex;
  padding: 5px 10px;
  align-items: center;
}
.file-container:hover {
  background-color: rgba(0, 0, 0, 0.2);
  user-select: none;
}
.icon-blue {
  color: blue;
}
</style>
