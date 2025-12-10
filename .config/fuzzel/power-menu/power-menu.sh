#!/usr/bin/env

SELECTION="$(printf "1 - Lock\n2 - Suspend\n3 - Log out\n4 - Reboot\n5 - Reboot to UEFI\n6 - Hard reboot\n7 - Shutdown" | fuzzel --dmenu -l 7 -p "Power Menu: ")"

case $SELECTION in
	*"Lock")
		echo Hello;;
	*"Suspend")
		echo Hello;;
	*"Log out")
		echo Hello;;
	*"Reboot")
		echo Hello;;
	*"Reboot to UEFI")
		echo Hello;;
	*"Hard reboot")
		echo Hello;;
	*"Shutdown")
		echo Hello shut;;
esac
