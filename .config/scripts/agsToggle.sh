#!/usr/bin/env

MONITOR_ID=$(hyprctl activeworkspace | awk '/monitorID/ {print $2}')

ags toggle $1$MONITOR_ID
