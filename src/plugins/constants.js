// plugins/Constants.js
let Constants = {
  //  install
  install(Vue) {
    //  create global Constants
    Vue.Constants = {
      API_URL: "https://localhost:5001/api/",
      BUCKET: "s3-custom-images",
      VERSION: 1.5,
      EXT_LINK: "https://link.tld",
    };
  },
};

export default Constants;
