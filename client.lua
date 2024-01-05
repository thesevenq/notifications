function openGui(color,message,time)
    guiEnabled = true
    SendNUIMessage({runProgress = true, colorsent = color, textsent = message, fadesent = time})
end

function closeGui()
    guiEnabled = false
    SendNUIMessage({closeProgress = true})
end

RegisterNetEvent("notifications:sendNotification")
AddEventHandler("notifications:sendNotification", function(color,message,time)
    openGui(color,message,time)
end)

RegisterNetEvent("notifications:closeUI")
AddEventHandler("notifications:closeUI", function()
    closeGui()
end)
