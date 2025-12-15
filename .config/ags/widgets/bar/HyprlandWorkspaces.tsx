import AstalHyprland from "gi://AstalHyprland";
import { execAsync } from "ags/process"
import { Accessor, createBinding, createState, For } from "ags"

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
  const hypr = AstalHyprland.get_default()
  const [wsList, setWsList] = createState(hypr.get_workspaces())

  // INFO: https://github.com/Aylur/astal/issues/284
  hypr.connect("workspace-added", (_: any, ws: AstalHyprland.Workspace) => {
    setWsList((w: AstalHyprland.Workspace) => [...w, ws])
  })
  hypr.connect("workspace-removed", (_, wsId) => {
    setWsList((w) => w.filter((w) => w.id != wsId))
  })

  const sorted = (arr: Array<AstalHyprland.Workspace>) => {
    return arr.filter(ws => !(ws.id >= -99 && ws.id <= -2)).sort((a, b) => a.id - b.id)
  }

    //<For each={wsList(sorted)}>
          //onClicked={() => ws.focus()}
  let workspace_array = range(options.workspaces.amount);
  return <box class="Workspaces">
    <For each={workspace_array}>
        {(ws: number) => (
        <button
          class={createBinding(hypr, "focusedWorkspace").as(fw => ws === fw ? "focused" : "")}
          onClicked={() => dispatch(hypr, ws)}
        >
          {ws}
        </button>
      )}
    </For>
  </box>
}
