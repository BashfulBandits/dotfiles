import NotificationMenu from "./notificationMenu/NotifiationMenu";

export default function NotificationButton() {
  return (
    <box class="NotificationBox">
        <menubutton>
          <label label="󰂜" class="IconLabel"/>
          <popover><NotificationMenu/></popover>
        </menubutton>
    </box>
  )
}
