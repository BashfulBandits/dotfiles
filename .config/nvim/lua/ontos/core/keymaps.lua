-- Open new table
vim.keymap.set('n', '<leader>tn', ":tabnew<CR>", { desc = "Open new tab" })

-- Control + S to Save
vim.keymap.set('n', '<C-s>', ':w<CR>')
vim.keymap.set('i', '<C-s>', '<C-O>:w<CR>')
