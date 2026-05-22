import AstalTray from "gi://AstalTray";
import { createBinding, For, Accessor } from "ags"

export default function SystemTray() {
  const tray = AstalTray.get_default()

  let trayItems = createBinding(tray, "items")

  return (
    <box class="TrayBox">
      <For each={trayItems}>
        {(trayItem) => (<image gicon={trayItem.gicon}/>)}
      </For>
    </box>       
  )
}
