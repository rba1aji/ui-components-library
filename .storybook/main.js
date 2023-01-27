module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-storysource", 
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",  
    "@storybook/addon-docs",
    "@storybook/addon-controls" 
  ],
  "framework": "@storybook/react"
}

