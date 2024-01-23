Exports Event:
  - exports['notifications']:sendnotify('Hello World!', 2, 5000)

QBCore Notify: At line 83 in qb-core > client > function.lua > Line 83 Replace until Line 106

function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        exports['notifications']:sendnotify(ttext, texttype, length, caption)
    else
        texttype = texttype or 'primary'
        length = length or 5000
        exports['notifications']:sendnotify(text, texttype, length)
    end
end

Colors:
  - Normal: 1
  - Error: 2
  - Warning: 3
    
<div align='center'></div>
<div align='center'><h2>Preview</h2></div>


![image](https://github.com/thesevenq/notifications/assets/59538879/7a399947-6ccd-4edf-89e3-2e2f7ec502c7)
