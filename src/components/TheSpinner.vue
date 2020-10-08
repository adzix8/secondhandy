<template>
  <div class="spinner__wrap">
    <div class="spinner">
      <div></div><div></div><div><div></div></div><div><div></div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSpinner',
};
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }
  .spinner div { box-sizing: border-box!important }
  .spinner > div {
    position: absolute;
    width: 138px;
    height: 138px;
    top: 31px;
    left: 31px;
    border-radius: 50%;
    border: 10px solid #000;
    border-color: #f68903 transparent #f68903 transparent;
    animation: spin 1.2658227848101264s linear infinite;
  }

  .spinner > div:nth-child(2), .spinner > div:nth-child(4) {
    width: 114px;
    height: 114px;
    top: 43px;
    left: 43px;
    animation: spin 1.2658227848101264s linear infinite reverse;
  }
  .spinner > div:nth-child(2) {
    border-color: transparent #fbbd72 transparent #fbbd72
  }
  .spinner > div:nth-child(3) { border-color: transparent }
  .spinner > div:nth-child(3) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
  .spinner > div:nth-child(3) div:before, .spinner > div:nth-child(3) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: -10px;
    left: 54px;
    background: #f68903;
    border-radius: 50%;
    box-shadow: 0 128px 0 0 #f68903;
  }
  .spinner > div:nth-child(3) div:after {
    left: -10px;
    top: 54px;
    box-shadow: 128px 0 0 0 #f68903;
  }

  .spinner > div:nth-child(4) { border-color: transparent; }
  .spinner > div:nth-child(4) div {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
  }
  .spinner > div:nth-child(4) div:before, .spinner > div:nth-child(4) div:after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: -10px;
    left: 42px;
    background: #fbbd72;
    border-radius: 50%;
    box-shadow: 0 104px 0 0 #fbbd72;
  }
  .spinner > div:nth-child(4) div:after {
    left: -10px;
    top: 42px;
    box-shadow: 104px 0 0 0 #fbbd72;
  }
  .spinner__wrap {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .spinner {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .spinner div { box-sizing: content-box; }
</style>
