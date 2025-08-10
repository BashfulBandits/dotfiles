return {
  "nvim-tree/nvim-tree.lua",
  version = "*",
  lazy = false,
  dependencies = {
    "nvim-tree/nvim-web-devicons",
  },
  keys = {
    { "<leader>e", "<cmd>NvimTreeToggle<CR>" },
    { "<leader>o", "<cmd>NvimTreeFocus<CR>" },
  },
  config = function()
    require("nvim-tree").setup {}
  end,
}
