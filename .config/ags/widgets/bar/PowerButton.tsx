import { execAsync } from "ags/process"

const powerMenu = () => {
    execAsync("bash -c 'bash $HOME/.config/fuzzel/power-menu/power-menu.sh'")
        .catch((err) => console.error(err))
}

export default function PowerButton() {
    return (
      <button onClicked={() => powerMenu()}>
        <label class="PowerIconLabel" label=""/>
      </button> 
    )
}
