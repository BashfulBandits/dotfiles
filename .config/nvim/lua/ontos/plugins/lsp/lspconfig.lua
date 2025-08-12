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

    vim.lsp.enable('lua_ls') --working

    vim.lsp.enable('markdown_oxide')

    vim.lsp.enable('emmet_language_server') --working
    vim.lsp.enable('cssls')
    vim.lsp.enable('tailwindcss') --working(needs tailwindcss installed in project)
    vim.lsp.enable('ts_ls')
    vim.lsp.enable('svls')
  end,
}
