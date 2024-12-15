const { EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "colorpicker",
  requires: [],
  execute(client, int) {
    const hex = int.options.getString("hex").replace("#", "");
    // validate if inputted hex is valid
    const hexCodeRegex = /^([A-Fa-f0-9]{6})$/.test(hex);

    if (!hex || !hexCodeRegex) {
      int.reply(
        "Please provide a valid hex color code. (e.g. `fecdac` or `#fecdac` - 6 characters long)"
      );
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle("Color Picker")
      .setDescription(`Color for hex: \`#${hex}\``)
      .setImage(`https://singlecolorimage.com/get/${hex.toLowerCase()}/250x250`)
      .setFooter({ text: "Powered by singlecolorimage.com" })
      .setColor(hex);

    int.reply({ embeds: [embed] });
  },
};
