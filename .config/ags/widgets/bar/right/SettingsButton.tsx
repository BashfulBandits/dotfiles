
export default function SettingsButton() {
            //<label label=""/>
            //label label="󰂯"/>
            //<label label=""/>

            //<label label=" 󰂯   "/>
            //<image file="/home/ontos/.local/share/icons/hicolor/16x16/apps/steam_icon_1057090.png"/>
    return (
        <box class="BarSettingsBox">
          <menubutton>
            <box class="BarSettingsLabelBox">
                <label class="HeadphoneLabel" label=""/>
                <label class="BlueToothLabel" label="󰂯"/>
                <label label=" "/>
                <label label=""/>
            </box>
            <popover>
              <button>Settings</button>
            </popover>
          </menubutton>
        </box>
    )
}
