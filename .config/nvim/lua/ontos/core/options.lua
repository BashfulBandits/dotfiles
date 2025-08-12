-- Set minimum width for sign column
vim.opt.signcolumn = 'yes:1'

vim.opt.conceallevel = 2

-- Sets the Paste command in normal mode to use the system clipboard
vim.opt.clipboard = "unnamedplus"

-- Enable hybrid line numbers
vim.wo.number = true        -- Shows absolute line numbers
vim.wo.relativenumber = true -- Adds relative numbering

vim.o.tabstop = 8 -- A TAB character looks like 4 spaces
vim.o.expandtab = true -- Pressing the TAB key will insert spaces instead of a TAB character
vim.o.softtabstop = 4 -- Number of spaces inserted instead of a TAB character
vim.o.shiftwidth = 4 -- Number of spaces inserted when indenting
