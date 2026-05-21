#!/usr/bin/env

SELECTION="$(printf "󰒲 - Suspend\n - Log out\n - Reboot\n - Reboot to UEFI\n - Shutdown" | fuzzel --config="$HOME/.config/fuzzel/power-menu/power-menu.ini" --dmenu)"

case $SELECTION in
	*"Suspend")
                systemctl suspend;;
	*"Log out")
                hyprctl dispatch exit;;
	*"Reboot")
                shutdown now --r;;
	*"Reboot to UEFI")
                systemctl reboot --firmware-setup;;
	*"Shutdown")
                shutdown now --p;;
esac
