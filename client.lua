function openGui(color,message,time)
    guiEnabled = true
    SendNUIMessage({runProgress = true, colorsent = color, textsent = message, fadesent = time})
end
exports('sendnotify', openGui)

function closeGui()
    guiEnabled = false
    SendNUIMessage({closeProgress = true})
end
exports('closenotify', closeGui)
