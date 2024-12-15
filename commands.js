const {
  ApplicationCommandType,
  ApplicationCommandOptionType,
} = require("discord.js");
const config = require("./config.js");
const { autocomplete } = require("./config.js");

module.exports = [
  {
    name: "eval",
    description: "Executes the given code",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "code",
        type: ApplicationCommandOptionType.String,
        description: "The code to execute",
        required: true,
      },
      {
        name: "ephemeral",
        type: ApplicationCommandOptionType.Boolean,
        description: "Hide the output",
        required: false,
      },
    ],
  },
  {
    name: "tag",
    description: "Save or send premade messages",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "set",
        description: "Set or replace a tag",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "name",
            description: "The name of the tag",
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: "content",
            description: "The content of the tag",
            type: ApplicationCommandOptionType.String,
            required: true,
            max_length: 2000,
          },
        ],
      },
      {
        name: "delete",
        description: "Delete a tag",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "name",
            description: "The name of the tag",
            type: ApplicationCommandOptionType.String,
            required: true,
            autocomplete: config.autocomplete?.tag || false,
          },
        ],
      },
      {
        name: "get",
        description: "Get a tag",
        type: ApplicationCommandOptionType.Subcommand,
        options: [
          {
            name: "name",
            description: "The name of the tag",
            type: ApplicationCommandOptionType.String,
            required: true,
            autocomplete: config.autocomplete?.tag || false,
          },
          {
            name: "ephemeral",
            description: "Hide the output",
            type: ApplicationCommandOptionType.Boolean,
            required: false,
          },
        ],
      },
      {
        name: "list",
        description: "List your tags",
        type: ApplicationCommandOptionType.Subcommand,
      },
    ],
  },
  {
    name: "perms",
    description: "Changes the permissions for a command",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "add",
        type: ApplicationCommandOptionType.Subcommand,
        description: "Grant access to a user for a command",
        options: [
          {
            name: "command",
            description:
              "The command which you want to grant the user access to",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
          {
            name: "user",
            description:
              "The user id of the person you want to grant access to the command",
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
      {
        name: "remove",
        type: ApplicationCommandOptionType.Subcommand,
        description: "Revoke access to a user for a command",
        options: [
          {
            name: "command",
            description:
              "The command which you want to revoke the user access to",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
          {
            name: "user",
            description:
              "The user id of the person you want to revoke access to the command",
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
      {
        name: "list",
        type: ApplicationCommandOptionType.Subcommand,
        description: "Lists the permissions for each command",
      },
    ],
  },
  {
    name: "embed",
    description: "Sends an embed with the given data",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "title",
        type: ApplicationCommandOptionType.String,
        description: "Embed title",
        required: false,
        max_length: 256,
      },
      {
        name: "description",
        type: ApplicationCommandOptionType.String,
        description: "Embed description",
        required: false,
        max_length: 4096,
      },
      {
        name: "url",
        type: ApplicationCommandOptionType.String,
        description: "Embed URL",
        required: false,
      },
      {
        name: "timetstamp",
        type: ApplicationCommandOptionType.Boolean,
        description: "Embed timestamp",
        required: false,
      },
      {
        name: "color",
        type: ApplicationCommandOptionType.String,
        description: "Embed color",
        required: false,
        max_length: 4096,
      },
      {
        name: "footer-text",
        type: ApplicationCommandOptionType.String,
        description: "Embed footer text",
        required: false,
        max_length: 2048,
      },
      {
        name: "footer-icon",
        type: ApplicationCommandOptionType.String,
        description: "Embed footer icon",
        required: false,
      },
      {
        name: "image",
        type: ApplicationCommandOptionType.String,
        description: "Embed image",
        required: false,
      },
      {
        name: "thumbnail",
        type: ApplicationCommandOptionType.String,
        description: "Embed thumbnail",
        required: false,
        max_length: 4096,
      },
      {
        name: "author-name",
        type: ApplicationCommandOptionType.String,
        description: "Embed author name",
        required: false,
        max_length: 256,
      },
      {
        name: "author-icon",
        type: ApplicationCommandOptionType.String,
        description: "Embed author icon",
        required: false,
      },
      {
        name: "fields",
        type: ApplicationCommandOptionType.Boolean,
        description: "Embed fields",
        required: false,
      },
      {
        name: "json",
        type: ApplicationCommandOptionType.String,
        description: "Embed json",
        required: false,
      },
    ],
  },
  {
    name: "status",
    description: "Toggles the (usable) status of a command",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "enable",
        type: ApplicationCommandOptionType.Subcommand,
        description: "Enables a command",
        options: [
          {
            name: "command",
            description: "The command you want to enable",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
        ],
      },
      {
        name: "disable",
        type: ApplicationCommandOptionType.Subcommand,
        description: "Disables a command",
        options: [
          {
            name: "command",
            description: "The command you want to disable",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: "qr",
    description: "Create a QR code",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "text",
        type: ApplicationCommandOptionType.String,
        description: "The text to convert into a QR code",
        required: true,
        max_length: 900,
      },
      {
        name: "type",
        type: ApplicationCommandOptionType.String,
        description: "QR code format",
        required: false,
        choices: [
          {
            name: "Text",
            value: "text",
          },
          {
            name: "Image",
            value: "image",
          },
        ],
      },
    ],
  },
  {
    name: "minecraft",
    description: "Get the data of a minecarft server or a player's skin",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "server",
        type: ApplicationCommandOptionType.Subcommand,
        description: "Get information about a minecraft server",
        options: [
          {
            name: "version",
            description: "Server version",
            type: ApplicationCommandOptionType.String,
            choices: [
              {
                name: "Java",
                value: "java",
              },
              {
                name: "Bedrock",
                value: "bedrock",
              },
            ],
            required: true,
          },
          {
            name: "address",
            description: "Server address",
            type: ApplicationCommandOptionType.String,
            required: true,
          },
        ],
      },
      {
        name: "skin",
        type: ApplicationCommandOptionType.Subcommand,
        description: "Get the skin of a player",
        options: [
          {
            name: "player",
            description: "Player name or UUID",
            type: ApplicationCommandOptionType.String,
            required: true,
          },
          {
            name: "render-type",
            description: "Render format of the player skin",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
          {
            name: "crop-type",
            description: "Crop type of the rendered player skin",
            type: ApplicationCommandOptionType.String,
            autocomplete: true,
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: "8ball",
    description: "Ask a question to the 8ball",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "question",
        type: ApplicationCommandOptionType.String,
        description: "Ask a question",
        required: true,
        max_length: 1900,
      },
    ],
  },
  {
    name: "upload",
    description: "Upload a file to your zipline server",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "file",
        type: ApplicationCommandOptionType.Attachment,
        description: "The file to upload",
        required: true,
      },
      {
        name: "filename",
        description: "Override the filename of the file",
        type: ApplicationCommandOptionType.String,
        max_length: 50,
        required: false,
      },
      {
        name: "chunked",
        description: "Wether to upload the file in chunks",
        type: ApplicationCommandOptionType.Boolean,
        required: false,
      },
      {
        name: "ephemeral",
        description: "Hide the output",
        type: ApplicationCommandOptionType.Boolean,
        required: false,
      },
    ],
  },
  {
    name: "shorten",
    description: "Shorten a URL with zipline",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "url",
        type: ApplicationCommandOptionType.String,
        description: "The URL to shorten",
        required: true,
      },
      {
        name: "vanity",
        type: ApplicationCommandOptionType.String,
        description: "Custom vanity URL",
        required: false,
      },
      {
        name: "ephemeral",
        description: "Wether send an ephemeral reponse",
        type: ApplicationCommandOptionType.Boolean,
        required: false,
      },
    ],
  },
  {
    name: "ask",
    description: "Ask a question to N.A.V.I.A.C.",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "prompt",
        type: ApplicationCommandOptionType.String,
        description: "Enter the prompt for N.A.V.I.A.C.",
        required: true,
      },
      {
        name: "ephemeral",
        type: ApplicationCommandOptionType.Boolean,
        description: "Hide the output",
        required: false,
      },
    ],
  },

  {
    name: "ping",
    description: "Pong! View the bot's latency",
    type: ApplicationCommandType.String,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },

  {
    name: "http",
    description: "Get a HTTP status code",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "type",
        type: ApplicationCommandOptionType.String,
        description: "Image theme",
        required: true,
        choices: [
          {
            name: "Dog",
            value: "dog",
          },
          {
            name: "Cat",
            value: "cat",
          },
        ],
      },
      {
        name: "status",
        type: ApplicationCommandOptionType.Integer,
        description: "The HTTP status code",
        required: true,
      },
    ],
  },

  {
    name: "dig",
    description: "Dig a domain",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "domain",
        type: ApplicationCommandOptionType.String,
        description: "Domain to dig",
        required: true,
      },
      {
        name: "record",
        type: ApplicationCommandOptionType.String,
        description: "Record type to dig",
        required: false,
        autocomplete: true,
      },
      {
        name: "short",
        type: ApplicationCommandOptionType.Boolean,
        description: "Whether to have a short output",
        required: false,
      },
      {
        name: "provider",
        type: ApplicationCommandOptionType.String,
        description: "DNS provider to use",
        required: false,
        choices: [
          {
            name: "1.1.1.1 (Cloudflare)",
            value: "1.1.1.1",
          },
          {
            name: "1.1.1.2 (Cloudflare Malware Blocking)",
            value: "1.1.1.2",
          },
          {
            name: "1.1.1.3 (Cloudflare Malware Blocking + Adult Content Blocking)",
            value: "1.1.1.3",
          },
          {
            name: "8.8.8.8 (Google)",
            value: "8.8.8.8",
          },
          {
            name: "9.9.9.9 (Quad9)",
            value: "9.9.9.9",
          },
        ],
      },
      {
        name: "cdflag",
        type: ApplicationCommandOptionType.Boolean,
        description: "Whether use the cdflag",
        required: false,
      },
    ],
  },
  {
    name: "console",
    description: "Executes the given command",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "command",
        type: ApplicationCommandOptionType.String,
        description: "Command to be executed in terminal",
        required: true,
      },
      {
        name: "ephemeral",
        type: ApplicationCommandOptionType.Boolean,
        description: "Hide the output",
        required: false,
      },
    ],
  },
  {
    name: "animal",
    description: "Get a random pictue of an animal",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "type",
        type: ApplicationCommandOptionType.String,
        description: "Select an animal",
        required: false,
        choices: [
          {
            name: "Dog",
            value: "dog",
          },
          {
            name: "Fox",
            value: "fox",
          },
          {
            name: "Duck",
            value: "duck",
          },
          {
            name: "Cat",
            value: "cat",
          },
        ],
      },
    ],
  },
  {
    name: "urban",
    description: "Define a term using Urban Dictionary",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "term",
        type: ApplicationCommandOptionType.String,
        description: "The term to be defined",
        required: true,
      },
    ],
  },
  {
    name: "export",
    description: "Export a file",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "path",
        type: ApplicationCommandOptionType.String,
        description: "The file to export",
        required: true,
      },
    ],
  },
  {
    name: "colorpicker",
    description: "View a color from a hex",
    type: ApplicationCommandType.ChatInput,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
    options: [
      {
        name: "hex",
        type: ApplicationCommandOptionType.String,
        description: "The hex value",
        required: true,
      },
    ],
  },

  // message commands
  {
    name: "Save as Tag",
    type: ApplicationCommandType.Message,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
  {
    name: "Get Message JSON",
    type: ApplicationCommandType.Message,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
  {
    name: "Convert to QR Code",
    type: ApplicationCommandType.Message,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },

  // user commands
  {
    name: "Get User JSON",
    type: ApplicationCommandType.User,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
  {
    name: "Get Member JSON",
    type: ApplicationCommandType.User,
    integration_types: [0, 1],
    contexts: [0],
  },
  {
    name: "Get User Avatar",
    type: ApplicationCommandType.User,
    integration_types: [0, 1],
    contexts: [0, 1, 2],
  },
  {
    name: "Get Member Avatar",
    type: ApplicationCommandType.User,
    integration_types: [0, 1],
    contexts: [0],
  },
];
