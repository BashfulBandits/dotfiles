import Hyprland from "gi://AstalHyprland";
import { execAsync } from "ags/process"
import { Accessor, createBinding, createState } from "ags"

import options from "../options";
import { range } from "../utils";


const dispatch = (hyprland, workspaceNumber: number) => {
    execAsync(`hyprctl dispatch workspace ${workspaceNumber}`)
};

const get_focused_workspace = (hyprland, workspaces: number) => {
    let focused_workspace: number = 1;
    range(workspaces).map((workspace) => {
        if (hyprland.get_workspace(workspace) === hyprland.get_focused_workspace()) {
            focused_workspace = workspace
        }
    })

    return focused_workspace;
}


export default function HyprlandWorkspaces() {
  const hyprland = Hyprland.get_default()

  let activeWorkspaceId: Accessor<Hyprland.Workspace> = createBinding(hyprland, "get_focused_workspace")
  let workspaces: number = options.workspaces.amount;

  activeWorkspaceId.subscribe(() => {
    console.log("value of accessor changed to", activeWorkspaceId)
  })

  print(activeWorkspaceId.get_id())

  return (
  <box class="workspaces-root-box">
    {range(workspaces).map((workspace) => {
        let focused_workspace = get_focused_workspace(hyprland, workspaces);
        const workspaceIsActive = workspace === focused_workspace;
        return (
        <button
          class={workspaceIsActive ? "active-hyprland-workspace-button" : "inactive-hyprland-workspace-button"}
          onClicked={() => dispatch(hyprland, workspace)}>
            {
              workspace
            }
        </button>
        )
    })}
  </box>
  )
}
