import { createPoll } from "ags/time"

export default function CalendarButton() {
  const time = createPoll("", 1000, "date")

    return (
      <box class="CalendarBox">
        <button>
          <label label={time}/>
        </button> 
      </box>
    )
}
