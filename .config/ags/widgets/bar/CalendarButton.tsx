import { Gtk } from "ags/gtk4"
import { createPoll } from "ags/time"

export default function CalendarButton() {
  const time = createPoll("", 1000, 'date "+%a %m/%d %H:%M"')

    return (
      <box class="CalendarBox">
        <menubutton>
          <label label={time}/>
          <popover>
            <Gtk.Calendar/>
          </popover>
        </menubutton> 
      </box>
    )
}
