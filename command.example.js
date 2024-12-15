const { EmbedBuilder } = require("discord.js");
const config = require("../../config.js");

module.exports = {
  name: "example",
  requires: [],
  execute(client, int) {
    
    const embed = new EmbedBuilder()
      .setTitle("Hi, this is an example!")
      .setDescription(`I am A user installable app made by snow.ded`)
      .setColor(
        config.embeds && config.embeds.pingEmbedColour
          ? config.embeds.pingEmbedColour
          : "#74b9ff"
      );
    
    int.reply({
      embeds: [embed],
    });
  },
};
