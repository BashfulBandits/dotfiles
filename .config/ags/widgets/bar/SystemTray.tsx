import Tray from "gi://AstalTray";

function tray() {
  const tray = Tray.get_default()

  for (const item of tray.get_items()) {
    print(item.title)
  }
}

export default function SystemTray() {

  return (
    <box>
      <button onClicked={() => tray()}>This is the tray</button>      
    </box>       
  )
}
