local function openGui(text,type,length)
    guiEnabled = true
    SendNUIMessage({runProgress = true, colorsent = type, textsent = text, fadesent = length})
end
exports('sendnotify', openGui)

function closeGui()
    guiEnabled = false
    SendNUIMessage({closeProgress = true})
end
exports('closenotify', closeGui)
