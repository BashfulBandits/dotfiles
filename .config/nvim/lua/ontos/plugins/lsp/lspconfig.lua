return {
  "neovim/nvim-lspconfig",
  event = { "BufReadPre", "BufNewFile" },
  config = function()
    local lspconfig = require("lspconfig")

    local opts = {
      inlay_hints = {
        enabled = true,
      },
    }
  end, 
}
