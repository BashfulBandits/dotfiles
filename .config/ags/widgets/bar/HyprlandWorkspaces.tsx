import AstalHyprland from "gi://AstalHyprland";
import { execAsync } from "ags/process"
import { Accessor, createBinding } from "ags"

import options from "../options";
import { range } from "../utils";


const dispatch = (hyprland, workspaceNumber: number) => {
    execAsync(`hyprctl dispatch workspace ${workspaceNumber}`)
};


export default function HyprlandWorkspaces() {
  const hypr = AstalHyprland.get_default()
  let workspace_array = range(options.workspaces.amount);

  return <box class="WorkspacesBox">
      {workspace_array.map((ws: number) => (
        <button
          class={createBinding(hypr, "focusedWorkspace").as(fw => hypr.get_workspace(ws) === fw ? "focused" : "inactive")}
          onClicked={() => dispatch(hypr, ws)}
        >
          {ws}
        </button>
      ))}
  </box>
}
