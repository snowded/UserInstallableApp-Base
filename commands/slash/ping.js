const { EmbedBuilder } = require("discord.js");
const config = require("../../config.js");

module.exports = {
  name: "ping",
  requires: [],
  execute(client, int) {
    const embed = new EmbedBuilder()
      .setTitle("Pong!")
      .setDescription(`${client.ws.ping}ms`)
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
