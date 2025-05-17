import sharedConfig from "./eslint-config/shared.config.js";

export default [
  // Little Lemon Restaurant projesi
  {
    files: ["little-lemon-restaurant/**/*.{js,jsx}"],
    ...sharedConfig[0], // sharedConfig bir dizi ise, uygun şekilde yayabilirsiniz
  },

  // Ortak ayarlar veya ek kurallar eklemek isterseniz buraya ekleyebilirsiniz
];
