#!/usr/bin/env bash

# launch the picom compositor
picom &

# change mouse sensitivity 
xinput set-prop 'Glorious Model I' 'Coordinate Transformation Matrix' 0.5 0 0 0 0.5 0 0 0 1 &

# monitor Res and Hz
# change based on your monitor(s)
xrandr --output DP-2 --mode 1920x1080 --rate 144 &
xrandr --output DP-4 --mode 2560x1440 --rate 240 &

# start tablet driver
otd-daemon &

# launch networkmanager applet
nm-applet --indicator &

# turn off auto sleep
xset s off
xset -dpms
xset s noblank

