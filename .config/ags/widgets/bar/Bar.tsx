import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"
import { execAsync } from "ags/process"

import LogoButton from "./LogoButton";
import SystemTray from "./SystemTray";
import NotificationButton from "./NotificationButton";

import HyprlandWorkspaces from "./HyprlandWorkspaces";

import CalendarButton from "./CalendarButton";
import SettingsButton from "./SettingsButton";
import PowerButton from "./PowerButton";


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
        <box>
          <SettingsButton />
          <PowerButton />
        </box>
      </box> 
    </centerbox>
    </window>
  )
}
