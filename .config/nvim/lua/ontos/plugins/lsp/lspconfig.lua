return {
  "neovim/nvim-lspconfig",
  event = { "BufReadPre", "BufNewFile" },
  config = function()
    local lspconfig = require("lspconfig")
    vim.lsp.inlay_hint.enable(true)

    vim.diagnostic.config({
      virtual_text = true,
      update_in_insert = true,
    })

    vim.lsp.enable('lua_ls')
  end,
}
