return {
  "catppuccin/nvim",
  name = "catppuccin",
  priority = 1000,
  config = function()
    require("catppuccin").setup({
      transparent_background = true,
      auto_integrations = true,

      styles = {
        variables = {},
      },
      custom_highlights = function()
        return {
         ["@variable"] = { fg = "#f5a97f" },
        }
      end,
    })

    vim.cmd([[colorscheme catppuccin-macchiato]])

  end,
}
