import { execAsync } from "ags/process"

const launchAppRunner = () => {
    //execAsync(`fuzzel`)
};

export default function LogoButton() {
  return (
    <box class={"LogoBox"}>
        <button onClicked={launchAppRunner()}>
          <label label="" class="IconLabel"/>
        </button>
    </box>
  )
}

//<popover></popover>
