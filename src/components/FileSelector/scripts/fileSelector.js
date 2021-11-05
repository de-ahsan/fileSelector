import Folders from '../Folders';
import Files from '../Files';
export default {
  name: 'FileSelector',
  components: { Folders, Files },
  props: ['folderStructure', 'currSelectedFiles'],

  data: () => {
    return {
      currentFolder: null,
      folderHash: {},
      selectedFiles: [],
      fileSelectorOpened: false,
    };
  },

  methods: {
    close() {
      this.selectedFiles = [];
      this.currentFolder = this.folderStructure;
      this.fileSelectorOpened = false;
    },

    goBack() {
      this.currentFolder = this.getFolder(this.currentFolder.parentFolderId);
    },

    getFolder(folderId) {
      const key = folderId || 'root';
      return this.folderHash[key];
    },

    openFolder(currFolder) {
      this.currentFolder = currFolder;
    },

    populateFolderHash(folder) {
      if (!folder) return;

      if (folder.id) this.folderHash[folder.id] = folder;
      else this.folderHash['root'] = folder;

      folder.folders.forEach((folder) => {
        this.populateFolderHash(folder);
      });
    },

    selectFile(file) {
      this.selectedFiles = [...this.selectedFiles, file];
    },

    submitSelectedFiles() {
      this.fileSelectorOpened = false;
      this.$emit('on-select', this.selectedFiles);
    },

    toggleFileSelector() {
      this.fileSelectorOpened = !this.fileSelectorOpened;

      if (this.fileSelectorOpened && this.currSelectedFiles?.length) {
        this.selectedFiles = this.currSelectedFiles;
        this.currentFolder = this.getFolder(
          this.selectedFiles[0].parentFolderId
        );
      }
    },

    unselectFile(file) {
      this.selectedFiles = this.selectedFiles.filter((f) => f.id !== file.id);
    },
  },

  created() {
    this.populateFolderHash(this.folderStructure);
    this.currentFolder = this.folderStructure;
    this.selectedFiles = this.currSelectedFiles || [];
  },
};
