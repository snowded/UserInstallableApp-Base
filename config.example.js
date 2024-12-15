module.exports = {
  token: "", // YOUR BOT's TOKEN
  owners: [""], // YOUR USER ID
  mongo: "", // Your MONGODB URL
  
  // -- Do not worry about this if you don't understand what this is!
  zipline: {
    token: null, // string
    url: null, // string (it should look like https://example.com)
    chunkSize: null, // number (in mb)
    maxFileSize: null, // number (in mb)
  },
  
  autocomplete: {
    tag: true, // whether /tag command should have autocomplete
  },

    // -- Do not worry about this if you don't understand what this is!
  naviac: {
    username: null, // string
    token: null, // string
  },

  // Embed settings
  embeds: {
    pingEmbedColour: "#74b9ff", //string (hex: 6 characters) - embed colour - /ping
    evalEmbedColour: "#74b9ff", //string (hex: 6 characters) - embed colour - /eval
  },
};
