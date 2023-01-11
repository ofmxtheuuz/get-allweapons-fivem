const { VrpProxy, VrpTunnel } = require('@vrpjs/server');

const vRP = VrpProxy.getInterface('vRP');
const vRPClient = VrpTunnel.getInterface('vRP');
const json = require("./main.json")

RegisterCommand("allwp", function (source, args, rawCommand) {
    let user_id = vRP.getUserId(source)
    if (user_id) {
        if (vRP.hasPermission(user_id, "owner.permissao")) {
            
            AddWeaponToPlayer(source, json.weapons)
            emitNet("Notify", source, "sucesso", "Você recebeu o kit do mxtheuz!")
        }
    }
})

function AddWeaponToPlayer(source, weapons) {
    weapons.forEach(element => {
        GiveWeaponToPed(
            source,
            GetHashKey(element),
            999,
            false,
            false
        );
    });
}