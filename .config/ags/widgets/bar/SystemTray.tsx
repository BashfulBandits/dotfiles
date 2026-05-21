import AstalTray from "gi://AstalTray";

function tray() {
  const tray = AstalTray.get_default()

  for (const item of tray.get_items()) {
    print(item.title)
    print(item.menu_path)
    print("\n")
    if (item.title === "Network") {
        //print(item.title)
    }
  }
}

export default function SystemTray() {

  return (
    <box class="TrayBox">
      <button onClicked={() => tray()}>This is the tray</button>      
    </box>       
  )
}
