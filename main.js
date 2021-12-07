const log = (...args) => {
  if (log.enabled) {
    console.log("[pathParam]", ...args);
  }
};
log.enabled = false;

const pathParameterTag = {
    name: "pathParam",
    displayName: "Path parameter",
    liveDisplayName(args) {
      const name = args[0].value;
      return name ? name : args[1].value;
    },
    description: "replace part of URI path with given value",
    args: [
      {
        displayName: "Display name",
        description: "Optional name to display instead of value in Insomnia UI. Doesn't affect the request made.",
        type: "string"
      }, {
        displayName: "Value",
        description: "Value of the path parameter",
        type: "string"
      }, {
        displayName: "Description",
        description: "Optional description of this parameter, which doesn't affect the request made",
        type: "string"
      }, {
        displayName: "URI Encode",
        description: "Select to URI encode the parameter",
        type: "boolean",
        defaultValue: true
      }
    ],
    async run(context, name, value, description, mustEncode) {
      return mustEncode ? encodeURIComponent(value) : value;
    }
};

module.exports.templateTags = [pathParameterTag];