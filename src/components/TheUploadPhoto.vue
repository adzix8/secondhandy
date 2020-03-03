<template>
  <div>
    <h3 class="group__title">Dodaj zdjęcie profilowe</h3>
    <div class="form-group file-area" v-if="!hasUpload">
      <input type="file" name="image" id="image" @change="fileSelected">
      <div class="file-dummy">
        <i class="fas fa-upload fa-2x"></i>
      </div>
      <div class="file__help-tip">
        <i class="fas fa-info-circle margin-right"></i>
        Zdjęcie powinno być kwadratowe, format 1x1.
      </div>
    </div>
    <div class="photo__wrapper" v-if="hasUpload">
      <img :src="image" alt="" class="photo__element">
      <span class="photo__close" @click="removePhoto">
        <i class="fas fa-times"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheUploadPhoto',
  data() {
    return {
      image: '',
      hasUpload: false,
    };
  },
  methods: {
    fileSelected(event) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.image = fileReader.result;
      });
      fileReader.readAsDataURL(event.target.files[0]);
      this.hasUpload = true;
    },
    removePhoto() {
      this.image = '';
      this.hasUpload = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars";

// TODO do zrobienia zmiana poniższego cssa na scss
// do tego wyedytować wygląd input file
.file-area {
  width: 100%;
  position: relative;
  input[type=file] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    cursor: pointer;
  }

  .file-dummy {
    width: 100%;
    padding: 30px;
    background: rgba(255,255,255,0.1);
    border: 2px dashed $color-primary;
    text-align: center;
    transition: background 0.3s ease-in-out;
    .fa-upload {
      color: $color-primary;
      -webkit-transition: color .3s ease-in-out;
      -moz-transition: color .3s ease-in-out;
      -ms-transition: color .3s ease-in-out;
      -o-transition: color .3s ease-in-out;
      transition: color .3s ease-in-out;
    }
  }

  &:hover .file-dummy {
    background: $color-primary-light;
    .fa-upload {
      color: $color-secondary;
    }
  }
}
.upload__label {
}
.file__help-tip {
  font-size: .9rem;
  margin: .5rem 0;
}
.photo__wrapper{
  border: 1px solid #808080;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media #{$desktop} {
    margin: 0;
  }
}
.photo__element {
  width: auto;
  height: 100%;
  display: block;
  margin: 0 auto;
}
.photo__close {
  color: $color-secondary;
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  padding: .5rem;
  position: absolute;
  top: 0;
  right: .7rem;
  cursor: pointer;
  -webkit-transition: color .3s ease-in-out;
  -moz-transition: color .3s ease-in-out;
  -ms-transition: color .3s ease-in-out;
  -o-transition: color .3s ease-in-out;
  transition: color .3s ease-in-out;
  &:hover {
    color: $color-primary;
  }
}
</style>
