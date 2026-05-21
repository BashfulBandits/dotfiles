#!/usr/bin/env -S ags run

import app from "ags/gtk4/app"
import style from "./styles/style.scss"
import Bar from "./widgets/bar/Bar"

app.start({
  css: style,
  gtkTheme: "Adwaita",
  main() {
    app.get_monitors().map(Bar)
  },
})
