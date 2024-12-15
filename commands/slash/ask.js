const { EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "ask",
  requires: ["naviac"],

  async execute(client, int) {
    const prompt = int.options.getString("prompt");
    const ephemeral = int.options.getBoolean("ephemeral");

    const embed = new EmbedBuilder();

    await int.deferReply({
      ephemeral,
    });

    try {
      const res = await axios.put(
        "https://naviac-api.onrender.com/generate-response",
        {
          text: prompt,
        },
        {
          auth: {
            username: client.config.naviac.username,
            password: client.config.naviac.token,
          },
        }
      );

      let response = res.data.response;

      console.log(
        `Request from [${int.user.tag}]:\n{\n    prompt: "${prompt}",\n    response: "${response}"\n}`
      );
      const embed = new EmbedBuilder()
        .setTitle("N.A.V.I.A.C's Response")
        .addFields({ name: "Prompt:", value: `> ${prompt}` })
        .setColor(
          client.config.embeds && client.config.embeds.naviacEmbedColour
            ? client.config.embeds.naviacEmbedColour
            : "#fecdac"
        )
        .setFooter({
          iconURL: int.user.displayAvatarURL(), // user pfp
          text: `Requested by ${int.user.tag} • A mini API interface for NAVIAC`,
        });

      const regex =
        /\[Image generated with the help of Pollinations AI's services\]\((.*?)\)/;
      const match = response.match(regex);

      try {
        if (response.length > 1024) {
          response = response.substr(0, 1021) + "...";
          var shortened = true;
        }

        if (match) {
          embed.setImage(match[1]);
          embed.addFields({
            name: "Response:",
            value:
              "`[If there is no image, please wait as discord caches/loads it]`",
          });

          if (response.replace(regex, "").length > 0) {
            if (shortened)
              embed.addFields(
                { name: "Response:", value: response.replace(regex, "") },
                {
                  name: "Note:",
                  value:
                    "> Use the official [N.A.V.I.A.C. Discord bot](https://discord.com/oauth2/authorize?client_id=975365560298795008) to view the full response and get an enhanced experience.",
                  inline: false,
                }
              );
            else
              embed.addFields({
                name: "Response:",
                value: response.replace(regex, ""),
              });
          }
        } else {
          embed.setThumbnail(
            "https://cdn.discordapp.com/avatars/975365560298795008/632ac9e6edf7517fa9378454c8600bdf.png?size=4096"
          );
          if (shortened)
            embed.addFields(
              { name: "Response:", value: response },
              {
                name: "Note:",
                value:
                  "> Use the official [N.A.V.I.A.C. Discord bot](https://discord.com/oauth2/authorize?client_id=975365560298795008) to view the full response and get an enhanced experience.",
                inline: false,
              }
            );
          else embed.addFields({ name: "Response:", value: response });
        }
      } catch (e) {
        console.log(e);
      }

      await int.editReply({
        embeds: [embed],
      });
    } catch (e) {
      try {
        if (e?.response?.status && e?.response?.status == 429) {
          int.editReply({
            content: "`You're being rate-limited. Please try again later.`",
          });
        } else if (e?.response?.status && e?.response?.status == 500) {
          int.editReply({
            content:
              "`The N.A.V.I.A.C. API is currently facing an internal server error [500]`\n`Please try again later.`",
          });
        } else {
          int.editReply({
            content: "uhh something went wrong...",
          });
        }

        console.log(
          `\x1b[31mThe N.A.V.I.A.C. API request failed with status ${e.response.status} (${e.response.statusText})\x1b[0m`
        );
      } catch (e) {
        try {
          console.log(
            `\x1b[31mError running N.A.V.I.A.C. request: ${e}\x1b[0m`
          );
        } catch (e) {
          console.log(e);
        }
      }
    }
  },
};
