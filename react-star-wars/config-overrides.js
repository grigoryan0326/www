const { alias } = require("react-app-rewire-alias")

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@constants": "src/constants",
    "@services": "src/services",
    "@containers": "src/containers",
    "@styles": "src/styles",
    "@utils": "src/utils",
    "@assets": "src/assets",
    "@routes": "src/routes",
    "@static": "src/static",
    "@hooks": "src/hooks",
    "@ui": "src/components/UI",
    "@store": "src/store",
    "@context": "src/context",
  })(config)
  return config
}
