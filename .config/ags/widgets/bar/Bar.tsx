import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { execAsync } from "ags/process"

import LogoButton from "./left/LogoButton";
import SystemTray from "./left/SystemTray";
import NotificationButton from "./left/NotificationButton";

import HyprlandWorkspaces from "./center/HyprlandWorkspaces";

import CalendarButton from "./right/CalendarButton";
import SettingsButton from "./right/SettingsButton";
import PowerButton from "./right/PowerButton";


export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor

  return (
    <window
      visible
      name="bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      application={app}
    >
    <centerbox cssName="centerbox">
      <box $type="start">
        <LogoButton/>
        <SystemTray/>
        <NotificationButton/>
      </box>
      <box $type="center">
        <HyprlandWorkspaces />
      </box>
      <box $type="end">
        <CalendarButton />
        <box class="Power-Settings-Box">
          <SettingsButton />
          <PowerButton />
        </box>
      </box> 
    </centerbox>
    </window>
  )
}
