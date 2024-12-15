const path = require("path");
const fs = require("fs");
const { AttachmentBuilder, Message } = require("discord.js");
const snoww = '1092374628556615690';

module.exports = {
  name: "export",
  requires: [],

  async execute(client, int) {
    if (!message.author.id === snoww) {
        return
    }
    const inputPath = int.options.getString("path");

    const filePath = path.join(process.cwd(), inputPath);

    if (!fs.existsSync(filePath))
      return int.reply({
        content: "This file doesn't exist",
      });

    const attachment = new AttachmentBuilder()
      .setFile(filePath)
      .setName(path.basename(filePath));

    await int.deferReply();

    int.editReply({
      content: `<https://github.com/Ninja-5000/NinjaHelper/blob/main/${
        inputPath.startsWith("/") ? inputPath.replace("/", "") : inputPath
      }>`,
      files: [attachment],
    });
  },
};
