// ======================) HAXDOM (====================== //
//                    last Update: 21/8/25                //
//                        vs: 1.5                         //
//                    Based on Wazar94                    //
// ==============) HAXDOM Script Futsal x4 (============= //

const roomName = '🌴 #HAXDOM FUTSAL X4 🔵⚪🔴';
const maxPlayers = 30;
const roomPublic = true;
const geo = [{ "lat": 18.4861, "lon": -69.9312, "code": "do" }];
const token = "thr1.AAAAAGiosmtDA6i3Uj_u3w.MZX80A2uOd8"; // https://www.haxball.com/headlesstoken

var roomWebhook = 'https://discord.com/api/webhooks/1407429513524285650/xnzrNfZr199QqNVtHU2kklxuU4yyJTDnYaXJ7kW6Gbpqng7bCi50GTHV3YZc1vSn5sE4'; // Eventos
var callsWebhook = 'https://discord.com/api/webhooks/1407420909479792804/qBtkEtfPK-lBdg3_C2dzIYr4GRF3X31ArnmsPj-b-hKlLFEKtYegJkhBQY3IPM1I9W3H'; // LLamadas administrador
var streakWebhook = 'https://discord.com/api/webhooks/1406800855763652720/lrBf9yHxiYQpzDrsD1T4tLBEJC-WdYxmu09BQmBBtGmnynvV1fBvkj1kB7vx-WWsDR1W'; // Rachas
var gameWebhook = 'https://discord.com/api/webhooks/1406789288800288868/RASzbdtkQsVjWQ0ywswfOwKfqQZc0wcgbMfRLVMbcBUiVps2O6vnOoGXTcH2ZDCPnjUi'; // Grabaciones de partidas
var errorWebhook = 'https://discord.com/api/webhooks/1407429834635739146/GnkY6_p1yzjSX8zgWYddjLBntegvBHrwaWu1YgffH3QIERq6eWXxTW7VucgAR_Ko78aU' // Errores
var bansWebhook = 'https://discord.com/api/webhooks/1408194790322999296/1S9w9OT8MZTcz2Pb_4S2XTSXcdq1iH7M-jEIjDUTVCdKd-8tiydofheIAF_6UliCzulE'; // Baneos
var fetchRecordingVariable = true;
var timeLimit = 4;
var scoreLimit = 3;
var defmode = false;
var discordlink = 'https://discord.gg/3jFY7Ma74U'
var idadminrol = '1407418809286922414' // Id del rol de administrador de esta sala

var gameConfig = {
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    noPlayer: true,
    geo: geo[0]
}

if (typeof token == 'string' && token.length == 39) {
    gameConfig.token = token;
}

var room = HBInit(gameConfig);
var roomLink = null;

const entrenamientoMap = '{ "name": "HAXDOM NO GOALS®", "width": 510, "height": 230, "bg": { "kickOffRadius": 80, "color": "1D2431" }, "vertexes": [ { "x": -400, "y": -70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -435, "y": -70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -434, "y": -71, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -434, "y": 71, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -435, "y": 70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": 70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": 70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 435, "y": 70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 434, "y": 71, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 434, "y": -71, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 435, "y": -70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": -70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": -201.5, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": -70, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": 70, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": 201.5, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": 200, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": 200, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": 201.5, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": 70, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": -70, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": -201.5, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": -200, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": -200, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": -70, "cMask": [] }, { "x": -400, "y": 70, "cMask": [] }, { "x": 400, "y": 70, "cMask": [] }, { "x": 400, "y": -70, "cMask": [] }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ] }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ] }, { "x": 0, "y": -230, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": 230, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": -198, "cMask": [] }, { "x": 0, "y": -80, "cMask": [] }, { "x": 0, "y": 198, "cMask": [] }, { "x": 0, "y": 80, "cMask": [] }, { "x": -0.08512578273952176, "y": 1.4398711127777941, "bCoef": 0.1, "cMask": [] } ], "segments": [ { "v0": 0, "v1": 1, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 3, "v1": 2, "curve": 35, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": -10, "curveF": 3.1715948023632126 }, { "v0": 4, "v1": 5, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 6, "v1": 7, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 9, "v1": 8, "curve": 35, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": -10, "curveF": 3.1715948023632126 }, { "v0": 10, "v1": 11, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 12, "v1": 13, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 14, "v1": 15, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 16, "v1": 17, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 18, "v1": 19, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 20, "v1": 21, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 22, "v1": 23, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 24, "v1": 25, "color": "3B424F", "cMask": [] }, { "v0": 26, "v1": 27, "color": "3B424F", "cMask": [] }, { "v0": 30, "v1": 28, "vis": false, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 31, "v1": 29, "vis": false, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 29, "v1": 28, "curve": 180, "vis": false, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "curveF": 6.123233995736766e-17 }, { "v0": 28, "v1": 29, "curve": 180, "vis": false, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "curveF": 6.123233995736766e-17 }, { "v0": 32, "v1": 33, "color": "161C26", "cMask": [] }, { "v0": 34, "v1": 35, "color": "161C26", "cMask": [] }, { "v0": 35, "v1": 33, "curve": 180, "color": "161C26", "cMask": [], "curveF": 6.123233995736766e-17 }, { "v0": 33, "v1": 35, "curve": 180, "color": "161C26", "cMask": [], "curveF": 6.123233995736766e-17 } ], "planes": [ { "normal": [ 0, 1 ], "dist": -230, "_data": { "extremes": { "normal": [ 0, 1 ], "dist": -230, "canvas_rect": [ -891, -287, 891, 287 ], "a": [ -891, -230 ], "b": [ 891, -230 ] } } }, { "normal": [ 0, -1 ], "dist": -230, "_data": { "extremes": { "normal": [ 0, -1 ], "dist": -230, "canvas_rect": [ -891, -287, 891, 287 ], "a": [ -891, 230 ], "b": [ 891, 230 ] } } }, { "normal": [ 1, 0 ], "dist": -510, "_data": { "extremes": { "normal": [ 1, 0 ], "dist": -510, "canvas_rect": [ -891, -287, 891, 287 ], "a": [ -510, -287 ], "b": [ -510, 287 ] } } }, { "normal": [ -1, 0 ], "dist": -510, "_data": { "extremes": { "normal": [ -1, 0 ], "dist": -510, "canvas_rect": [ -891, -287, 891, 287 ], "a": [ 510, -287 ], "b": [ 510, 287 ] } } } ], "goals": [  ], "discs": [ { "radius": 5.8, "invMass": 1.55, "pos": [ 0, 0 ], "color": "FFA500", "bCoef": 0.412, "cGroup": [ "ball", "kick", "score" ] }, { "radius": 5.4, "invMass": 0, "pos": [ -400, 70 ], "color": "3B424F" }, { "radius": 5.4, "invMass": 0, "pos": [ -400, -70 ], "color": "3B424F" }, { "radius": 5.4, "invMass": 0, "pos": [ 400, 70 ], "color": "3B424F" }, { "radius": 5.4, "invMass": 0, "pos": [ 400, -70 ], "color": "3B424F" } ], "playerPhysics": { "bCoef": 0, "acceleration": 0.11, "kickingAcceleration": 0.083, "kickStrength": 4.2 }, "ballPhysics": "disc0", "spawnDistance": 366.5, "traits": {}, "joints": [], "redSpawnPoints": [], "blueSpawnPoints": [], "canBeStored": false }';
const mDosMap = '{ "name": "HAXDOM x1®", "width": 510, "height": 230, "bg": { "kickOffRadius": 80, "color": "1D2431" }, "vertexes": [ { "x": -400, "y": -70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -435, "y": -70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -434, "y": -71, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -434, "y": 71, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -435, "y": 70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": 70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": 70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 435, "y": 70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 434, "y": 71, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 434, "y": -71, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 435, "y": -70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": -70, "bCoef": 0.1, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": -201.5, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": -70, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": 70, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": 201.5, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": 200, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": 200, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": 201.5, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": 70, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": -70, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": -201.5, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": 400, "y": -200, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": -200, "cMask": [ "ball" ], "color": "6E7A89" }, { "x": -400, "y": -70, "cMask": [] }, { "x": -400, "y": 70, "cMask": [] }, { "x": 400, "y": 70, "cMask": [] }, { "x": 400, "y": -70, "cMask": [] }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ] }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ] }, { "x": 0, "y": -230, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": 230, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": -198, "cMask": [] }, { "x": 0, "y": -80, "cMask": [] }, { "x": 0, "y": 198, "cMask": [] }, { "x": 0, "y": 80, "cMask": [] }, { "x": -0.08512578273952176, "y": 1.4398711127777941, "bCoef": 0.1, "cMask": [] } ], "segments": [ { "v0": 0, "v1": 1, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 3, "v1": 2, "curve": 35, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": -10, "curveF": 3.1715948023632126 }, { "v0": 4, "v1": 5, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 6, "v1": 7, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 9, "v1": 8, "curve": 35, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": -10, "curveF": 3.1715948023632126 }, { "v0": 10, "v1": 11, "color": "6E7A89", "bCoef": 0.1, "cMask": [ "ball" ], "bias": 10 }, { "v0": 12, "v1": 13, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 14, "v1": 15, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 16, "v1": 17, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 18, "v1": 19, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 20, "v1": 21, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 22, "v1": 23, "color": "6E7A89", "cMask": [ "ball" ], "bias": 10 }, { "v0": 24, "v1": 25, "color": "3B424F", "cMask": [] }, { "v0": 26, "v1": 27, "color": "3B424F", "cMask": [] }, { "v0": 30, "v1": 28, "vis": false, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 31, "v1": 29, "vis": false, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 29, "v1": 28, "curve": 180, "vis": false, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "curveF": 6.123233995736766e-17 }, { "v0": 28, "v1": 29, "curve": 180, "vis": false, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "curveF": 6.123233995736766e-17 }, { "v0": 32, "v1": 33, "color": "161C26", "cMask": [] }, { "v0": 34, "v1": 35, "color": "161C26", "cMask": [] }, { "v0": 35, "v1": 33, "curve": 180, "color": "161C26", "cMask": [], "curveF": 6.123233995736766e-17 }, { "v0": 33, "v1": 35, "curve": 180, "color": "161C26", "cMask": [], "curveF": 6.123233995736766e-17 } ], "planes": [ { "normal": [ 0, 1 ], "dist": -230, "_data": { "extremes": { "normal": [ 0, 1 ], "dist": -230, "canvas_rect": [ -891, -287, 891, 287 ], "a": [ -891, -230 ], "b": [ 891, -230 ] } } }, { "normal": [ 0, -1 ], "dist": -230, "_data": { "extremes": { "normal": [ 0, -1 ], "dist": -230, "canvas_rect": [ -891, -287, 891, 287 ], "a": [ -891, 230 ], "b": [ 891, 230 ] } } }, { "normal": [ 1, 0 ], "dist": -510, "_data": { "extremes": { "normal": [ 1, 0 ], "dist": -510, "canvas_rect": [ -891, -287, 891, 287 ], "a": [ -510, -287 ], "b": [ -510, 287 ] } } }, { "normal": [ -1, 0 ], "dist": -510, "_data": { "extremes": { "normal": [ -1, 0 ], "dist": -510, "canvas_rect": [ -891, -287, 891, 287 ], "a": [ 510, -287 ], "b": [ 510, 287 ] } } } ], "goals": [ { "p0": [ -408.3, -70 ], "p1": [ -408.3, 70 ], "team": "red" }, { "p0": [ 408.3, 70 ], "p1": [ 408.3, -70 ], "team": "blue" } ], "discs": [ { "radius": 5.8, "invMass": 1.55, "pos": [ 0, 0 ], "color": "FFA500", "bCoef": 0.412, "cGroup": [ "ball", "kick", "score" ] }, { "radius": 5.4, "invMass": 0, "pos": [ -400, 70 ], "color": "3B424F" }, { "radius": 5.4, "invMass": 0, "pos": [ -400, -70 ], "color": "3B424F" }, { "radius": 5.4, "invMass": 0, "pos": [ 400, 70 ], "color": "3B424F" }, { "radius": 5.4, "invMass": 0, "pos": [ 400, -70 ], "color": "3B424F" } ], "playerPhysics": { "bCoef": 0, "acceleration": 0.11, "kickingAcceleration": 0.083, "kickStrength": 4.2 }, "ballPhysics": "disc0", "spawnDistance": 366.5, "traits": {}, "joints": [], "redSpawnPoints": [], "blueSpawnPoints": [], "canBeStored": false }';
const mTresMap = '{ "name": "HAXDOM X4®", "width": 800, "height": 350, "redSpawnPoints": [ [ -350, 0 ], [ -350, 0 ], [ -350, 0 ], [ -350, 0 ] ], "blueSpawnPoints": [ [ 350, 0 ], [ 350, 0 ], [ 350, 0 ], [ 350, 0 ] ], "bg": { "color": "1D2431", "height": 320, "width": 700, "kickOffRadius": 80 }, "vertexes": [ { "x": -701, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": -10 }, { "x": 701, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": -10 }, { "x": -700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": 10 }, { "x": 701, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": 10 }, { "x": -700, "y": 85, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": 10 }, { "x": -700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": 10 }, { "x": 700, "y": 85, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": -10 }, { "x": 700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": -10 }, { "x": -700, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": 10 }, { "x": -700, "y": -85, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": 10 }, { "x": 700, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": -10 }, { "x": 700, "y": -85, "bCoef": 1, "cMask": [ "ball" ], "color": "6E7A89", "bias": -10 }, { "x": -736, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "6E7A89" }, { "x": -700, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "6E7A89" }, { "x": -736, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "6E7A89" }, { "x": -700, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "6E7A89" }, { "x": -735, "y": -86, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "6E7A89", "curve": 0 }, { "x": -735, "y": 86, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "6E7A89", "curve": 0 }, { "x": 735, "y": -86, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "6E7A89", "curve": 0 }, { "x": 735, "y": 86, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "6E7A89", "curve": 0 }, { "x": 736, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "6E7A89" }, { "x": 700, "y": -85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "color": "6E7A89" }, { "x": 736, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "6E7A89" }, { "x": 700, "y": 85, "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "color": "6E7A89" }, { "x": -700, "y": -85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": -700, "y": 85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": 700, "y": -85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": 700, "y": 85, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": -360, "y": -318.5, "cMask": [ "Wall" ], "cGroup": [ "wall" ], "color": "2E3042", "curve": 0 }, { "x": -360, "y": 318.5, "cMask": [ "Wall" ], "cGroup": [ "wall" ], "color": "2E3042", "curve": 0 }, { "x": 360, "y": -318.5, "cMask": [ "Wall" ], "cGroup": [ "wall" ], "color": "2E3042", "curve": 0 }, { "x": 360, "y": 318.5, "cMask": [ "Wall" ], "cGroup": [ "wall" ], "color": "2E3042", "curve": 0 }, { "x": 0, "y": -350, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "vis": false }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "vis": false, "color": "0A1524" }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "333945" }, { "x": 0, "y": 350, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "color": "333945" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "color": "0A1524" }, { "x": 0, "y": -80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "color": "454866" }, { "x": 0, "y": 80, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "color": "454866" }, { "x": 0, "y": -350, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": 0, "y": -80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": 0, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": 0, "y": 350, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": 0, "y": -80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663", "curve": 180 }, { "x": 0, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663", "curve": 180 }, { "x": 0, "y": 80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": 0, "y": -80, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "434663" }, { "x": -700, "y": 165, "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ], "vis": true }, { "x": -575, "y": 165, "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ], "vis": true }, { "x": -575, "y": -165, "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ], "vis": true }, { "x": -700, "y": -165, "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ], "vis": true }, { "x": 700, "y": 165, "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ], "vis": true }, { "x": 575, "y": 165, "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ], "vis": true }, { "x": 575, "y": -165, "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ], "vis": true }, { "x": 700, "y": -165, "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ], "vis": true } ], "segments": [ { "v0": 0, "v1": 1, "color": "6E7A89", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "y": -320 }, { "v0": 2, "v1": 3, "color": "6E7A89", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "y": 320 }, { "v0": 4, "v1": 5, "color": "6E7A89", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "x": -700 }, { "v0": 6, "v1": 7, "color": "6E7A89", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "x": 700 }, { "v0": 8, "v1": 9, "color": "6E7A89", "bCoef": 1, "cMask": [ "ball" ], "bias": 10, "x": -700 }, { "v0": 10, "v1": 11, "color": "6E7A89", "bCoef": 1, "cMask": [ "ball" ], "bias": -10, "x": 700 }, { "v0": 12, "v1": 13, "color": "6E7A89", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "y": -85 }, { "v0": 14, "v1": 15, "color": "6E7A89", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "y": 85 }, { "v0": 16, "v1": 17, "curve": 0, "color": "6E7A89", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10, "x": -735 }, { "v0": 18, "v1": 19, "curve": 0, "color": "6E7A89", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "x": 735 }, { "v0": 20, "v1": 21, "color": "6E7A89", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": 10 }, { "v0": 22, "v1": 23, "color": "6E7A89", "bCoef": 0.2, "cMask": [ "ball" ], "cGroup": [ "ball" ], "bias": -10, "y": 70 }, { "v0": 24, "v1": 25, "color": "434663", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -700 }, { "v0": 26, "v1": 27, "color": "434663", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 700 }, { "v0": 28, "v1": 29, "curve": 0, "color": "2E3042", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -400 }, { "v0": 30, "v1": 31, "curve": 0, "color": "2E3042", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 400 }, { "v0": 32, "v1": 33, "vis": false, "color": "a3a3a3", "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "x": 0 }, { "v0": 34, "v1": 35, "vis": false, "color": "a3a3a3", "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "x": 0 }, { "v0": 36, "v1": 37, "curve": 180, "vis": false, "color": "0A1524", "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "x": 0 }, { "v0": 38, "v1": 39, "curve": 180, "vis": false, "color": "454866", "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "x": 0 }, { "v0": 40, "v1": 41, "color": "434663", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 42, "v1": 43, "color": "434663", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": 0 }, { "v0": 44, "v1": 45, "curve": 180, "color": "434663", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 46, "v1": 47, "curve": 180, "color": "434663", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 48, "v1": 49, "curve": 0, "vis": true, "color": "2E3042", "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 49, "v1": 50, "curve": 0, "vis": true, "color": "2E3042", "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 50, "v1": 51, "curve": 0, "vis": true, "color": "2E3042", "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 52, "v1": 53, "curve": 0, "vis": true, "color": "2E3042", "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 53, "v1": 54, "curve": 0, "vis": true, "color": "2E3042", "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 54, "v1": 55, "curve": 0, "vis": true, "color": "2E3042", "bCoef": 1, "cMask": [ "wall" ], "cGroup": [ "wall" ] } ], "goals": [ { "p0": [ -708.3, -85 ], "p1": [ -708.3, 85 ], "team": "red" }, { "p0": [ 708.3, -85 ], "p1": [ 708.3, 85 ], "team": "blue" } ], "discs": [ { "radius": 5.8, "invMass": 1.5, "pos": [ 0, 0 ], "color": "FFF26D", "bCoef": 0.412, "cGroup": [ "ball", "kick", "score" ] }, { "radius": 5.4, "invMass": 0, "pos": [ -700, -85 ], "color": "E6E6E6" }, { "radius": 5.4, "invMass": 0, "pos": [ -700, 85 ], "color": "E6E6E6" }, { "radius": 5.4, "invMass": 0, "pos": [ 700, -85 ], "color": "E6E6E6" }, { "radius": 5.4, "invMass": 0, "pos": [ 700, 85 ], "color": "E6E6E6" } ], "planes": [ { "normal": [ 0, 1 ], "dist": -350, "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "wall" ] }, { "normal": [ 0, -1 ], "dist": -350, "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "wall" ] }, { "normal": [ 1, 0 ], "dist": -800, "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "wall" ] }, { "normal": [ -1, 0 ], "dist": -800, "bCoef": 1, "cMask": [ "all" ], "cGroup": [ "wall" ] }, { "normal": [ -1, 0 ], "dist": -360, "bCoef": 0, "cMask": [ "c1" ], "cGroup": [ "wall" ] }, { "normal": [ 1, 0 ], "dist": -360, "bCoef": 0, "cMask": [ "c0" ], "cGroup": [ "wall" ] } ], "playerPhysics": { "bCoef": 0, "acceleration": 0.11, "kickingAcceleration": 0.083, "kickStrength": 4.545 }, "ballPhysics": "disc0" }';
var currentStadium = 'entrenamiento';
var mTresMapObj = JSON.parse(entrenamientoMap);

room.setScoreLimit(scoreLimit);
room.setTimeLimit(timeLimit);
room.setTeamsLock(true);
room.setKickRateLimit(6, 0, 0);

var masterPassword = 53453587535;
var roomPassword = '';

/* OPTIONS */

let tiempoVotacion = null;
let votacionEstaActiva = false;
let votosUniformes = {};

var drawTimeLimit = 4;
var teamSize = 4;
var maxAdmins = 0;
var disableBans = false;
var debugMode = false;
var afkLimit = debugMode ? Infinity : 12;

var defaultSlowMode = 0.75;
var chooseModeSlowMode = 1.5;
var slowMode = defaultSlowMode;
var SMSet = new Set();

var hideClaimMessage = true;
var mentionPlayersUnpause = true;

/* OBJECTS */

class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class Game {
    constructor() {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class MutePlayer {
    constructor(name, id, auth) {
        this.id = MutePlayer.incrementId();
        this.name = name;
        this.playerId = id;
        this.auth = auth;
        this.unmuteTimeout = null;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    setDuration(minutes) {
        this.unmuteTimeout = setTimeout(() => {
            room.sendAnnouncement(
                `🔓 Has sido desmuteado.`,
                this.playerId,
                announcementColor,
                "bold",
                HaxNotification.MENTION
            );
            this.remove();
        }, minutes * 60 * 1000);
        muteArray.add(this);
    }

    remove() {
        this.unmuteTimeout = null;
        muteArray.removeById(this.id);
    }
}

class MuteList {
    constructor() {
        this.list = [];
    }

    add(mutePlayer) {
        this.list.push(mutePlayer);
        return mutePlayer;
    }

    getById(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByPlayerId(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.playerId === id);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    getByAuth(auth) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            return this.list[index];
        }
        return null;
    }

    removeById(id) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.id === id);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }

    removeByAuth(auth) {
        var index = this.list.findIndex(mutePlayer => mutePlayer.auth === auth);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

class HaxStatistics {
    constructor(playerName = '') {
        this.playerName = playerName;
        this.games = 0;
        this.wins = 0;
        this.losses = 0;
        this.winrate = '0.00%';
        this.playtime = 0;
        this.goals = 0;
        this.assists = 0;
        this.CS = 0;
        this.ownGoals = 0;
        this.elo = 1000;
        this.nivel = 0;
    }
}

class WebhookQueue {
    constructor(webhook, username, interval = 1000, maxQueueSize = 50, errorWebhook = null, maxErrors = 5, retryDelay = 5000) {
        this.webhook = webhook;
        this.username = username;
        this.interval = interval;
        this.queue = [];
        this.isOperational = true;
        this.maxQueueSize = maxQueueSize;
        this.errorWebhook = errorWebhook;
        this.errorCount = 0;
        this.maxErrors = maxErrors;
        this.retryDelay = retryDelay;
        this.#processLoop();
    }

    async #processLoop() {
        if (this.isOperational && this.queue.length > 0) {
            await this.#processNextMessage();
        }
        setTimeout(() => this.#processLoop(), this.interval);
    }

    async #processNextMessage() {
        const msg = this.queue.shift();
        try {
            const response = await fetch(this.webhook, {
                method: 'POST',
                body: JSON.stringify(msg),
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                if (response.status >= 500 || response.status === 429) {
                    this.queue.unshift(msg);
                }
                this.errorCount++;
                await this.reportError(`Error HTTP al enviar webhook: ${response.status} - ${response.statusText}`);
            } else {
                this.errorCount = 0;
            }
        } catch (e) {
            this.errorCount++;
            this.queue.unshift(msg);
            this.isOperational = false;
            setTimeout(() => this.isOperational = true, this.retryDelay);
            await this.reportError(`Error de red al enviar webhook: ${e.message}`);
        }

        if (this.errorCount >= this.maxErrors) {
            await this.reportError('Demasiados errores consecutivos, deteniendo la cola.');
            this.stop();
        }
    }

    send(player, message, type = "chat", extra = {}) {
        if (!this.isOperational || !this.webhook) return;
        if (this.queue.length >= this.maxQueueSize) {
            this.reportError(`Queue saturada (${this.queue.length}), mensaje descartado.`);
            return;
        }

        let content;
        if (type === "chat") {
            content = `[${getDate()}] 💬 CHAT\n**${player.name}** : ${message.replace('@', '@ ')}`;
        } 
        else if (type === "goal") {
            content = `[${getDate()}] ⚽ GOL\n${message}`;
        } 
        else if (type === "join") {
            content = `[${getDate()}] ➡️ ENTRO (${extra.currentPlayers}/${extra.maxPlayers})\n${player.name} [${extra.auth[0]}] {${extra.auth[1]}}`;
        } 
        else if (type === "leave") {
            content = `[${getDate()}] ⬅️ SALIO (${extra.currentPlayers}/${extra.maxPlayers})\n**${player.name}** [${extra.auth[0]}] {${extra.auth[1]}}`;
        }
        else {
            content = `[${getDate()}] ${message}`;
        }

        this.queue.push({ content, username: this.username });
    }

    async reportError(errorMsg) {
        if (!this.errorWebhook) return;
        try {
            await fetch(this.errorWebhook, {
                method: 'POST',
                body: JSON.stringify({ content: `[${getDate()}] ⚠️ ${errorMsg}`, username: this.username }),
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (e) {
            console.error('No se pudo enviar el error al webhook de errores:', e.message);
        }
    }

    stop() {
        this.isOperational = false;
    }
}

const webhookQueue = new WebhookQueue(roomWebhook, roomName, 1000, 50, errorWebhook, 5, 5000);

class CooldownManager {
    constructor() {
        this.cooldowns = {};
        setInterval(() => this.checkExpirations(), 1000);
    }

    addToCooldown(conn, command, durationMs) {
        if (!this.cooldowns[command]) this.cooldowns[command] = {};
        this.cooldowns[command][conn] = Date.now() + durationMs;
    }

    cleanExpiredCooldowns() {
        const now = Date.now();
        for (const command in this.cooldowns) {
            for (const conn in this.cooldowns[command]) {
                if (this.cooldowns[command][conn] <= now) {
                    delete this.cooldowns[command][conn];
                    const playerEntry = Object.entries(authArray).find(([id, a]) => a[1] === parseInt(conn));
                    if (playerEntry) {
                        const [playerId, playerData] = playerEntry;
                        room.sendAnnouncement(
                            `⏰ ${playerData[0]}, ahora puedes usar ${command} de nuevo.`,
                            parseInt(playerId),
                            0x00FF00,
                            'bold',
                            HaxNotification.CHAT
                        );
                    }
                }
            }
            if (Object.keys(this.cooldowns[command]).length === 0) delete this.cooldowns[command];
        }
    }

    canUse(conn, command) {
        this.cleanExpiredCooldowns();
        return !this.cooldowns[command] || !this.cooldowns[command][conn] || this.cooldowns[command][conn] <= Date.now();
    }

    timeLeft(conn, command) {
        this.cleanExpiredCooldowns();
        if (!this.cooldowns[command] || !this.cooldowns[command][conn]) return 0;
        return Math.max(this.cooldowns[command][conn] - Date.now(), 0);
    }

    timeLeftString(conn, command) {
        const ms = this.timeLeft(conn, command);
        if (ms === 0) return "0s";
        let seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60); seconds %= 60;
        const hours = Math.floor(minutes / 60); const mins = minutes % 60;
        if (hours > 0) return `${hours}h ${mins}m ${seconds}s`;
        if (minutes > 0) return `${minutes}m ${seconds}s`;
        return `${seconds}s`;
    }

    clearPlayerCooldowns(conn) {
        for (const command in this.cooldowns) {
            if (this.cooldowns[command][conn]) delete this.cooldowns[command][conn];
        }
    }

    clearAllCooldowns() {
        this.cooldowns = {};
    }

    checkExpirations() {
        this.cleanExpiredCooldowns();
    }
}

const commandCooldowns = new CooldownManager();

class VotekickSystem {
    constructor() {
        this.active = false;
        this.target = null;
        this.targetName = null;
        this.initiator = null;
        this.votes = 0;
        this.voters = new Set();
        this.requiredVotes = 0;
        this.timeout = null;
        this.cooldownManager = new CooldownManager();
    }

    getPlayerConn(player) { return authArray[player.id][1]; }
    calculateRequiredVotes(total) { return Math.ceil(total / 2); }

    canInitiate(player) {
        const playerList = room.getPlayerList();
        if (playerList.length < 3) return { success: false, msg: `👥 Deben haber al menos 3 jugadores para votar.` };
        if (this.active) return { success: false, msg: `⏰ Ya hay una votación activa.` };

        const conn = this.getPlayerConn(player);
        if (!this.cooldownManager.canUse('global', 'votekick')) {
            return { success: false, msg: `⏳ Cooldown global: ${this.cooldownManager.timeLeftString('global', 'votekick')}` };
        }
        if (!this.cooldownManager.canUse(conn, 'votekick')) {
            return { success: false, msg: `⏳ Tu cooldown: ${this.cooldownManager.timeLeftString(conn, 'votekick')}` };
        }
        return { success: true };
    }

    parseTarget(message) {
        const args = message.split(/ +/).slice(1);
        if (args.length === 0 || !args[0].startsWith('#')) {
            return { success: false, msg: `❌ Usa: !votekick #id` };
        }
        const targetId = parseInt(args[0].substring(1));
        const target = room.getPlayer(targetId);
        if (!target) return { success: false, msg: `❌ Jugador no encontrado.` };
        if (target.admin) return { success: false, msg: `⛔ No puedes votar contra un admin.` };
        return { success: true, player: target };
    }

    initiate(initiator, target) {
        const conn = this.getPlayerConn(initiator);
        this.active = true;
        this.target = this.getPlayerConn(target);
        this.targetName = target.name;
        this.initiator = conn;
        this.votes = 1;
        this.voters = new Set([conn]);
        this.requiredVotes = this.calculateRequiredVotes(room.getPlayerList().length);

        this.cooldownManager.addToCooldown('global', 'votekick', 5 * 60 * 1000);
        this.cooldownManager.addToCooldown(conn, 'votekick', 5 * 60 * 1000);

        this.timeout = setTimeout(() => this.expire(), 60000);
        room.sendAnnouncement(`🗳️ ${initiator.name} inició votación vs ${target.name}. !vote para votar. (${this.votes}/${this.requiredVotes}) - 60s`, null, announcementColor, 'bold', HaxNotification.CHAT);
    }

    canVote(player) {
        if (!this.active) return { success: false, msg: `❌ No hay votación activa.` };
        const conn = this.getPlayerConn(player);
        if (!this.cooldownManager.canUse(conn, 'vote')) {
            return { success: false, msg: `⏳ Cooldown: ${this.cooldownManager.timeLeftString(conn, 'vote')}` };
        }
        if (this.voters.has(conn)) return { success: false, msg: `🔴 Ya votaste.` };
        if (this.initiator === conn) return { success: false, msg: `❌ No puedes votar tu propia votación.` };
        if (this.target === conn) return { success: false, msg: `❌ No puedes votar contra ti.` };
        return { success: true };
    }

    addVote(player) {
        const conn = this.getPlayerConn(player);
        this.voters.add(conn);
        this.votes++;
        this.cooldownManager.addToCooldown(conn, 'vote', 2 * 60 * 1000);
        room.sendAnnouncement(`📜 ${player.name} votó vs ${this.targetName} (${this.votes}/${this.requiredVotes})`, null, announcementColor, 'bold', HaxNotification.CHAT);
        if (this.votes >= this.requiredVotes) this.execute();
    }

    execute() {
        const target = room.getPlayerList().find(p => authArray[p.id] && authArray[p.id][1] === this.target);
        if (target) {
            room.sendAnnouncement(`⚖️ ${this.targetName} kickeado por votación.`, null, announcementColor, 'bold', HaxNotification.CHAT);
            lastVotekick = target.id;
            room.kickPlayer(target.id, 'Kickeado por votación', false);
        } else {
            room.sendAnnouncement(`🟢 Votación terminada, jugador ya no está.`, null, verde, 'bold', HaxNotification.CHAT);
        }
        this.reset();
    }

    expire() {
        if (this.active) {
            room.sendAnnouncement(`⏲️ Votación vs ${this.targetName} expiró.`, null, announcementColor, 'bold', HaxNotification.CHAT);
            this.reset();
        }
    }

    onPlayerLeave(player) {
        if (!this.active) return;
        const conn = this.getPlayerConn(player);

        if (this.target === conn) {
            room.sendAnnouncement(`⏰ Votación cancelada - ${this.targetName} se desconectó.`, null, announcementColor, 'bold', HaxNotification.CHAT);
            this.reset();
            return;
        }

        if (this.initiator === conn) {
            room.sendAnnouncement(`⏰ Votación cancelada - iniciador se desconectó.`, null, announcementColor, 'bold', HaxNotification.CHAT);
            this.reset();
            return;
        }

        if (this.voters.has(conn)) {
            this.voters.delete(conn);
            this.votes--;
            room.sendAnnouncement(`📊 Voto removido (${this.votes}/${this.requiredVotes})`, null, announcementColor, 'normal', HaxNotification.NONE);
        }

        this.requiredVotes = this.calculateRequiredVotes(room.getPlayerList().length);
        if (this.votes >= this.requiredVotes) this.execute();
    }

    reset() {
        if (this.timeout) clearTimeout(this.timeout);
        this.active = false;
        this.target = null;
        this.targetName = null;
        this.initiator = null;
        this.votes = 0;
        this.voters.clear();
        this.requiredVotes = 0;
        this.timeout = null;
    }
}

const votekickSystem = new VotekickSystem();

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const State = { PLAY: 0, PAUSE: 1, STOP: 2 };
const Role = { PLAYER: 0, VIP: 1, ADMIN_TEMP: 2, ADMIN_PERM: 3, MASTER: 4 };
const HaxNotification = { NONE: 0, CHAT: 1, MENTION: 2 };
const Situation = { STOP: 0, KICKOFF: 1, PLAY: 2, GOAL: 3 };

var gameState = State.STOP;
var playSituation = Situation.STOP;
var goldenGoal = false;

var playersAll = [];
var players = [];
var teamRed = [];
var teamBlue = [];
var teamSpec = [];
let lastVotekick = null;

var teamRedStats = [];
var teamBlueStats = [];

var banList = [];

let playerExitPositions = {
    red: [],
    blue: []
};

/* STATS */

var possession = [0, 0];
var actionZoneHalf = [0, 0];
var lastWinner = Team.SPECTATORS;

let streak = {
    actual: 0,
    historica: 0,
    equipo: null,
    jugadoresActuales: [],
    jugadoresHistoricos: []
};

/* AUTH */

var authArray = [];
var vipList = [];
var adminList = [];
var masterList = [];

/* COMMANDS */

var commands = {
    ////////// Usuarios

    claim: { aliases: ['cl'], roles: Role.PLAYER, desc: false, function: masterCommand },
    help: { aliases: ['commands', 'ayuda', 'comandos'], roles: Role.PLAYER, desc: false, function: helpCommand },
    adminhere: { aliases: ['llamar', 'calladmin', 'call', 'adminhelp', 'mod'], roles: Role.PLAYER, desc: "Llama a un administrador con una razon", function: calladminCommand },
    discord: { aliases: ['dc'], roles: Role.PLAYER, desc: "Obtén el link de Discord.", function: discordCommand },
    vip: { aliases: ['infovip'], roles: Role.PLAYER, desc: "Ventajas e informacion sobre VIP.", function: ventajasVip },
    bb: { aliases: ['bye', 'gn', 'cya', 'adios'], roles: Role.PLAYER, desc: "Salir instantáneamente de la sala.", function: leaveCommand },
    afk: { aliases: ['ausente'], roles: Role.PLAYER, desc: "Ponerte en modo AFK (1-5 min, cooldown 10 min).", function: afkCommand },
    afks: { aliases: ['afklist', 'listausentes'], roles: Role.PLAYER, desc: "Lista de jugadores AFK.", function: afkListCommand },
    me: { aliases: ['stat', 'stats', 'mstats', 'misstats'], roles: Role.PLAYER, desc: "Mira tu estadisticas.", function: globalStatsCommand },
    showme: { aliases: ['showstats', 'show', 'mostrar'], roles: Role.PLAYER, desc: "Muestra tus estadísticas a todos.", function: showme },
    myelo: { aliases: [], roles: Role.PLAYER, desc: "Mira tu ELO y nivel.", function: eloCommand },
    rename: { aliases: ['cambiarnombre'], roles: Role.PLAYER, desc: "Cambia tu nombre para los rankings.", function: renameCommand },
    tops: { aliases: ['topall', 'alltops'], roles: Role.PLAYER, desc: "Ver el top 1 de cada estadística.", function: allTopsCommand },
    games: { aliases: ['partidas'], roles: Role.PLAYER, desc: "Top 5 jugadores con más partidas.", function: statsLeaderboardCommand },
    wins: { aliases: ['victorias'], roles: Role.PLAYER, desc: "Top 5 jugadores con más victorias.", function: statsLeaderboardCommand },
    losses: { aliases: ['perdidas'], roles: Role.PLAYER, desc: "Top 5 jugadores con más pérdidas.", function: statsLeaderboardCommand },
    goals: { aliases: ['goles'], roles: Role.PLAYER, desc: "Top 5 jugadores con más goles.", function: statsLeaderboardCommand },
    assists: { aliases: ['asistencias'], roles: Role.PLAYER, desc: "Top 5 jugadores con más asistencias.", function: statsLeaderboardCommand },
    cs: { aliases: ['vallas'], roles: Role.PLAYER, desc: "Top 5 jugadores con más CS.", function: statsLeaderboardCommand },
    ownGoals: { aliases: ['autogoles', 'ogs', 'og'], roles: Role.PLAYER, desc: "Top 5 jugadores con más goles en propia.", function: statsLeaderboardCommand },
    elo: { aliases: [], roles: Role.PLAYER, desc: "Top 5 jugadores con más ELO.", function: statsLeaderboardCommand },
    playtime: { aliases: ['tiempo'], roles: Role.PLAYER, desc: "Top 5 jugadores con más tiempo jugado.", function: statsLeaderboardCommand },
    racha: { aliases: ['streak'], roles: Role.PLAYER, desc: "Racha actual e histórica.", function: streakCommand },
    uni: { aliases: [], roles: Role.PLAYER, desc: "Cambia los uniformes o inicia votación.", function: unicomando },
    vips: { aliases: ['viplist', 'listavip'], roles: Role.PLAYER, desc: "Lista de jugadores VIP.", function: vipListCommand },
    votekick: { aliases: ['vkick'], roles: Role.PLAYER, desc: "Iniciar una votacion para kickear a un jugador", function: votekickCommand },
    vote: { aliases: [], roles: Role.PLAYER, desc: false, function: voteCommand },

    ////////// Vips

    skip: { aliases: [], roles: Role.VIP, desc: "Te adelanta en la fila.", function: skipCommand },
    banquear: { aliases: [], roles: Role.VIP, desc: "Permite banquear a un jugador al inicio de la partida.", function: banquearJugador },
    ver: { aliases: ['see', 'verestadisticas'], roles: Role.VIP, desc: "Mira las estadísticas de un jugador: !ver #1.", function: verStatsCommand },

    ////////// Administradores

    anunciar: { aliases: ['a'], roles: Role.ADMIN_TEMP, desc: "Haz un anuncio.", function: anunciar },
    entrenamiento: { aliases: [], roles: Role.ADMIN_TEMP, desc: "Cargar estadio clásico de entrenamiento.", function: stadiumCommand },
    futsalx2: { aliases: [], roles: Role.ADMIN_TEMP, desc: "Cargar estadio clásico.", function: stadiumCommand },
    futsalx3: { aliases: [], roles: Role.ADMIN_TEMP, desc: "Cargar estadio grande.", function: stadiumCommand },
    rr: { aliases: ['reiniciar'], roles: Role.ADMIN_TEMP, desc: "Reinicia el juego.", function: restartCommand },
    rrs: { aliases: ['reiniciarswap'], roles: Role.ADMIN_TEMP, desc: "Cambia equipos y reinicia el juego.", function: restartSwapCommand },
    swap: { aliases: ['s', 'cambiar'], roles: Role.ADMIN_TEMP, desc: "Intercambia equipos cuando el juego está detenido.", function: swapCommand },
    kickred: { aliases: ['kickr', 'kickrojo'], roles: Role.ADMIN_TEMP, desc: "Expulsa todos los jugadores del equipo rojo.", function: kickTeamCommand },
    kickblue: { aliases: ['kickb', 'kickazul'], roles: Role.ADMIN_TEMP, desc: "Expulsa todos los jugadores del equipo azul.", function: kickTeamCommand },
    kickspec: { aliases: ['kicks', 'kickspec'], roles: Role.ADMIN_TEMP, desc: "Expulsa todos los espectadores.", function: kickTeamCommand },
    mute: { aliases: ['m', 'silenciar'], roles: Role.ADMIN_TEMP, desc: "Silencia a un jugador por un tiempo.", function: muteCommand },
    unmute: { aliases: ['um', 'desilenciar'], roles: Role.ADMIN_TEMP, desc: "Quita el silencio a un jugador.", function: unmuteCommand },
    mutes: { aliases: ['listamute', 'muted'], roles: Role.ADMIN_TEMP, desc: "Lista de jugadores silenciados.", function: muteListCommand },

    ////////// Maestros

    clearbans: { aliases: ['desbanear'], roles: Role.MASTER, desc: "Quita el ban a todos o a uno específico.", function: clearbansCommand },
    bans: { aliases: ['banlist', 'baneados'], roles: Role.MASTER, desc: "Lista de jugadores baneados.", function: banListCommand },
    setvip: { aliases: ['vip', 'darvip'], roles: Role.MASTER, desc: "Asigna VIP a un jugador.", function: setVipCommand },
    removevip: { aliases: ['unvip', 'quitarvip'], roles: Role.MASTER, desc: "Quita VIP a un jugador.", function: removeVipCommand },
    admins: { aliases: ['adminlist', 'admins'], roles: Role.MASTER, desc: "Lista de administradores permanentes.", function: adminListCommand },
    setadmin: { aliases: ['admin', 'daradmin'], roles: Role.MASTER, desc: "Asigna admin a un jugador.", function: setAdminCommand },
    removeadmin: { aliases: ['unadmin', 'quitaradmin'], roles: Role.MASTER, desc: "Quita admin a un jugador.", function: removeAdminCommand },
    password: { aliases: ['pw', 'clave'], roles: Role.MASTER, desc: "Añade o quita la contraseña de la sala.", function: passwordCommand }
};

/* GAME */

var lastTouches = Array(2).fill(null);
var lastTeamTouched;

var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed = 0;
var playerRadius = 15;
var ballRadius = 10;
var triggerDistance = playerRadius + ballRadius + 0.01;

/* COLORS */

var welcomeColor = 0xc4ff65;
var announcementColor = 0xffefd6;
var infoColor = 0xbebebe;
var privateMessageColor = 0xffc933;
var redColor = 0xff4c4c;
var blueColor = 0x62cbff;
var warningColor = 0xffa135;
var errorColor = 0xff6b6b;
var successColor = 0x75ff75;
var defaultColor = null;

/* AUXILIARY */

var checkTimeVariable = false;
var checkStadiumVariable = true;
var endGameVariable = false;
var cancelGameVariable = false;
var kickFetchVariable = false;

var chooseMode = false;
var timeOutCap;
var capLeft = false;
var redCaptainChoice = '';
var blueCaptainChoice = '';
var chooseTime = 20;

var AFKSet = new Set();
var AFKMinSet = new Set();
var AFKCooldownSet = new Set();
var minAFKDuration = 0.5;
var maxAFKDuration = 25;
var AFKCooldown = 2;

var muteArray = new MuteList();
var muteDuration = 5;

var removingPlayers = false;
var insertingPlayers = false;

var stopTimeout;
var startTimeout;
var unpauseTimeout;
var removingTimeout;
var insertingTimeout;

var emptyPlayer = {
    id: 0,
};
stadiumCommand(emptyPlayer, "!entrenamiento");

var game = new Game();

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

if (typeof String.prototype.replaceAll != 'function') {
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
}

function getDate() {
    let d = new Date();
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

/* MATH FUNCTIONS */

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function pointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

/* TIME FUNCTIONS */

function getHoursStats(time) {
    return Math.floor(time / 3600);
}

function getMinutesGame(time) {
    var t = Math.floor(time / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesReport(time) {
    return Math.floor(Math.round(time) / 60);
}

function getMinutesEmbed(time) {
    var t = Math.floor(Math.round(time) / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getMinutesStats(time) {
    return Math.floor(time / 60) - getHoursStats(time) * 60;
}

function getSecondsGame(time) {
    var t = Math.floor(time - Math.floor(time / 60) * 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsReport(time) {
    var t = Math.round(time);
    return Math.floor(t - getMinutesReport(t) * 60);
}

function getSecondsEmbed(time) {
    var t = Math.round(time);
    var t2 = Math.floor(t - Math.floor(t / 60) * 60);
    return `${Math.floor(t2 / 10)}${Math.floor(t2 % 10)}`;
}

function getTimeGame(time) {
    return `[${getMinutesGame(time)}:${getSecondsGame(time)}]`;
}

function getTimeEmbed(time) {
    return `[${getMinutesEmbed(time)}:${getSecondsEmbed(time)}]`;
}

function getTimeStats(time) {
    if (getHoursStats(time) > 0) {
        return `${getHoursStats(time)}h${getMinutesStats(time)}m`;
    } else {
        return `${getMinutesStats(time)}m`;
    }
}

function getGoalGame() {
    return game.scores.red + game.scores.blue;
}

/* REPORT FUNCTIONS */

function findFirstNumberCharString(str) {
    let str_number = str[str.search(/[0-9]/g)];
    return str_number === undefined ? "0" : str_number;
}

function getIdReport() {
    var d = new Date();
    return `${d.getFullYear() % 100}${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}${d.getDate() < 10 ? '0' : ''}${d.getDate()}${d.getHours() < 10 ? '0' : ''}${d.getHours()}${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}${d.getSeconds() < 10 ? '0' : ''}${d.getSeconds()}${findFirstNumberCharString(roomName)}`;
}

function getRecordingName(game) {
    let d = new Date();
    let redCap = game.playerComp[0][0] != undefined ? game.playerComp[0][0].player.name : 'Red';
    let blueCap = game.playerComp[1][0] != undefined ? game.playerComp[1][0].player.name : 'Blue';
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let year = d.getFullYear() % 100 < 10 ? '0' + (d.getFullYear() % 100) : (d.getFullYear() % 100);
    let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    return `${day}-${month}-${year}-${hour}h${minute}-${redCap}vs${blueCap}.hbr2`;
}

function fetchRecording(game) {
    if (gameWebhook != "") {
        let form = new FormData();
        form.append(null, new File([game.rec], getRecordingName(game), { "type": "text/plain" }));
        form.append("payload_json", JSON.stringify({
            "username": roomName
        }));

        fetch(gameWebhook, {
            method: 'POST',
            body: form,
        }).then((res) => res);
    }
}

/* FEATURE FUNCTIONS */

function getCommand(commandStr) {
    if (commands.hasOwnProperty(commandStr)) return commandStr;
    for (const [key, value] of Object.entries(commands)) {
        for (let alias of value.aliases) {
            if (alias == commandStr) return key;
        }
    }
    return false;
}

function getPlayerComp(player) {
    if (player == null || player.id == 0) return null;
    var comp = game.playerComp;
    var index = comp[0].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[0][index];
    index = comp[1].findIndex((c) => c.auth == authArray[player.id][0]);
    if (index != -1) return comp[1][index];
    return null;
}

function getTeamArray(team, includeAFK = true) {
    if (team == Team.RED) return teamRed;
    if (team == Team.BLUE) return teamBlue;
    if (includeAFK) {
        return playersAll.filter((p) => p.team === Team.SPECTATORS);
    }
    return teamSpec;
}

function getPlayerNamesFromTeam(team) {
    if (!Array.isArray(team) || team.length === 0) {
        return [];
    }
    let names = team
        .filter(p => p && typeof p.name === "string" && p.name.trim() !== "")
        .map(p => p.name.trim());
    names = [...new Set(names)];
    names = names.map(n => n.length > 20 ? n.slice(0, 17) + "..." : n);
    return names;
}


function sendAnnouncementTeam(message, team, color, style, mention) {
    for (let player of team) {
        room.sendAnnouncement(message, player.id, color, style, mention);
    }
}

function teamChat(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    var emoji = player.team == Team.RED ? '🔴' : player.team == Team.BLUE ? '🔵' : '⚪';
    var message = `${emoji} [TEAM] ${player.name}: ${msgArray.join(' ')}`;
    var team = getTeamArray(player.team, true);
    var color = player.team == Team.RED ? redColor : player.team == Team.BLUE ? blueColor : null;
    var style = 'bold';
    var mention = HaxNotification.CHAT;
    sendAnnouncementTeam(message, team, color, style, mention);
}

function playerChat(player, message) {
    const msgArray = message.split(/ +/);
    const playerTargetIndex = playersAll.findIndex(
        (p) => p.name.replaceAll(' ', '_') === msgArray[0].substring(2)
    );

    if (playerTargetIndex === -1) {
        room.sendAnnouncement(
            `       Este Jugador es invalido!\nte recomerdamos que uses el tabulador...`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }

    const playerTarget = playersAll[playerTargetIndex];

    if (player.id === playerTarget.id) {
        room.sendAnnouncement(
            `🥏 No te puedes enviar privado a ti mismo!\n      Acaso esta loco este chico... 🩸`,
            player.id,
            errorColor,
            'bold',
            null
        );
        return false;
    }

    const messageFrom = `    [CORREO]\n  Enviado a: ${playerTarget.name}\n 🗣 "${msgArray.slice(1).join(' ')}"`;
    const messageTo = `    [CORREO]\n Recibido de ${player.name}\n 🗣 "${msgArray.slice(1).join(' ')}"`;

    room.sendAnnouncement(
        messageFrom,
        player.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );

    room.sendAnnouncement(
        messageTo,
        playerTarget.id,
        privateMessageColor,
        'bold',
        HaxNotification.CHAT
    );
}


/* PHYSICS FUNCTIONS */

function calculateStadiumVariables() {
    if (checkStadiumVariable && teamRed.length + teamBlue.length > 0) {
        checkStadiumVariable = false;
        setTimeout(() => {
            let ballDisc = room.getDiscProperties(0);
            let playerDisc = room.getPlayerDiscProperties(teamRed.concat(teamBlue)[0].id);
            ballRadius = ballDisc.radius;
            playerRadius = playerDisc.radius;
            triggerDistance = ballRadius + playerRadius + 0.01;
            speedCoefficient = 100 / (5 * ballDisc.invMass * (ballDisc.damping ** 60 + 1));
        }, 1);
    }
}

function checkGoalKickTouch(array, index, goal) {
    if (array != null && array.length >= index + 1) {
        var obj = array[index];
        if (obj != null && obj.goal != null && obj.goal == goal) return obj;
    }
    return null;
}

/* BUTTONS */

function topButton() {
    if (teamSpec.length > 0) {
        if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
            room.setPlayerTeam(teamSpec[0].id, Team.RED);
            room.setPlayerTeam(teamSpec[1].id, Team.BLUE);
        } else if (teamRed.length < teamBlue.length)
            room.setPlayerTeam(teamSpec[0].id, Team.RED);
        else room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
    }
}

function randomButton() {
    if (teamSpec.length > 0) {
        if (teamRed.length == teamBlue.length && teamSpec.length > 1) {
            var r = getRandomInt(teamSpec.length);
            room.setPlayerTeam(teamSpec[r].id, Team.RED);
            teamSpec = teamSpec.filter((spec) => spec.id != teamSpec[r].id);
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
        } else if (teamRed.length < teamBlue.length)
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.RED);
        else
            room.setPlayerTeam(teamSpec[getRandomInt(teamSpec.length)].id, Team.BLUE);
    }
}

function blueToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (var i = 0; i < teamBlue.length; i++) {
        room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (var i = 0; i < teamRed.length; i++) {
        room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let i = 0; i < Math.max(teamRed.length, teamBlue.length); i++) {
        if (Math.max(teamRed.length, teamBlue.length) - teamRed.length - i > 0)
            room.setPlayerTeam(teamBlue[teamBlue.length - 1 - i].id, Team.SPECTATORS);
        else if (Math.max(teamRed.length, teamBlue.length) - teamBlue.length - i > 0)
            room.setPlayerTeam(teamRed[teamRed.length - 1 - i].id, Team.SPECTATORS);
        else break;
    }
    for (let i = 0; i < Math.min(teamRed.length, teamBlue.length); i++) {
        room.setPlayerTeam(
            teamBlue[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
            Team.SPECTATORS
        );
        room.setPlayerTeam(
            teamRed[Math.min(teamRed.length, teamBlue.length) - 1 - i].id,
            Team.SPECTATORS
        );
    }
}

function swapButton() {
    clearTimeout(removingTimeout);
    removingPlayers = true;
    removingTimeout = setTimeout(() => {
        removingPlayers = false;
    }, 100);
    for (let player of teamBlue) {
        room.setPlayerTeam(player.id, Team.RED);
    }
    for (let player of teamRed) {
        room.setPlayerTeam(player.id, Team.BLUE);
    }
}

/* COMMAND FUNCTIONS */

/* PLAYER COMMANDS */

function leaveCommand(player, message) {
    room.kickPlayer(player.id, 'Adiós!', false);
}

function helpCommand(player, message) {
    const msgArray = message.split(/ +/).slice(1);
    const playerRole = getRole(player);
    const colors = { default: 0xFFEB3B, info: 0x6C63FF, success: 0x4CAF50, warning: 0xFFA726 };

    const sections = {
        [Role.PLAYER]: { emoji: '🔹', title: 'Comandos de Usuarios', commands: [] },
        [Role.VIP]: { emoji: '💠', title: 'Comandos VIP', commands: [] },
        [Role.ADMIN_TEMP]: { emoji: '🛡️', title: 'Comandos de Administradores', commands: [] },
        [Role.MASTER]: { emoji: '👑', title: 'Comandos de Super Admin', commands: [] }
    };

    for (const [key, cmd] of Object.entries(commands))
        if (cmd.desc && sections[cmd.roles]) sections[cmd.roles].commands.push(`!${key}`);

    if (msgArray.length === 0) {
        let msg = '';
        for (const role in sections) {
            if (playerRole >= role) {
                const s = sections[role];
                msg += `${s.emoji} ${s.title}\n${s.commands.length ? s.commands.join(' | ') : 'ninguno'}\n\n`;
            }
        }
        msg += `📌 Para info de un comando: !ayuda <comando>\n✨ Script hecho con ❤️ por Ney`;
        room.sendAnnouncement(msg, player.id, colors.default, 'normal', HaxNotification.CHAT);
    } else {
        const cmdName = getCommand(msgArray[0].toLowerCase());
        const cmdData = cmdName ? commands[cmdName] : null;
        room.sendAnnouncement(
            cmdData && cmdData.desc ? `🔍 '!${cmdName}':\n${cmdData.desc}` :
                `❌ Ups! Ese comando no existe.\nEscribe !ayuda para ver todos los comandos.`,
            player.id,
            cmdData && cmdData.desc ? colors.info : colors.warning,
            'normal',
            HaxNotification.CHAT
        );
    }
}

function globalStatsCommand(player, message) {
    var stats = new HaxStatistics(player.name);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }
    var statsString = printPlayerStats(stats);
    room.sendAnnouncement(
        statsString,
        player.id,
        0xFFEB3B,
        'bold',
        HaxNotification.CHAT
    );
}

function showme(player, message) {
    const conn = authArray[player.id][1];
    const cooldownMs = 3 * 60 * 1000; // 3 minutos

    if (!commandCooldowns.canUse(conn, "showme")) {
        const timeString = commandCooldowns.timeLeftString(conn, "showme");
        room.sendAnnouncement(
            `⏰ ${player.name}, espera ${timeString} antes de mostrar tus estadísticas otra vez.`,
            player.id,
            0xFFC857,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    commandCooldowns.addToCooldown(conn, "showme", cooldownMs);

    let stats = new HaxStatistics(player.name);
    if (localStorage.getItem(authArray[player.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
    }

    const statsString = printPlayerStats(stats);
    room.sendAnnouncement(
        `${player.name} ha mostrado sus estadísticas:\n${statsString}`,
        null,
        0xFFEB3B,
        "bold",
        HaxNotification.CHAT
    );
}

function eloCommand(player) {
    const statsRaw = localStorage.getItem(authArray[player.id]?.[0]);
    if (!statsRaw) {
        room.sendAnnouncement(`❌ ${player.name}, no tienes estadísticas. Debes jugar al menos una partida para obtener ELO y nivel.`, player.id, 0xFF4C4C, "bold");
        return;
    }
    const stats = JSON.parse(statsRaw);
    const elo = stats.elo || 0;
    const nivel = stats.nivel || 0;
    room.sendAnnouncement(
        `📈 ${player.name}, tu ELO actual es ${elo}, Nivel ${nivel}.`,
        player.id,
        0x547B8E,
        "bold"
    );
}

function renameCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (localStorage.getItem(authArray[player.id][0])) {
        var stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));
        if (msgArray.length == 0) {
            stats.playerName = player.name;
        } else {
            stats.playerName = msgArray.join(' ');
        }
        localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));
        room.sendAnnouncement(
            `Te has renombrado en estadisticas como: ${stats.playerName}! ✨\n   Las personas observa demasiado... 😉`,
            player.id,
            successColor,
            'normal',
            HaxNotification.CHAT
        );
    } else {
        room.sendAnnouncement(
            `       No puedes renombrarte!\n Debes de jugar una partida primero 🥴`,
            player.id,
            0xFFA726,
            'normal',
            HaxNotification.CHAT
        );
    }
}

function allTopsCommand(player, message) {
    var statsKeys = ["wins", "losses", "games", "goals", "ownGoals", "assists", "CS", "playtime", "elo"];
    var titleMap = { games: "Partidas", wins: "Victorias", losses: "Derrotas", goals: "Goles", ownGoals: "Autogoles", assists: "Asistencias", CS: "Vallas", playtime: "Tiempo jugado", elo: "ELO" };
    var leaderboard = {};
    for (var key of statsKeys) {
        var localBoard = [];
        for (var i = 0; i < localStorage.length; i++) {
            var storageKey = localStorage.key(i);
            if (storageKey.length == 43) {
                var data = JSON.parse(localStorage.getItem(storageKey));
                if (data[key] !== undefined) localBoard.push([data.playerName, data[key]]);
            }
        }
        if (localBoard.length > 0) {
            localBoard.sort((a, b) => b[1] - a[1]);
            leaderboard[key] = localBoard[0];
        }
    }
    if (Object.keys(leaderboard).length === 0) {
        room.sendAnnouncement("⚠️ Aún no hay datos suficientes para generar los tops.", player.id, errorColor, "bold", HaxNotification.CHAT);
        return;
    }
    var topsString = "🏆 Tops → ";
    for (var key of statsKeys) {
        if (leaderboard[key]) {
            let n = leaderboard[key][0], v = leaderboard[key][1];
            if (key === "playtime") v = getTimeStats(v);
            topsString += `${titleMap[key]}: ${n} [${v}] | `;
        }
    }
    room.sendAnnouncement(topsString.slice(0, -3), player.id, 0xFFD700, "bold", HaxNotification.CHAT);
}

function statsLeaderboardCommand(player, message) {
    var inputKey = message.split(/ +/)[0].substring(1).toLowerCase();
    var statMap = {
        partidas: "games",
        game: "games",
        wins: "wins",
        victorias: "wins",
        losses: "losses",
        perdidas: "losses",
        goals: "goals",
        goles: "goals",
        og: "ownGoals",
        autogoles: "ownGoals",
        ogs: "ownGoals",
        assists: "assists",
        asistencias: "assists",
        cs: "CS",
        vallas: "CS",
        playtime: "playtime",
        tiempo: "playtime",
        elo: "elo",
    };
    var titleMap = {
        games: "Partidas",
        wins: "Ganadas",
        losses: "Perdidas",
        goals: "Goles",
        ownGoals: "Autogoles",
        assists: "Asistencias",
        CS: "Vallas",
        playtime: "Tiempo jugado",
        elo: "ELO",
    };
    var statKey = statMap[inputKey] || inputKey;
    var title = titleMap[statKey] || statKey;
    printRankings(statKey, player.id, title);
}

function streakCommand(player) {
    if (streak.actual === 0 && streak.jugadoresActuales.length === 0) {
        room.sendAnnouncement(
            "⚡ No hay racha activa actualmente. ¡Prepárate para empezar tu primera victoria!",
            player.id,
            0x1E90FF,
            "bold",
            HaxNotification.NONE
        );
        return;
    }
    const mensaje =
        `🔥 Racha Actual: ${streak.actual} ⚡\n` +
        `👥 Jugadores actuales: ${streak.jugadoresActuales.length > 0 ? streak.jugadoresActuales.join(', ') : 'Ninguno'}\n\n` +
        `🏆 Racha Histórica: ${streak.historica} ✨\n` +
        `🎖️ Jugadores históricos: ${streak.jugadoresHistoricos.length > 0 ? streak.jugadoresHistoricos.join(', ') : 'Ninguno'}`;

    room.sendAnnouncement(
        mensaje,
        player.id,
        0x1E90FF,
        "bold",
        HaxNotification.NONE
    );
}

function afkCommand(player, message) {
    const scores = room.getScores();
    let canUseInGame = false;
    if (scores === null) {
        canUseInGame = gameState === State.STOP;
    } else {
        canUseInGame = scores.time <= 30 || gameState === State.STOP;
    }

    if (player.team === Team.SPECTATORS || canUseInGame) {
        if (AFKSet.has(player.id)) {
            if (AFKMinSet.has(player.id)) {
                room.sendAnnouncement(
                    `⏱️ Hay un límite de ${minAFKDuration} minutos para poder usar el comando!`,
                    player.id,
                    errorColor,
                    'normal',
                    HaxNotification.CHAT
                );
            } else {
                AFKSet.delete(player.id);
                room.sendAnnouncement(
                    `🌅 ${player.name} ya no está AFK! ⚡`,
                    null,
                    announcementColor,
                    'italyc',
                    null
                );
                updateTeams();
                handlePlayersJoin();
            }

        } else {
            if (AFKCooldownSet.has(player.id)) {
                room.sendAnnouncement(
                    `🤨 Solo puedes estar AFK cada ${AFKCooldown} minutos. No abuses del comando!`,
                    player.id,
                    errorColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else {
                AFKSet.add(player.id);
                if (!player.admin) {
                    AFKMinSet.add(player.id);
                    AFKCooldownSet.add(player.id);

                    setTimeout((id) => { AFKMinSet.delete(id); }, minAFKDuration * 60 * 1000, player.id);
                    setTimeout((id) => { AFKSet.delete(id); }, maxAFKDuration * 60 * 1000, player.id);
                    setTimeout((id) => { AFKCooldownSet.delete(id); }, AFKCooldown * 60 * 1000, player.id);
                }

                room.setPlayerTeam(player.id, Team.SPECTATORS);
                room.sendAnnouncement(
                    `😴 ${player.name} ahora está fuera de juego!`,
                    null,
                    announcementColor,
                    'normal',
                    null
                );
                updateTeams();
                handlePlayersLeave();
            }
        }

    } else {
        room.sendAnnouncement(
            `⛔ Solo puedes usar !afk en los primeros 30 segundos si estás en cancha`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function afkListCommand(player, message) {
    if (AFKSet.size == 0) {
        room.sendAnnouncement(
            "😴 Nadie esta en la lista\n A quien buscas " + player.name + "?",
            player.id,
            announcementColor,
            'bold',
            null
        );
        return;
    }
    var cstm = '😴 Lista de afks : ';
    AFKSet.forEach((_, value) => {
        var p = room.getPlayer(value);
        if (p != null) cstm += p.name + `, `;
    });
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(cstm, player.id, announcementColor, 'bold', null);
}

function masterCommand(player, message) {
    var msgArray = message.split(/ +/).slice(1);
    if (parseInt(msgArray[0]) == masterPassword) {
        if (!masterList.includes(authArray[player.id][0])) {
            room.setPlayerAdmin(player.id, true);
            adminList = adminList.filter((a) => a[0] != authArray[player.id][0]);
            masterList.push(authArray[player.id][0]);
            room.sendAnnouncement(
                `${player.name} Se ha vuelto un maestro !`,
                null,
                announcementColor,
                'bold',
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `Ya eres maestro!, Acaso estas ciego?`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

let comandoUsadoEstaPartida = false;
function unicomando(player) {
    function reiniciarVotacion() {
        clearTimeout(tiempoVotacion);
        tiempoVotacion = null;
        votosUniformes = {};
        votacionEstaActiva = false;
    }

    if (comandoUsadoEstaPartida) {
        room.sendAnnouncement(
            `No se puede usar el comando mas de una vez por partida. 😅`,
            player.id,
            errorColor,
            'normal',
            HaxNotification.CHAT
        );
        return;
    }

    if (player.team === Team.SPECTATORS) {
        room.sendAnnouncement(
            `🚫 No puedes votar desde espectador.`,
            player.id,
            errorColor,
            'normal',
            HaxNotification.CHAT
        );
        return;
    }

    const players = room.getPlayerList().filter(p => p.team !== Team.SPECTATORS);
    const teamRed = players.filter(p => p.team === Team.RED);
    const teamBlue = players.filter(p => p.team === Team.BLUE);

    const captainRed = teamRed.length > 0 ? teamRed[0] : null;
    const captainBlue = teamBlue.length > 0 ? teamBlue[0] : null;

    if ((captainRed && player.id === captainRed.id) || (captainBlue && player.id === captainBlue.id)) {
        uniformesaleatorios();
        room.sendAnnouncement(
            `👑 ${player.name} (Capitán) cambió los uniformes automáticamente.`,
            null,
            successColor,
            'normal',
            HaxNotification.CHAT
        );
        reiniciarVotacion();
        comandoUsadoEstaPartida = true;
        return;
    }

    if (!tiempoVotacion) {
        votacionEstaActiva = true;
        votosUniformes[player.id] = 1;
        room.sendAnnouncement(
            `🗳️ ${player.name} inició la votación de uniformes. ¡1 voto registrado!`,
            null,
            0x00A2FF,
            'normal',
            HaxNotification.CHAT
        );

        tiempoVotacion = setTimeout(() => {
            room.sendAnnouncement(
                `⏰ Tiempo agotado. La votación de uniformes ha finalizado.`,
                null,
                errorColor,
                'normal',
                HaxNotification.CHAT
            );
            reiniciarVotacion();
        }, 30000);
        return;
    }

    if (!votosUniformes[player.id]) {
        votosUniformes[player.id] = 1;
        const votos = Object.keys(votosUniformes).length;

        room.sendAnnouncement(
            `✅ ${player.name} votó (${votos}/3)`,
            null,
            0x3CE39F,
            'normal',
            HaxNotification.CHAT
        );

        if (votos >= 3) {
            clearTimeout(tiempoVotacion);
            uniformesaleatorios();
            room.sendAnnouncement(
                `🎉 ¡3 votos alcanzados! Uniformes cambiados.`,
                null,
                successColor,
                'normal',
                HaxNotification.CHAT
            );
            reiniciarVotacion();
            comandoUsadoEstaPartida = true;
        }
    } else {
        room.sendAnnouncement(
            `⚠️ Solo puedes votar una vez.`,
            player.id,
            errorColor,
            'normal',
            HaxNotification.CHAT
        );
    }
}

function discordCommand(player) {
    const message = `💬 ¡Únete a nuestro Discord Oficial! 🔗\n${discordlink}`;
    room.sendAnnouncement(message, player.id, 0x7289DA, "bold", HaxNotification.CHAT);
}

function ventajasVip(player) {
    const vipBenefits = [
        "⭐ Beneficios VIP ⭐",
        "1. CMD: Saltar la espera en el pickeo.",
        "2. CMD: Banquear si eres capitán de tu equipo.",
        "3. CMD: Mira las estadisticas de otro jugador ",
        "4. Tamaño de avatar más grande al meter un gol.",
        "5. Insignia de miembro VIP.",
        "6. Acceso a slots privados si la sala se llena.",
        "7. Bonus de elo."
    ];
    const vipPricing = [
        "💵 Precios VIP 💵",
        "$2 mensual",
        "$7 permanente"
    ];
    const message = [...vipBenefits, '', ...vipPricing].join('\n');
    room.sendAnnouncement(message, player.id, 0x00DFFF, 'normal', HaxNotification.CHAT);
}

var lastAdminHelpTime = 0;
function calladminCommand(player, message) {
    var currentTime = Date.now();
    if (currentTime - lastAdminHelpTime < 90000) {
        room.sendAnnouncement(
            "⏳ Ya hubo una llamada, espera 1m 30s antes de hacer otra.",
            player.id, warningColor, 'normal', HaxNotification.MENTION
        );
        return;
    }
    var args = message.trim().split(' ');
    args.shift();
    var reason = args.join(' ');
    if (!reason) {
        room.sendAnnouncement(
            "🤔 Debes indicar un motivo: !call <motivo>",
            player.id, warningColor, 'normal', HaxNotification.MENTION
        );
        return;
    }
    var discordMessage = {
        content: `<@&${idadminrol}>`,
        embeds: [{
            title: "📞 Llamada de ayuda",
            description: `👤 **Jugador:** ${player.name}\n📝 **Razón:** ${reason}\n\n🔗 [Entrar a la sala](${roomLink})`,
            color: announcementColor,
            fields: [
                {
                    name: "🔒 Datos de seguridad",
                    value: `**AUTH:** ${authArray[player.id][0]}\n**CONN:** ${authArray[player.id][1]}`,
                    inline: false
                }
            ],
            footer: { text: roomName }
        }]
    };
    fetch(callsWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordMessage)
    });
    room.sendAnnouncement(
        "✅ Tu llamada fue enviada a los admins.\nSi no recibes respuesta, repórtalo en Discord ❤\nDiscord: " + discordlink,
        player.id, 0xFFEB3B, 'normal', HaxNotification.NONE
    );
    lastAdminHelpTime = currentTime;
};

function votekickCommand(player, message) {
    if (player.admin) {
        room.sendAnnouncement(`⛔ Admins no pueden iniciar votaciones.`, player.id, errorColor, 'bold', HaxNotification.CHAT);
        return;
    }

    const canInit = votekickSystem.canInitiate(player);
    if (!canInit.success) {
        room.sendAnnouncement(canInit.msg, player.id, errorColor, 'bold', HaxNotification.CHAT);
        return;
    }

    const target = votekickSystem.parseTarget(message);
    if (!target.success) {
        room.sendAnnouncement(target.msg, player.id, errorColor, 'bold', HaxNotification.CHAT);
        return;
    }

    if (target.player.id === player.id) {
        room.sendAnnouncement(`❌ No puedes votarte a ti mismo.`, player.id, errorColor, 'bold', HaxNotification.CHAT);
        return;
    }

    votekickSystem.initiate(player, target.player);
}

function voteCommand(player) {
    const canVote = votekickSystem.canVote(player);
    if (!canVote.success) {
        room.sendAnnouncement(canVote.msg, player.id, errorColor, 'bold', HaxNotification.CHAT);
        return;
    }
    votekickSystem.addVote(player);
}

/// Vips Comandos

function skipCommand(player) {
    const conn = authArray[player.id][1];
    const cooldownMs = 9 * 60 * 1000; // 9 minutos

    if (!isVIP(player)) {
        room.sendAnnouncement(
            `💸 ${player.name}, necesitas ser VIP para usar este comando.`,
            player.id,
            0x46A985,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    if (!commandCooldowns.canUse(conn, "skip")) {
        const timeString = commandCooldowns.timeLeftString(conn, "skip");
        room.sendAnnouncement(
            `⏰ Por favor, espera ${timeString} antes de usar este comando nuevamente.`,
            player.id,
            0xFFC857,
            "bold",
            HaxNotification.NONE
        );
        return;
    }

    commandCooldowns.addToCooldown(conn, "skip", cooldownMs);

    room.reorderPlayers([player.id], true);
    room.sendAnnouncement(
        `💎 ¡${player.name} se ha adelantado en la fila!`,
        null,
        0x00BCD4,
        "bold",
        HaxNotification.NONE
    );
}

let usosBanquear = { [Team.RED]: {}, [Team.BLUE]: {} };

function banquearJugador(player, message) {
    const conn = authArray[player.id][1];
    const cooldownMs = 4 * 60 * 1000; // 4 minutos
    const teamUsos = usosBanquear[player.team];

    if (!isVIP(player)) {
        room.sendAnnouncement(
            `💸 ${player.name}, necesitas ser VIP para usar este comando.`,
            player.id,
            0x46A985,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    if (!commandCooldowns.canUse(conn, "banquear")) {
        const timeString = commandCooldowns.timeLeftString(conn, "banquear");
        room.sendAnnouncement(
            `⏰ Por favor, espera ${timeString} antes de usar este comando nuevamente.`,
            player.id,
            0xFFC857,
            "bold",
            HaxNotification.NONE
        );
        return;
    }

    let captain;
    if (teamRed.length <= teamBlue.length && teamRed.length != 0) captain = teamRed[0];
    else if (teamBlue.length < teamRed.length && teamBlue.length != 0) captain = teamBlue[0];

    if (player.id !== captain?.id) {
        room.sendAnnouncement(
            `¡Solo el capitán del equipo puede usar este comando!`,
            player.id,
            errorColor,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    const jugadoresActivos = teamRed.length + teamBlue.length - AFKSet.size;
    const minimoRequerido = (2 * teamSize) + 2;
    if (jugadoresActivos < minimoRequerido) {
        room.sendAnnouncement(
            `Se necesitan al menos ${minimoRequerido} jugadores activos para usar este comando.`,
            player.id,
            errorColor,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    if (Object.keys(teamUsos).length > 0) {
        room.sendAnnouncement(
            `🔴 Tu equipo ya ha usado este comando en esta partida.`,
            player.id,
            errorColor,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    const scores = room.getScores();
    let canUse = false;
    if (scores === null) canUse = gameState === State.STOP;
    else canUse = scores.time <= 30 || gameState === State.STOP;
    if (!canUse) {
        room.sendAnnouncement(
            `⏰ Este comando solo se puede usar durante los primeros 30 segundos de la partida.`,
            player.id,
            errorColor,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    const targetId = parseInt(message.split(/ +/)[1]?.replace('#', ''));
    const targetPlayer = room.getPlayer(targetId);
    if (!targetPlayer || targetPlayer.id === player.id || player.team !== targetPlayer.team || targetPlayer.team === Team.SPECTATORS) {
        room.sendAnnouncement(
            `Comando inválido o el jugador no está en el mismo equipo.`,
            player.id,
            errorColor,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    if (targetPlayer.team === Team.RED) playerExitPositions.red.push({ position: targetPlayer.position });
    else if (targetPlayer.team === Team.BLUE) playerExitPositions.blue.push({ position: targetPlayer.position });

    commandCooldowns.addToCooldown(conn, "banquear", cooldownMs);
    teamUsos[player.id] = true;

    room.setPlayerTeam(targetPlayer.id, Team.SPECTATORS);
    room.sendAnnouncement(
        `${player.name} ha banqueado a ${targetPlayer.name}.`,
        null,
        announcementColor,
        "bold",
        HaxNotification.CHAT
    );

    updateTeams();
    handlePlayersLeave();
}

function verStatsCommand(player, message) {
    if (!isVIP(player)) {
        room.sendAnnouncement(
            `💸 ${player.name}, necesitas ser VIP para usar este comando.`,
            player.id,
            0x46A985,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    const targetId = parseInt(message.split(/ +/)[1]?.replace('#', ''));
    const targetPlayer = room.getPlayer(targetId);

    if (!targetPlayer) {
        room.sendAnnouncement(
            `⚠️ Jugador no encontrado. Usa !ver #<ID>.`,
            player.id,
            0xFF5722,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    let stats = new HaxStatistics(targetPlayer.name);
    if (localStorage.getItem(authArray[targetPlayer.id][0])) {
        stats = JSON.parse(localStorage.getItem(authArray[targetPlayer.id][0]));
    }

    const statsString = printPlayerStats(stats);
    room.sendAnnouncement(
        `📊 Estadísticas de ${targetPlayer.name}:\n${statsString}`,
        player.id,
        0xFFEB3B,
        "bold",
        HaxNotification.CHAT
    );
}

/* ADMIN COMMANDS */

function anunciar(player, message) {
    if (!message || message.trim() === '') {
        room.sendAnnouncement(
            'Debes escribir un mensaje para anunciar.',
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }
    room.sendAnnouncement(
        `${player.name} dice: ${message}`,
        null,
        announcementColor,
        'bold',
        HaxNotification.MENTION
    );
}


function restartCommand(player, message) {
    instantRestart();
}

function restartSwapCommand(player, message) {
    room.stopGame();
    swapButton();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function swapCommand(player, message) {
    if (playSituation == Situation.STOP) {
        swapButton();
        room.sendAnnouncement(
            '✔️ Teams swapped !',
            null,
            announcementColor,
            'bold',
            null
        );
    } else {
        room.sendAnnouncement(
            `No puedes usar este comando en plena partida.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
    }
}

function kickTeamCommand(player, message) {
    var msgArray = message.split(/ +/);
    var reasonString = `Equipo Kickeado por ${player.name}`;
    if (msgArray.length > 1) {
        reasonString = msgArray.slice(1).join(' ');
    }
    if (['!kickred', '!kickr'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamRed.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamRed[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickblue', '!kickb'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamBlue.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamBlue[0].id, reasonString, false);
            }, i * 20)
        }
    } else if (['!kickspec', '!kicks'].includes(msgArray[0].toLowerCase())) {
        for (let i = 0; i < teamSpec.length; i++) {
            setTimeout(() => {
                room.kickPlayer(teamSpec[0].id, reasonString, false);
            }, i * 20)
        }
    }
}

function stadiumCommand(player, message) {
    var msgArray = message.split(/ +/);
    if (gameState == State.STOP) {
        if (['!futsalx2'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(mDosMap).name == 'Classic') {
                room.setDefaultStadium('Classic');
            } else {
                room.setCustomStadium(mDosMap);
            }
            currentStadium = 'futsalx2';
            defmode = false;
        } else if (['!futsalx3'].includes(msgArray[0].toLowerCase())) {
            if (JSON.parse(mTresMap).name == 'Big') {
                room.setDefaultStadium('Big');
            } else {
                room.setCustomStadium(mTresMap);
            }
            currentStadium = 'futsalx3';
            defmode = true;
        } else if (['!entrenamiento'].includes(msgArray[0].toLowerCase())) {
            room.setCustomStadium(entrenamientoMap);
            currentStadium = 'entrenamiento';
            defmode = false;
        } else {
            room.sendAnnouncement(
                `Estadio invalido.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
    } else {
        room.sendAnnouncement(
            `No puedes usar este comando ahora!, Hay una partida en curso.`,
            player.id,
            errorColor,
            'normal',
            HaxNotification.CHAT
        );
    }
}


function muteCommand(player, message) {
    let args = message.split(/ +/).slice(1);

    if (args.length === 0) {
        room.sendAnnouncement(
            "ℹ️ Uso incorrecto. Escribe `!help mute` para más información.",
            player.id,
            0xcc6666,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    if (!(args[0].startsWith("#"))) {
        room.sendAnnouncement(
            "ℹ️ Formato inválido. Escribe `!help mute` para más información.",
            player.id,
            0xcc6666,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    let targetId = parseInt(args[0].substring(1));
    let target = room.getPlayer(targetId);

    if (!target) {
        room.sendAnnouncement(
            "❔ No existe un jugador con ese ID. Usa `!help mute` para más detalles.",
            player.id,
            0xcc6666,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    let minutosMute = muteDuration;
    if (args.length > 1 && parseInt(args[1]) > 0) {
        minutosMute = parseInt(args[1]);
    }

    if (target.admin) {
        room.sendAnnouncement(
            "⛔ No puedes silenciar a un admin.",
            player.id,
            0xcc9966,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    let muteObj = new MutePlayer(target.name, target.id, authArray[target.id][0]);
    muteObj.setDuration(minutosMute);

    room.sendAnnouncement(
        `🔕 ${target.name} ha sido silenciado por ${minutosMute} min.`,
        null,
        0x6699cc,
        null,
        null
    );
}


function unmuteCommand(player, message) {
    let args = message.split(/ +/).slice(1);

    if (args.length === 0) {
        room.sendAnnouncement(
            "⚠️ Debes indicar a quién quieres desmutear. Escribe `!help unmute` para más información.",
            player.id,
            0xcc6666,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    if (!args[0].startsWith("#")) {
        room.sendAnnouncement(
            "⚠️ Formato inválido. Escribe `!help unmute` para más información.",
            player.id,
            0xcc6666,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    let targetId = parseInt(args[0].substring(1));
    let target = room.getPlayer(targetId);

    if (!target) {
        room.sendAnnouncement(
            "❔ No hay ningún jugador con ese ID en la sala. Usa `!help unmute` para más detalles.",
            player.id,
            0xcc6666,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    let muteObj = muteArray.getByPlayerId(target.id);
    if (!muteObj) {
        room.sendAnnouncement(
            "ℹ️ Este jugador no está silenciado.",
            player.id,
            0x66cc99,
            null,
            HaxNotification.CHAT
        );
        return;
    }

    muteObj.remove();

    room.sendAnnouncement(
        `🔓 ${target.name} ha sido desmuteado.`,
        null,
        0x6699cc,
        "bold",
        HaxNotification.CHAT
    );
}


function muteListCommand(player, message) {
    if (muteArray.list.length === 0) {
        room.sendAnnouncement(
            "ℹ️ La lista de silenciados está vacía.",
            player.id,
            0x66cc99,
            null,
            null
        );
        return false;
    }

    let lista = '🔇 Jugadores silenciados: ';
    for (let mute of muteArray.list) {
        lista += `${mute.name} [${mute.id}], `;
    }
    lista = lista.slice(0, -2) + '.';

    room.sendAnnouncement(
        lista,
        player.id,
        0x6699cc,
        null,
        null
    );
}


/* MASTER COMMANDS */

function clearbansCommand(player, message) {
    let args = message.split(/ +/).slice(1);

    if (args.length === 1 && args[0].toLowerCase() === "yes") {
        room.clearBans();
        banList = [];
        room.sendAnnouncement(
            "✔️ Todos los bans han sido eliminados.",
            null,
            0x6699cc,
            "bold",
            null
        );
        return;
    }

    if (args.length === 0) {
        room.sendAnnouncement(
            "⚠️ Para eliminar todos los bans escribe: !clearbans yes",
            player.id,
            0xcc6666,
            "bold",
            HaxNotification.CHAT
        );
        return;
    }

    if (args.length === 1) {
        let ID = parseInt(args[0]);

        if (isNaN(ID) || ID <= 0) {
            room.sendAnnouncement(
                "⚠️ ID inválido. Usa `!help clearbans` para más información.",
                player.id,
                0xcc6666,
                "bold",
                HaxNotification.CHAT
            );
            return;
        }

        let banEntry = banList.find(p => p[1] === ID);
        room.clearBan(ID);
        banList = banList.filter(p => p[1] !== ID);

        if (banEntry) {
            room.sendAnnouncement(
                `✔️ ${banEntry[0]} ha sido desbaneado.`,
                null,
                0x66cc99,
                "bold",
                null
            );
        } else {
            room.sendAnnouncement(
                "⚠️ No hay ningún ban asociado a ese ID. Usa `!help clearbans` para más información.",
                player.id,
                0xcc6666,
                "bold",
                HaxNotification.CHAT
            );
        }
        return;
    }
    room.sendAnnouncement(
        "⚠️ Número de argumentos incorrecto. Usa `!help clearbans` para más información.",
        player.id,
        0xcc6666,
        "bold",
        HaxNotification.CHAT
    );
}

function banListCommand(player, message) {
    if (banList.length === 0) {
        room.sendAnnouncement(
            "ℹ️ La lista de bans está vacía.",
            player.id,
            0x66cc99
        );
        return false;
    }

    let lista = '📢 Lista de bans:';
    for (let ban of banList) {
        lista += `\n👤 ${ban[0]} | ID: [${ban[1]}] | Razón: ${ban[3]}`;
    }

    room.sendAnnouncement(
        lista,
        player.id,
        0x6699cc
    );
}

function vipListCommand(player, message) {
    if (vipList.length === 0) {
        room.sendAnnouncement(
            "ℹ️ No hay ningún VIP en la lista.",
            player.id,
            0x66cc99,
            null,
            null
        );
        return false;
    }

    let lista = '⭐ Lista de VIPs: ';
    for (let i = 0; i < vipList.length; i++) {
        lista += `${vipList[i][1]} [${i}], `;
    }
    lista = lista.slice(0, -2) + '.';

    room.sendAnnouncement(
        lista,
        player.id,
        0xffd700,
        null,
        null
    );
}

function setVipCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);

    if (msgArray.length === 0) {
        room.sendAnnouncement(
            `❌ Número de argumentos incorrecto. Usa "!help setvip" para más información.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    if (!msgArray[0].startsWith('#')) {
        room.sendAnnouncement(
            `❌ Formato incorrecto. Usa "!help setvip" para más información.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    let targetId = parseInt(msgArray[0].substring(1));
    let playerVip = room.getPlayer(targetId);

    if (!playerVip) {
        room.sendAnnouncement(
            `❌ No hay ningún jugador con esa ID en la sala.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    let auth = authArray[playerVip.id][0];

    if (vipList.some(v => v[0] === auth)) {
        room.sendAnnouncement(
            `⚠️ Este jugador ya es VIP.`,
            player.id,
            0xffcc66,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    vipList.push([auth, playerVip.name]);
    room.sendAnnouncement(
        `✅ ${playerVip.name} ahora es VIP de la sala.`,
        null,
        0xffd700,
        null,
        HaxNotification.CHAT
    );
}

function removeVipCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);

    if (msgArray.length === 0) {
        room.sendAnnouncement(
            `❌ Número de argumentos incorrecto. Usa "!help removevip" para más información.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    if (!msgArray[0].startsWith('#')) {
        room.sendAnnouncement(
            `❌ Formato incorrecto. Usa "!help removevip" para más información.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    let targetId = parseInt(msgArray[0].substring(1));
    let playerVip = room.getPlayer(targetId);

    if (!playerVip) {
        room.sendAnnouncement(
            `❌ No hay ningún jugador con esa ID en la sala.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    let auth = authArray[playerVip.id][0];

    if (!vipList.some(v => v[0] === auth)) {
        room.sendAnnouncement(
            `⚠️ Este jugador no es VIP.`,
            player.id,
            0xffcc66,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    vipList = vipList.filter(v => v[0] !== auth);

    room.sendAnnouncement(
        `✅ ${playerVip.name} ya no es VIP de la sala.`,
        null,
        0xffd700,
        null,
        HaxNotification.CHAT
    );
}

function adminListCommand(player, message) {
    if (adminList.length === 0) {
        room.sendAnnouncement(
            "ℹ️ No hay ningún administrador en la lista.",
            player.id,
            0x66cc99,
            null,
            null
        );
        return false;
    }

    let lista = '📢 Lista de administradores: ';
    for (let i = 0; i < adminList.length; i++) {
        lista += `${adminList[i][1]} [${i}], `;
    }
    lista = lista.slice(0, -2) + '.';

    room.sendAnnouncement(
        lista,
        player.id,
        0x6699cc,
        null,
        null
    );
}

function setAdminCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);

    if (msgArray.length === 0) {
        room.sendAnnouncement(
            `❌ Número de argumentos incorrecto. Usa "!help setadmin" para más información.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    if (!msgArray[0].startsWith('#')) {
        room.sendAnnouncement(
            `❌ Formato incorrecto. Usa "!help setadmin" para más información.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    let targetId = parseInt(msgArray[0].substring(1));
    let playerAdmin = room.getPlayer(targetId);

    if (!playerAdmin) {
        room.sendAnnouncement(
            `❌ No hay ningún jugador con esa ID en la sala.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    let auth = authArray[playerAdmin.id][0];

    if (adminList.some(a => a[0] === auth)) {
        room.sendAnnouncement(
            `⚠️ Este jugador ya es un admin permanente.`,
            player.id,
            0xffcc66,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    if (masterList.includes(auth)) {
        room.sendAnnouncement(
            `⚠️ Este jugador ya es un master.`,
            player.id,
            0xffcc66,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    room.setPlayerAdmin(playerAdmin.id, true);
    adminList.push([auth, playerAdmin.name]);
    room.sendAnnouncement(
        `✅ ${playerAdmin.name} ahora es admin de la sala.`,
        null,
        0x66ccff,
        null,
        HaxNotification.CHAT
    );
}

function removeAdminCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);

    if (msgArray.length === 0) {
        room.sendAnnouncement(
            `❌ Número de argumentos incorrecto. Usa "!help removeadmin" para más información.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    if (!msgArray[0].startsWith('#')) {
        room.sendAnnouncement(
            `❌ Formato incorrecto. Usa "!help removeadmin" para más información.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    let targetId = parseInt(msgArray[0].substring(1));
    let playerAdmin = room.getPlayer(targetId);

    if (!playerAdmin) {
        room.sendAnnouncement(
            `❌ No hay ningún jugador con esa ID en la sala.`,
            player.id,
            0xff6666,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    let auth = authArray[playerAdmin.id][0];

    if (!adminList.some(a => a[0] === auth)) {
        room.sendAnnouncement(
            `⚠️ Este jugador no es un admin permanente.`,
            player.id,
            0xffcc66,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    room.setPlayerAdmin(playerAdmin.id, false);
    adminList = adminList.filter(a => a[0] !== auth);

    room.sendAnnouncement(
        `✅ ${playerAdmin.name} ya no es admin de la sala.`,
        null,
        0x66ccff,
        null,
        HaxNotification.CHAT
    );
}

function passwordCommand(player, message) {
    let msgArray = message.split(/ +/).slice(1);

    if (msgArray.length > 0) {
        let newPassword = msgArray.join(' ').trim();

        if (newPassword === '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `🔓 La contraseña de la sala ha sido eliminada.`,
                player.id,
                0x66ccff,
                null,
                HaxNotification.CHAT
            );
        } else {
            roomPassword = newPassword;
            room.setPassword(roomPassword);
            room.sendAnnouncement(
                `🔑 La nueva contraseña de la sala es: ${roomPassword}`,
                player.id,
                0x66ccff,
                null,
                HaxNotification.CHAT
            );

            if (roomWebhook != '') {
                fetch(roomWebhook, {
                    method: 'POST',
                    body: JSON.stringify({
                        content: `🔑 La sala ahora tiene la contraseña: **${roomPassword}**`,
                        username: roomName,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res);
            }
        }
    } else {
        if (roomPassword !== '') {
            roomPassword = '';
            room.setPassword(null);
            room.sendAnnouncement(
                `🔓 La contraseña de la sala ha sido eliminada.`,
                player.id,
                0x66ccff,
                null,
                HaxNotification.CHAT
            );
        } else {
            room.sendAnnouncement(
                `⚠️ La sala actualmente no tiene contraseña. Usa "!help password" para más info.`,
                player.id,
                0xffcc66,
                'bold',
                HaxNotification.CHAT
            );
        }
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    if (game != undefined) game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0 && playSituation == Situation.PLAY) {
        if (scores.red != scores.blue) {
            if (!checkTimeVariable) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        if (drawTimeLimit != 0) {
            goldenGoal = true;
            room.sendAnnouncement(
                '⚽ Primer gol gana',
                null,
                announcementColor,
                'bold',
                HaxNotification.MENTION
            );
            setTimeout(() => {
                room.sendAnnouncement(
                    `⏱ ¡Golden Goal activado! Si nadie marca en los próximos ${drawTimeLimit} minutos,\nla partida terminará en empate ⚽️🤝`,
                    null,
                    0xFFEB3B,
                    'normal',
                    HaxNotification.MENTION
                );
            }, 3000);
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60 - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (!checkTimeVariable) {
            checkTimeVariable = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(
                `⏱ ¡El tiempo extra ha terminado! La partida acaba en empate 🤝`,
                null,
                0xFFEB3B,
                'normal',
                HaxNotification.MENTION
            );
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}


function instantRestart() {
    room.stopGame();
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 10);
}

function resumeGame() {
    startTimeout = setTimeout(() => {
        room.startGame();
    }, 1000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 500);
}

function endGame(winner) {
    if (players.length >= 2 * teamSize - 1) activateChooseMode();

    const scores = room.getScores();
    game.scores = scores;
    lastWinner = winner;
    endGameVariable = true;

    let mensajeGanador = "";
    let mensajeHist = "";
    let equipoGanador = "";

    if (winner === Team.RED) {
        equipoGanador = "rojo";
        if (streak.equipo !== "rojo") {
            streak.actual = 0;
            streak.jugadoresActuales = [];
        }
        streak.equipo = "rojo";
        streak.actual++;
        streak.jugadoresActuales = getPlayerNamesFromTeam(teamRed);

        if (streak.actual > streak.historica) {
            streak.historica = streak.actual;
            streak.jugadoresHistoricos = [...streak.jugadoresActuales];
            mensajeHist = `📊 El equipo rojo establece nueva **racha histórica**: ${streak.historica} victorias consecutivas.`;

            fetch(streakWebhook, {
                method: "POST",
                body: JSON.stringify({
                    username: roomName,
                    embeds: [{
                        title: "Racha histórica alcanzada",
                        description: `El equipo rojo ha fijado un nuevo registro con **${streak.historica} victorias consecutivas**.`,
                        color: 0x8B0000,
                        fields: [
                            {
                                name: "Jugadores clave",
                                value: streak.jugadoresHistoricos.length > 0
                                    ? streak.jugadoresHistoricos.join(", ")
                                    : "Ninguno",
                            },
                            {
                                name: "Sala",
                                value: roomName,
                                inline: true
                            }
                        ],
                        timestamp: new Date()
                    }]
                }),
                headers: { "Content-Type": "application/json" }
            }).catch(err => console.error("Error al enviar webhook de racha:", err));

        } else if (streak.actual === streak.historica) {
            mensajeHist = `⚡ El equipo rojo iguala la mejor marca histórica con ${streak.historica} triunfos consecutivos.`;
        }

        mensajeGanador = `El equipo rojo se impone con un marcador de ${scores.red} - ${scores.blue}.`;

    } else if (winner === Team.BLUE) {
        equipoGanador = "azul";
        if (streak.equipo !== "azul") {
            streak.actual = 0;
            streak.jugadoresActuales = [];
        }
        streak.equipo = "azul";
        streak.actual++;
        streak.jugadoresActuales = getPlayerNamesFromTeam(teamBlue);

        if (streak.actual > streak.historica) {
            streak.historica = streak.actual;
            streak.jugadoresHistoricos = [...streak.jugadoresActuales];
            mensajeHist = `📊 El equipo azul establece nueva **racha histórica**: ${streak.historica} victorias consecutivas.`;

            fetch(streakWebhook, {
                method: "POST",
                body: JSON.stringify({
                    username: roomName,
                    embeds: [{
                        title: "Racha histórica alcanzada",
                        description: `El equipo azul ha fijado un nuevo registro con **${streak.historica} victorias consecutivas**.`,
                        color: 0x1E3A8A,
                        fields: [
                            {
                                name: "Jugadores clave",
                                value: streak.jugadoresHistoricos.length > 0
                                    ? streak.jugadoresHistoricos.join(", ")
                                    : "Ninguno",
                            },
                            {
                                name: "Sala",
                                value: roomName,
                                inline: true
                            }
                        ],
                        timestamp: new Date()
                    }]
                }),
                headers: { "Content-Type": "application/json" }
            }).catch(err => console.error("Error al enviar webhook de racha:", err));

        } else if (streak.actual === streak.historica) {
            mensajeHist = `⚡ El equipo azul iguala la mejor marca histórica con ${streak.historica} victorias seguidas.`;
        }

        mensajeGanador = `El equipo azul se impone con un marcador de ${scores.blue} - ${scores.red}.`;

    } else {
        streak.actual = 0;
        streak.equipo = null;
        streak.jugadoresActuales = [];
        room.sendAnnouncement(
            "El partido finalizó en empate. La racha queda en cero.",
            null,
            0x808080,
            "bold",
            HaxNotification.CHAT
        );
    }

    let possessionRedPct = (possession[0] / (possession[0] + possession[1])) * 100;
    let possessionBluePct = 100 - possessionRedPct;
    let possessionString = `🔴 ${possessionRedPct.toFixed(0)}% - ${possessionBluePct.toFixed(0)}% 🔵`;

    let actionRedPct = (actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1])) * 100;
    let actionBluePct = 100 - actionRedPct;
    let actionString = `🔴 ${actionRedPct.toFixed(0)}% - ${actionBluePct.toFixed(0)}% 🔵`;

    let CSString = getCSString(scores);

    if (winner === Team.RED || winner === Team.BLUE) {
        const resumen = [
            mensajeGanador,
            `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,
            `- Posesión: ${possessionString}`,
            `- Zona de acción: ${actionString}`,
            `- ${CSString}`,
            `Racha actual: ${streak.actual} victorias seguidas`,
            `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,
            mensajeHist ? mensajeHist : null
        ].filter(Boolean).join("\n");

        room.sendAnnouncement(
            resumen,
            null,
            0xFFC857,
            "normal",
            HaxNotification.CHAT
        );
    }

    updateStats();
}

/* CHOOSING FUNCTIONS */

function activateChooseMode() {
    chooseMode = true;
    slowMode = chooseModeSlowMode;
    room.sendAnnouncement(
        `🐢 Modo lento ajustado a la duración del Modo Elección: ${chooseModeSlowMode}s.`,
        null,
        announcementColor,
        'bold',
        HaxNotification.CHAT
    );
}

function deactivateChooseMode() {
    chooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != defaultSlowMode) {
        slowMode = defaultSlowMode;
        room.sendAnnouncement(
            `🐢 Modo lento restablecido a la duración predeterminada: ${defaultSlowMode}s.`,
            null,
            announcementColor,
            'bold',
            HaxNotification.CHAT
        );
    }
    redCaptainChoice = '';
    blueCaptainChoice = '';
}

function getSpecList(player) {
    if (player == null) return null;
    var cstm = 'Players : ';
    for (let i = 0; i < teamSpec.length; i++) {
        cstm += teamSpec[i].name + `[${i + 1}], `;
    }
    cstm = cstm.substring(0, cstm.length - 2) + '.';
    room.sendAnnouncement(
        cstm,
        player.id,
        infoColor,
        'bold',
        HaxNotification.CHAT
    );
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    let captain;
    if (teamRed.length <= teamBlue.length && teamRed.length != 0) {
        captain = teamRed[0];
    } else if (teamBlue.length < teamRed.length && teamBlue.length != 0) {
        captain = teamBlue[0];
    }
    if (captain != null) {
        room.sendAnnouncement(
            "Para elegir a un jugador, escribe su número en la lista, o usa 'top', 'random' o 'bottom'. ⚽",
            captain.id,
            infoColor,
            'bold',
            HaxNotification.MENTION
        );
        timeOutCap = setTimeout(
            (player) => {
                room.sendAnnouncement(
                    `¡Apúrate, ${player.name}! ⏰ Solo quedan ${Number.parseInt(String(chooseTime / 2))} segundos para elegir.`,
                    player.id,
                    warningColor,
                    'bold',
                    HaxNotification.MENTION
                );
                timeOutCap = setTimeout(
                    (player) => {
                        room.kickPlayer(
                            player.id,
                            "¡Se te acabó el tiempo! ⏳ No elegiste a ningún jugador.",
                            false
                        );
                    },
                    chooseTime * 500,
                    captain
                );
            },
            chooseTime * 1000,
            captain
        );
    }
    if (teamRed.length != 0 && teamBlue.length != 0) {
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
}

function chooseModeFunction(player, message) {
    var msgArray = message.split(/ +/);
    if (player.id == teamRed[0].id || player.id == teamBlue[0].id) {
        if (teamRed.length <= teamBlue.length && player.id == teamRed[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
                redCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Top !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
                redCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Random !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
                redCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Bottom !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Your number is invalid !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.RED
                    );
                    room.sendAnnouncement(
                        `${player.name} chose ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
        if (teamRed.length > teamBlue.length && player.id == teamBlue[0].id) {
            if (['top', 'auto'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                blueCaptainChoice = 'top';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Top !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['random', 'rand'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(
                    teamSpec[getRandomInt(teamSpec.length)].id,
                    Team.BLUE
                );
                blueCaptainChoice = 'random';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Random !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (['bottom', 'bot'].includes(msgArray[0].toLowerCase())) {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
                blueCaptainChoice = 'bottom';
                clearTimeout(timeOutCap);
                room.sendAnnouncement(
                    `${player.name} chose Bottom !`,
                    null,
                    announcementColor,
                    'bold',
                    HaxNotification.CHAT
                );
            } else if (!Number.isNaN(Number.parseInt(msgArray[0]))) {
                if (Number.parseInt(msgArray[0]) > teamSpec.length || Number.parseInt(msgArray[0]) < 1) {
                    room.sendAnnouncement(
                        `Your number is invalid !`,
                        player.id,
                        errorColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                } else {
                    room.setPlayerTeam(
                        teamSpec[Number.parseInt(msgArray[0]) - 1].id,
                        Team.BLUE
                    );
                    room.sendAnnouncement(
                        `${player.name} chose ${teamSpec[Number.parseInt(msgArray[0]) - 1].name} !`,
                        null,
                        announcementColor,
                        'bold',
                        HaxNotification.CHAT
                    );
                }
            } else return false;
            return true;
        }
    }
}

function checkCaptainLeave(player) {
    if (
        (teamRed.findIndex((red) => red.id == player.id) == 0 && chooseMode && teamRed.length <= teamBlue.length) ||
        (teamBlue.findIndex((blue) => blue.id == player.id) == 0 && chooseMode && teamBlue.length < teamRed.length)
    ) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
}

function slowModeFunction(player, message) {
    if (!player.admin) {
        if (!SMSet.has(player.id)) {
            SMSet.add(player.id);
            setTimeout(
                (number) => {
                    SMSet.delete(number);
                },
                slowMode * 1000,
                player.id
            );
        } else {
            return true;
        }
    }
    return false;
}

/* PLAYER FUNCTIONS */

function updateTeams() {
    playersAll = room.getPlayerList();
    players = playersAll.filter((p) => !AFKSet.has(p.id));
    teamRed = players.filter((p) => p.team == Team.RED);
    teamBlue = players.filter((p) => p.team == Team.BLUE);
    teamSpec = players.filter((p) => p.team == Team.SPECTATORS);
}

function updateAdmins(excludedPlayerID = 0) {
    if (players.length != 0 && players.filter((p) => p.admin).length < maxAdmins) {
        let playerArray = players.filter((p) => p.id != excludedPlayerID && !p.admin);
        let arrayID = playerArray.map((player) => player.id);
        room.setPlayerAdmin(Math.min(...arrayID), true);
    }
}

function getRole(player) {
    let role = Role.PLAYER;
    if (!!vipList.find(a => a == authArray[player.id][0])) {
        role = Role.VIP;
    }
    if (!!adminList.find(a => a[0] == authArray[player.id][0])) {
        role = Math.max(role, Role.ADMIN_TEMP);
    }
    if (player.admin) {
        role = Math.max(role, Role.ADMIN_PERM);
    }
    if (!!masterList.find(a => a == authArray[player.id][0])) {
        role = Role.MASTER;
    }
    return role;
}

function isVIP(player) {
    const authId = authArray[player.id][0];
    return vipList.some(v => v[0] === authId);
}

function ghostKickHandle(oldP, newP) {
    var teamArrayId = getTeamArray(oldP.team, true).map((p) => p.id);
    teamArrayId.splice(teamArrayId.findIndex((id) => id == oldP.id), 1, newP.id);

    room.kickPlayer(oldP.id, 'Bug? o doble conexión?', false);
    room.setPlayerTeam(newP.id, oldP.team);
    room.setPlayerAdmin(newP.id, oldP.admin);
    room.reorderPlayers(teamArrayId, true);

    if (oldP.team != Team.SPECTATORS && playSituation != Situation.STOP) {
        var discProp = room.getPlayerDiscProperties(oldP.id);
        room.setPlayerDiscProperties(newP.id, discProp);
    }
}

/* ACTIVITY FUNCTIONS */

function handleActivityPlayer(player) {
    let pComp = getPlayerComp(player);
    if (pComp != null) {
        pComp.inactivityTicks++;
        if (pComp.inactivityTicks == 60 * ((2 / 3) * afkLimit)) {
            room.sendAnnouncement(
                `⛔ ${player.name}, te quedan ${Math.floor(afkLimit / 3)} segundos para moverte o enviar un mensaje`,
                player.id,
                warningColor,
                'normal',
                HaxNotification.MENTION
            );
            return;
        }
        if (pComp.inactivityTicks >= 60 * afkLimit) {
            pComp.inactivityTicks = 0;
            if (game.scores.time <= afkLimit - 0.5) {
                setTimeout(() => {
                    !chooseMode ? instantRestart() : room.stopGame();
                }, 10);
            }
            room.sendAnnouncement(player.name + " ha sido removido por inactividad 🩸", null, warningColor, "bold", HaxNotification.CHAT );
            room.kickPlayer(player.id, 'AFK', false);
        }
    }
}

function handleActivityPlayerTeamChange(changedPlayer) {
    if (changedPlayer.team == Team.SPECTATORS) {
        let pComp = getPlayerComp(changedPlayer);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivityStop() {
    for (let player of players) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
}

function handleActivity() {
    if (gameState === State.PLAY && players.length > 1) {
        for (let player of teamRed) {
            handleActivityPlayer(player);
        }
        for (let player of teamBlue) {
            handleActivityPlayer(player);
        }
    }
}

/* LINEUP FUNCTIONS */

function getStartingLineups() {
    var compositions = [[], []];
    for (let player of teamRed) {
        compositions[0].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    for (let player of teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

function handleLineupChangeTeamChange(changedPlayer) {
    if (gameState != State.STOP) {
        var playerLineup;
        if (changedPlayer.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[0][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[0].push(playerLineup);
            }
        } else if (changedPlayer.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = game.playerComp[1][ind];
                if (playerLineup.timeExit.includes(game.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != game.scores.time);
                } else {
                    playerLineup.timeEntry.push(game.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [game.scores.time],
                    []
                );
                game.playerComp[1].push(playerLineup);
            }
        }
        if (teamRed.some((r) => r.id == changedPlayer.id)) {
            // player leaves red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (teamBlue.some((r) => r.id == changedPlayer.id)) {
            // player leaves blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

function handleLineupChangeLeave(player) {
    if (playSituation != Situation.STOP) {
        if (player.team == Team.RED) {
            // player gets in red team
            var redLineupAuth = game.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            var playerLineup = game.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        } else if (player.team == Team.BLUE) {
            // player gets in blue team
            var blueLineupAuth = game.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[player.id][0]);
            var playerLineup = game.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(game.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (game.scores.time == 0) {
                    game.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != game.scores.time);
                }
            } else {
                playerLineup.timeExit.push(game.scores.time);
            }
        }
    }
}

/* TEAM BALANCE FUNCTIONS */

function balanceTeams() {
    if (!chooseMode) {
        if (players.length == 0) {
            room.stopGame();
            room.setScoreLimit(scoreLimit);
            room.setTimeLimit(timeLimit);
        } else if (players.length == 1 && teamRed.length == 0) {
            instantRestart();
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!entrenamiento`);
            }, 5);
            room.setPlayerTeam(players[0].id, Team.RED);
        } else if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length && teamSpec.length > 0) {
            const n = Math.abs(teamRed.length - teamBlue.length);
            if (players.length == 2) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!futsalx2`);
                }, 5);
            }
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.BLUE);
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamSpec[i].id, Team.RED);
                }
            }
        } else if (Math.abs(teamRed.length - teamBlue.length) > teamSpec.length) {
            const n = Math.abs(teamRed.length - teamBlue.length);
            if (players.length == 1) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!entrenamiento`);
                }, 5);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            } else if (teamSize > 2 && players.length == 5) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!futsalx2`);
                }, 5);
            }
            if (players.length == teamSize * 2 - 1) {
                teamRedStats = [];
                teamBlueStats = [];
            }
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(
                        teamRed[teamRed.length - 1 - i].id,
                        Team.SPECTATORS
                    );
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(
                        teamBlue[teamBlue.length - 1 - i].id,
                        Team.SPECTATORS
                    );
                }
            }
        } else if (Math.abs(teamRed.length - teamBlue.length) < teamSpec.length && teamRed.length != teamBlue.length) {
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        } else if (teamSpec.length >= 2 && teamRed.length == teamBlue.length && teamRed.length < teamSize) {
            if (teamRed.length == 2) {
                instantRestart();
                setTimeout(() => {
                    stadiumCommand(emptyPlayer, `!futsalx3`);
                }, 5);
            }
            topButton();
        }
    }
}

function handlePlayersJoin() {
    if (chooseMode) {
        if (teamSize > 2 && players.length == 6) {
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!futsalx3`);
            }, 5);
        }
        getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
    }
    balanceTeams();
}

function handlePlayersLeave() {
    if (gameState != State.STOP) {
        var scores = room.getScores();
        if (players.length >= 2 * teamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamRed.length != teamBlue.length) {
            var rageQuitCheck = false;
            if (teamRed.length < teamBlue.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    rageQuitCheck = true;
                }
            } else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    rageQuitCheck = true;
                }
            }
            if (rageQuitCheck) {
                room.sendAnnouncement(
                    "Se detectó un abandono, partida finalizada",
                    null,
                    infoColor,
                    'bold',
                    HaxNotification.MENTION
                )
                stopTimeout = setTimeout(() => {
                    room.stopGame();
                }, 100);
                return;
            }
        }
    }
    if (chooseMode) {
        if (teamSize > 2 && players.length == 5) {
            setTimeout(() => {
                stadiumCommand(emptyPlayer, `!futsalx2`);
            }, 5);
        }
        if (teamRed.length == 0 || teamBlue.length == 0) {
            room.setPlayerTeam(teamSpec[0].id, teamRed.length == 0 ? Team.RED : Team.BLUE);
            return;
        }
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        }
        if (streak.actual === 0 && gameState === State.STOP) {
            if (Math.abs(teamRed.length - teamBlue.length) == 2) {
                var teamIn = teamRed.length > teamBlue.length ? teamRed : teamBlue;
                room.setPlayerTeam(teamIn[teamIn.length - 1].id, Team.SPECTATORS)
            }
        }
        if (teamRed.length == teamBlue.length && teamSpec.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }

        if (capLeft) {
            choosePlayer();
        } else {
            getSpecList(teamRed.length <= teamBlue.length ? teamRed[0] : teamBlue[0]);
        }
    }
    balanceTeams();
}

function handlePlayersTeamChange(byPlayer) {
    if (chooseMode && !removingPlayers && byPlayer == null) {
        if (Math.abs(teamRed.length - teamBlue.length) == teamSpec.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamSpec.length;
            if (teamRed.length > teamBlue.length) {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            } else {
                for (var i = 0; i < b; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        room.setPlayerTeam(teamSpec[0].id, Team.RED);
                    }, 5 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 5 * b);
            }
            return;
        } else if (
            (teamRed.length == teamSize && teamBlue.length == teamSize) ||
            (teamRed.length == teamBlue.length && teamSpec.length < 2)
        ) {
            deactivateChooseMode();
            resumeGame();
        } else if (teamRed.length <= teamBlue.length && redCaptainChoice != '') {
            if (redCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.RED);
            } else if (redCaptainChoice == 'random') {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.RED);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.RED);
            }
            return;
        } else if (teamBlue.length < teamRed.length && blueCaptainChoice != '') {
            if (blueCaptainChoice == 'top') {
                room.setPlayerTeam(teamSpec[0].id, Team.BLUE);
            } else if (blueCaptainChoice == 'random') {
                var r = getRandomInt(teamSpec.length);
                room.setPlayerTeam(teamSpec[r].id, Team.BLUE);
            } else {
                room.setPlayerTeam(teamSpec[teamSpec.length - 1].id, Team.BLUE);
            }
            return;
        } else {
            choosePlayer();
        }
    }
}

function handlePlayersStop(byPlayer) {
    if (byPlayer == null && endGameVariable) {
        if (chooseMode) {
            if (players.length == 2 * teamSize) {
                chooseMode = false;
                resetButton();
                for (var i = 0; i < teamSize; i++) {
                    clearTimeout(insertingTimeout);
                    insertingPlayers = true;
                    setTimeout(() => {
                        randomButton();
                    }, 200 * i);
                }
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200 * teamSize);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else if (lastWinner == Team.BLUE) {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 10);
                } else {
                    resetButton();
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 300);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
            }
        } else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    swapButton();
                }
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 3 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    topButton();
                }, 200);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 300);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 4) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                    }, 500);
                }, 500);
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 2000);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 5 || players.length >= 2 * teamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecButton();
                } else {
                    redToSpecButton();
                    setTimeout(() => {
                        swapButton();
                    }, 5);
                }
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 200);
                setTimeout(() => {
                    topButton();
                }, 200);
                activateChooseMode();
            } else if (players.length == 6) {
                resetButton();
                clearTimeout(insertingTimeout);
                insertingPlayers = true;
                insertingTimeout = setTimeout(() => {
                    insertingPlayers = false;
                }, 1500);
                setTimeout(() => {
                    randomButton();
                    setTimeout(() => {
                        randomButton();
                        setTimeout(() => {
                            randomButton();
                        }, 500);
                    }, 500);
                }, 500);
                startTimeout = setTimeout(() => {
                    room.startGame();
                }, 2000);
            }
        }
    }
}

/* STATS FUNCTIONS */

/* GK FUNCTIONS */

function handleGKTeam(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? teamRed : teamBlue;
    let playerGK = teamArray.reduce((prev, current) => {
        if (team == Team.RED) {
            return (prev?.position.x < current.position.x) ? prev : current
        } else {
            return (prev?.position.x > current.position.x) ? prev : current
        }
    }, null);
    let playerCompGK = getPlayerComp(playerGK);
    return playerCompGK;
}

function handleGK() {
    let redGK = handleGKTeam(Team.RED);
    if (redGK != null) {
        redGK.GKTicks++;
    }
    let blueGK = handleGKTeam(Team.BLUE);
    if (blueGK != null) {
        blueGK.GKTicks++;
    }
}

function getGK(team) {
    if (team == Team.SPECTATORS) {
        return null;
    }
    let teamArray = team == Team.RED ? game.playerComp[0] : game.playerComp[1];
    let playerGK = teamArray.reduce((prev, current) => {
        return (prev?.GKTicks > current.GKTicks) ? prev : current
    }, null);
    return playerGK;
}

function getCS(scores) {
    let playersNameCS = [];
    let redGK = getGK(Team.RED);
    let blueGK = getGK(Team.BLUE);
    if (redGK != null && scores.blue == 0) {
        playersNameCS.push(redGK.player.name);
    }
    if (blueGK != null && scores.red == 0) {
        playersNameCS.push(blueGK.player.name);
    }
    return playersNameCS;
}

function getCSString(scores) {
    let playersCS = getCS(scores);
    if (playersCS.length === 0) {
        return "🥅 Ningún portero mantuvo la portería a cero";
    } else if (playersCS.length === 1) {
        return `🥅 ${playersCS[0]} mantuvo la portería a cero`;
    } else {
        return `🥅 ${playersCS[0]} y ${playersCS[1]} mantuvieron la portería a cero`;
    }
}


/* GLOBAL STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of players) {
        if (player.position != null) {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (lastTeamTouched == playerTouch.team || lastTeamTouched == Team.SPECTATORS) {
            if (lastTouches[0] == null || (lastTouches[0] != null && lastTouches[0].player.id != playerTouch.id)) {
                game.touchArray.push(
                    new BallTouch(
                        playerTouch,
                        game.scores.time,
                        getGoalGame(),
                        ballPosition
                    )
                );
                lastTouches[0] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 1,
                    getGoalGame()
                );
                lastTouches[1] = checkGoalKickTouch(
                    game.touchArray,
                    game.touchArray.length - 2,
                    getGoalGame()
                );
            }
        }
        lastTeamTouched = playerTouch.team;
    }
}

function getBallSpeed() {
    var ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function getGameStats() {
    if (playSituation == Situation.PLAY && gameState == State.PLAY) {
        lastTeamTouched == Team.RED ? possession[0]++ : possession[1]++;
        var ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? actionZoneHalf[0]++ : actionZoneHalf[1]++;
        handleGK();
    }
}

/* GOAL ATTRIBUTION FUNCTIONS */

function getGoalAttribution(team) {
    var goalAttribution = Array(2).fill(null);
    if (lastTouches[0] != null) {
        if (lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (lastTouches[1] != null && lastTouches[1].player.team == team) {
                goalAttribution = [lastTouches[0].player, lastTouches[1].player];
            } else {
                goalAttribution = [lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

function getGoalString(team) {
    const scores = game.scores;
    const atribucion = getGoalAttribution(team);
    let textoGol;

    if (atribucion[0] != null) {
        if (atribucion[0].team == team) {
            if (atribucion[1] != null && atribucion[1].team == team) {
                textoGol = `⚽ ${getTimeGame(scores.time)} Gol de ${atribucion[0].name}! Asistencia de ${atribucion[1].name}. Velocidad: ${ballSpeed.toFixed(2)} km/h.`;
                game.goals.push(new Goal(scores.time, team, atribucion[0], atribucion[1]));
            } else {
                textoGol = `⚽ ${getTimeGame(scores.time)} Gol de ${atribucion[0].name}! Velocidad: ${ballSpeed.toFixed(2)} km/h.`;
                game.goals.push(new Goal(scores.time, team, atribucion[0], null));
            }
        } else {
            textoGol = `😂 ${getTimeGame(scores.time)} Autogol de ${atribucion[0].name}! Velocidad: ${ballSpeed.toFixed(2)} km/h.`;
            game.goals.push(new Goal(scores.time, team, atribucion[0], null));
        }
    } else {
        textoGol = `⚽ ${getTimeGame(scores.time)} Gol para el equipo ${team == Team.RED ? 'rojo' : 'azul'}! Velocidad: ${ballSpeed.toFixed(2)} km/h.`;
        game.goals.push(new Goal(scores.time, team, null, null));
    }

    return textoGol;
}

/* ROOM STATS FUNCTIONS */

function updatePlayerStats(player, teamStats) {
    let stats = localStorage.getItem(authArray[player.id][0])
        ? Object.assign(new HaxStatistics(player.name), JSON.parse(localStorage.getItem(authArray[player.id][0])))
        : new HaxStatistics(player.name);

    let pComp = getPlayerComp(player);

    stats.games++;
    if (lastWinner == teamStats) {
        stats.wins++;
    } else {
        stats.losses++;
    }

    let goals = getGoalsPlayer(pComp);
    let assists = getAssistsPlayer(pComp);
    let ownGoals = getOwnGoalsPlayer(pComp);
    let CS = getCSPlayer(pComp);

    stats.goals += goals;
    stats.assists += assists;
    stats.ownGoals += ownGoals;
    stats.CS += CS;
    stats.playtime += getGametimePlayer(pComp);

    // --- Cálculo ELO ---
    let baseElo = (lastWinner == teamStats) ? 30 : -30;

    let goalBonus = goals >= 1 ? 15 : 0;
    if (goals >= 2) goalBonus += 10;
    if (goals >= 3) goalBonus += 7;

    let assistBonus = assists >= 1 ? 10 : 0;
    if (assists >= 2) assistBonus += 7;
    if (assists >= 3) assistBonus += 5;

    let ownGoalPenalty = 0;
    if (ownGoals == 1) ownGoalPenalty = -8;
    if (ownGoals == 2) ownGoalPenalty = -12;
    if (ownGoals >= 3) ownGoalPenalty = -16;

    let csBonus = (CS > 0 && lastWinner == teamStats) ? 15 : 0;

    let contrib = goalBonus + assistBonus + csBonus + ownGoalPenalty;

    if (lastWinner != teamStats) {
        goalBonus *= 0.6;
        assistBonus *= 0.6;
        contrib = goalBonus + assistBonus + ownGoalPenalty;
        baseElo = -Math.max(10, 30 - Math.min(contrib, 20));
    }

    let eloChange = baseElo + contrib;
    if (eloChange > 60) eloChange = 60;
    if (eloChange < -45) eloChange = -45;

    stats.elo = (stats.elo || 1000) + eloChange;
    if (stats.elo < 0) stats.elo = 0;

    const maxLevel = 99;
    const targetMaxElo = 30000;
    const factor = (targetMaxElo - 1000) / Math.pow(maxLevel, 1.5);
    const prevLevel = stats.nivel || 0;

    let level = 0;
    while (level < maxLevel) {
        const eloNeeded = 1000 + factor * Math.pow(level, 1.5);
        if (stats.elo >= eloNeeded) level++;
        else break;
    }
    stats.nivel = level;

    if (level > prevLevel) {
        room.sendAnnouncement(`🎉 ¡Felicidades ${player.name}! Subiste al nivel ${level}`, player.id, 0xA3FF00, "bold", HaxNotification.CHAT);
    } else if (level < prevLevel) {
        room.sendAnnouncement(`⚠️ ${player.name} bajaste al nivel ${level}`, player.id, 0xFF4C4C, "bold", HaxNotification.CHAT);
    }

    localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));

    let color = eloChange >= 0 ? 0xA3FF00 : 0xFF4C4C;
    let sign = eloChange >= 0 ? "+" : "";
    room.sendAnnouncement(
        `${player.name} ${eloChange >= 0 ? "ganaste" : "perdiste"} ELO | ELO ${sign}${eloChange} → ${stats.elo} | Nivel ${stats.nivel}`,
        player.id, color, "normal", HaxNotification.CHAT
    );
}

function updateStats() {
    if (
        players.length >= 2 * teamSize &&
        (
            game.scores.time >= (5 / 6) * game.scores.timeLimit ||
            game.scores.red == game.scores.scoreLimit ||
            game.scores.blue == game.scores.scoreLimit
        ) &&
        teamRedStats.length >= teamSize && teamBlueStats.length >= teamSize
    ) {
        for (let player of teamRedStats) {
            updatePlayerStats(player, Team.RED);
        }
        for (let player of teamBlueStats) {
            updatePlayerStats(player, Team.BLUE);
        }
    }
}

function printRankings(statKey, id = 0, title = "") {
    var leaderboard = [];

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.length == 43) {
            var data = JSON.parse(localStorage.getItem(key));
            var value = data[statKey];
            leaderboard.push([data.playerName, value]);
        }
    }

    if (leaderboard.length < 1) {
        if (id != 0) {
            room.sendAnnouncement(
                'Aún no hay suficientes jugadores.',
                id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        return;
    }

    leaderboard.sort((a, b) => b[1] - a[1]);

    var rankingString = `${title} → `;
    var topCount = Math.min(10, leaderboard.length);

    for (let i = 0; i < topCount; i++) {
        let playerName = leaderboard[i][0];
        let playerStat = leaderboard[i][1];
        if (statKey == 'playtime') playerStat = getTimeStats(playerStat);
        rankingString += `${playerName}: ${playerStat}`;
        if (i < topCount - 1) rankingString += " | ";
    }

    room.sendAnnouncement(
        rankingString,
        id,
        0xFFEB3B,
        'bold',
        HaxNotification.CHAT
    );
}

/* GET STATS FUNCTIONS */

function getGamePlayerStats(player) {
    var stats = new HaxStatistics(player.name);
    var pComp = getPlayerComp(player);
    stats.goals += getGoalsPlayer(pComp);
    stats.assists += getAssistsPlayer(pComp);
    stats.ownGoals += getOwnGoalsPlayer(pComp);
    stats.playtime += getGametimePlayer(pComp);
    stats.CS += getCSPlayer(pComp);
    return stats;
}

function getGametimePlayer(pComp) {
    if (pComp == null) return 0;
    var timePlayer = 0;
    for (let j = 0; j < pComp.timeEntry.length; j++) {
        if (pComp.timeExit.length < j + 1) {
            timePlayer += game.scores.time - pComp.timeEntry[j];
        } else {
            timePlayer += pComp.timeExit[j] - pComp.timeEntry[j];
        }
    }
    return Math.floor(timePlayer);
}

function getGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    var goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team === pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getOwnGoalsPlayer(pComp) {
    if (pComp == null) return 0;
    var goalPlayer = 0;
    for (let goal of game.goals) {
        if (goal.striker != null && goal.team !== pComp.player.team) {
            if (authArray[goal.striker.id][0] == pComp.auth) {
                goalPlayer++;
            }
        }
    }
    return goalPlayer;
}

function getAssistsPlayer(pComp) {
    if (pComp == null) return 0;
    var assistPlayer = 0;
    for (let goal of game.goals) {
        if (goal.assist != null) {
            if (authArray[goal.assist.id][0] == pComp.auth) {
                assistPlayer++;
            }
        }
    }
    return assistPlayer;
}

function getGKPlayer(pComp) {
    if (pComp == null) return 0;
    let GKRed = getGK(Team.RED);
    if (pComp.auth == GKRed?.auth) {
        return Team.RED;
    }
    let GKBlue = getGK(Team.BLUE);
    if (pComp.auth == GKBlue?.auth) {
        return Team.BLUE;
    }
    return Team.SPECTATORS;
}

function getCSPlayer(pComp) {
    if (pComp == null || game.scores == null) return 0;
    if (getGKPlayer(pComp) == Team.RED && game.scores.blue == 0) {
        return 1;
    } else if (getGKPlayer(pComp) == Team.BLUE && game.scores.red == 0) {
        return 1;
    }
    return 0;
}

function actionReportCountTeam(goals, team) {
    let playerActionSummaryTeam = [];
    let indexTeam = team == Team.RED ? 0 : 1;
    let indexOtherTeam = team == Team.RED ? 1 : 0;
    for (let goal of goals[indexTeam]) {
        if (goal[0] != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == goal[0].id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[0].id);
                playerActionSummaryTeam[index][1]++;
            } else {
                playerActionSummaryTeam.push([goal[0], 1, 0, 0]);
            }
            if (goal[1] != null) {
                if (playerActionSummaryTeam.find(a => a[0].id == goal[1].id)) {
                    let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[1].id);
                    playerActionSummaryTeam[index][2]++;
                } else {
                    playerActionSummaryTeam.push([goal[1], 0, 1, 0]);
                }
            }
        }
    }
    if (goals[indexOtherTeam].length == 0) {
        let playerCS = getGK(team)?.player;
        if (playerCS != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == playerCS.id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == playerCS.id);
                playerActionSummaryTeam[index][3]++;
            } else {
                playerActionSummaryTeam.push([playerCS, 0, 0, 1]);
            }
        }
    }

    playerActionSummaryTeam.sort((a, b) => (a[1] + a[2] + a[3]) - (b[1] + b[2] + b[3]));
    return playerActionSummaryTeam;
}

/* PRINT FUNCTIONS */

function printPlayerStats(stats) {
    let statsString = `${stats.playerName} → `;
    const statNames = {
        games: 'Partidas',
        wins: 'Ganadas',
        losses: 'Perdidas',
        winrate: 'Winrate',
        goals: 'Goles',
        assists: 'Asistencias',
        ownGoals: 'Autogoles',
        CS: 'Vallas',
        playtime: 'Tiempo',
        elo: 'ELO',
        nivel: 'Nivel'
    };
    for (let [key, value] of Object.entries(stats)) {
        if (key !== 'playerName') {
            if (key === 'playtime') value = getTimeStats(value);
            if (key === 'winrate') value = `${value}%`;
            statsString += `${statNames[key] || key}: ${value} | `;
        }
    }
    statsString = statsString.slice(0, -3);
    return statsString;
}


/* FETCH FUNCTIONS */

function fetchGametimeReport(game) {
    const fieldGametimeRed = {
        name: '🔴 ESTADÍSTICAS DEL EQUIPO ROJO',
        value: '⌛ __**Tiempo de juego:**__\n\n',
        inline: true,
    };
    const fieldGametimeBlue = {
        name: '🔵 ESTADÍSTICAS DEL EQUIPO AZUL',
        value: '⌛ __**Tiempo de juego:**__\n\n',
        inline: true,
    };

    const redTeamTimes = game.playerComp[0].map(p => [p.player, getGametimePlayer(p)]);
    const blueTeamTimes = game.playerComp[1].map(p => [p.player, getGametimePlayer(p)]);

    for (let [player, time] of redTeamTimes) {
        const minutes = getMinutesReport(time);
        const seconds = getSecondsReport(time);
        fieldGametimeRed.value += `> **${player.name}:** ${minutes ? `${minutes}m` : ''}${seconds || !minutes ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeRed.value += '=====================\n';

    for (let [player, time] of blueTeamTimes) {
        const minutes = getMinutesReport(time);
        const seconds = getSecondsReport(time);
        fieldGametimeBlue.value += `> **${player.name}:** ${minutes ? `${minutes}m` : ''}${seconds || !minutes ? `${seconds}s` : ''}\n`;
    }
    fieldGametimeBlue.value += '=====================\n';

    return [fieldGametimeRed, fieldGametimeBlue];
}

function fetchActionsSummaryReport(game) {
    const fieldReportRed = {
        name: '🔴 ESTADÍSTICAS DEL EQUIPO ROJO',
        value: '📊 __**Estadísticas de jugadores:**__\n\n',
        inline: true,
    };
    const fieldReportBlue = {
        name: '🔵 ESTADÍSTICAS DEL EQUIPO AZUL',
        value: '📊 __**Estadísticas de jugadores:**__\n\n',
        inline: true,
    };

    const goals = [[], []];
    for (let g of game.goals) {
        goals[g.team - 1].push([g.striker, g.assist]);
    }

    const redActions = actionReportCountTeam(goals, Team.RED);
    const blueActions = actionReportCountTeam(goals, Team.BLUE);

    for (let act of redActions) {
        fieldReportRed.value += `> **${act[0].team !== Team.RED ? '[AG] ' : ''}${act[0].name}:**${act[1] ? ` ${act[1]}G` : ''}${act[2] ? ` ${act[2]}A` : ''}${act[3] ? ` ${act[3]}CS` : ''}\n`;
    }
    fieldReportRed.value += '=====================\n';

    for (let act of blueActions) {
        fieldReportBlue.value += `> **${act[0].team !== Team.BLUE ? '[AG] ' : ''}${act[0].name}:**${act[1] ? ` ${act[1]}G` : ''}${act[2] ? ` ${act[2]}A` : ''}${act[3] ? ` ${act[3]}CS` : ''}\n`;
    }
    fieldReportBlue.value += '=====================\n';

    return [fieldReportRed, fieldReportBlue];
}

function fetchSummaryEmbed(game) {
    const fetchEndgame = [fetchGametimeReport, fetchActionsSummaryReport];
    const logChannel = gameWebhook;

    const fields = [
        { name: '🔴 ESTADÍSTICAS DEL EQUIPO ROJO', value: '', inline: true },
        { name: '🔵 ESTADÍSTICAS DEL EQUIPO AZUL', value: '', inline: true },
    ];

    for (let fn of fetchEndgame) {
        const [red, blue] = fn(game);
        fields[0].value += red.value + '\n';
        fields[1].value += blue.value + '\n';
    }

    const possR = (possession[0] / (possession[0] + possession[1])) * 100;
    const possB = 100 - possR;
    const zoneR = (actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1])) * 100;
    const zoneB = 100 - zoneR;
    const win = game.scores.red > game.scores.blue ? 1 : game.scores.blue > game.scores.red ? 2 : 0;

    const objectBodyWebhook = {
        embeds: [
            {
                title: `📝 REPORTE DEL PARTIDO #${getIdReport()}`,
                description:
                    `**${getTimeEmbed(game.scores.time)}** ` +
                    (win === 1 ? '**Equipo Rojo**' : 'Equipo Rojo') + ` ${game.scores.red} - ${game.scores.blue} ` +
                    (win === 2 ? '**Equipo Azul**' : 'Equipo Azul') +
                    `\n\`\`\`c\nPosesión: ${possR.toFixed(0)}% - ${possB.toFixed(0)}%\nZona de acción: ${zoneR.toFixed(0)}% - ${zoneB.toFixed(0)}%\n\`\`\`\n`,
                color: 0x92C5FF,
                fields: fields,
                footer: { text: `Grabación: ${getRecordingName(game)}` },
                timestamp: new Date().toISOString(),
            },
        ],
        username: roomName
    };

    if (logChannel) {
        fetch(logChannel, {
            method: 'POST',
            body: JSON.stringify(objectBodyWebhook),
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

/* EVENTS */

/* PLAYER MOVEMENT */

function setVipCommand(player, message) {
    let targetId = parseInt(msgArray[0].substring(1));
    let playerVip = room.getPlayer(targetId);

    let auth = authArray[playerVip.id][0];

    if (vipList.some(v => v[0] === auth)) {
        room.sendAnnouncement(
            `⚠️ Este jugador ya es VIP.`,
            player.id,
            0xffcc66,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }
}

function checkban(player) {
    let pconn = authArray[player.id][1];
    if (banList.some(b => b[2] === pconn)) {
        room.kickPlayer(player.id, 'Estás baneado', false);
    }
}

room.onPlayerJoin = function (player) {
    authArray[player.id] = [player.auth, player.conn];
    checkban(player);
    
    webhookQueue.send(player, "", "join", { 
        currentPlayers: playersAll.length, 
        maxPlayers, 
        auth: authArray[player.id] 
    });

    let statsRaw = localStorage.getItem(authArray[player.id][0]);
    let firstTime = !statsRaw;

    const welcomesNew = [
        `👋 Bienvenido a las públicas de HAXDOM! Usa !ayuda para ver la lista de comandos.\nRecuerda: puedes usar "@@" seguido de un jugador para enviarle PM y "t" para chat de equipo.`,
        `🙌 Hola ${player.name}, un gusto tenerte aquí! Revisa !ayuda para los comandos.`,
        `🎉 ${player.name} se une a la sala! Usa !ayuda para conocer los comandos.`,
        `🌟 Bienvenido ${player.name}! Recuerda usar "@@" para mensajes privados y "t" para chat de equipo.`,
        `🚀 ${player.name}, disfruta de la partida! Consulta !ayuda para comandos.`,
        `😎 ¡Hola ${player.name}! Usa !ayuda para ver qué puedes hacer.`,
        `💫 Bienvenido ${player.name}, pasa un buen rato jugando!`,
        `⚡ ${player.name}, listo para la acción! Recuerda "@@" para PM y "t" para equipo.`,
        `🔥 ${player.name} ha llegado! Explora los comandos con !ayuda.`,
        `✨ ¡Bienvenido ${player.name}! Que disfrutes de la sala.`,
    ];

    const welcomesReturning = [
        `😊 Un gusto verte de nuevo, ${player.name}!`,
        `🎉 Bienvenido de nuevo, ${player.name}!`,
        `👋 Hola otra vez, ${player.name}!`,
        `✨ ${player.name}, nos alegra que hayas regresado!`,
        `😎 Bienvenido de vuelta, ${player.name}!`,
        `🌟 Qué alegría verte, ${player.name}!`,
        `🙌 De nuevo con nosotros, ${player.name}!`,
        `🚀 ${player.name}, listo para otra partida!`,
        `💫 Hola ${player.name}, a disfrutar!`,
        `🔥 Bienvenido de vuelta, ${player.name}!`,
    ];

    const welcomeMessage = firstTime
        ? welcomesNew[Math.floor(Math.random() * welcomesNew.length)]
        : welcomesReturning[Math.floor(Math.random() * welcomesReturning.length)];

    room.sendAnnouncement(
        welcomeMessage,
        player.id,
        0xFFEB3B,
        "normal",
        firstTime ? HaxNotification.MENTION : HaxNotification.CHAT
    );

    updateTeams();
    updateAdmins();

    if (masterList.includes(player.auth)) {
        room.sendAnnouncement(`Superadministrador ${player.name} se ha conectado a la sala!`, null, announcementColor, 'normal', HaxNotification.CHAT);
        room.setPlayerAdmin(player.id, true);
    } else if (adminList.some(a => a[0] === player.auth)) {
        room.sendAnnouncement(`Admin ${player.name} se ha conectado a la sala!`, null, announcementColor, 'normal', HaxNotification.CHAT);
        room.setPlayerAdmin(player.id, true);
    }

    const sameAuthCheck = playersAll.filter(
        p => p.id !== player.id &&
             authArray[p.id] &&             
             authArray[p.id][0] === player.auth
    );
    if (sameAuthCheck.length > 0 && !debugMode) {
        sameAuthCheck.forEach(oldPlayer => ghostKickHandle(oldPlayer, player));
    }

    handlePlayersJoin();
};


room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    if (AFKSet.has(changedPlayer.id) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendAnnouncement(
            `${changedPlayer.name} Esta afk!`,
            null,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return;
    }

    // ================================
    // ASIGNAR POSICIÓN GUARDADA
    // ================================
    if (
        changedPlayer.team !== Team.SPECTATORS &&
        gameState !== State.STOP
    ) {
        const jugadoresLibres = players.length - AFKSet.size;
        const minimoRequerido = (2 * teamSize) + 1;

        if (jugadoresLibres >= minimoRequerido) {
            let pos = null;

            if (changedPlayer.team === Team.RED && playerExitPositions.red.length > 0) {
                pos = playerExitPositions.red.pop().position;
            }
            else if (changedPlayer.team === Team.BLUE && playerExitPositions.blue.length > 0) {
                pos = playerExitPositions.blue.pop().position;
            }

            if (pos) {
                room.setPlayerDiscProperties(changedPlayer.id, pos);
            }
        }
    }

    updateTeams();
    handleActivityPlayerTeamChange(changedPlayer);
    handlePlayersTeamChange(byPlayer);
    if (gameState != State.STOP) {
        if (changedPlayer.team != Team.SPECTATORS && game.scores.time <= (3 / 4) * game.scores.timeLimit && Math.abs(game.scores.blue - game.scores.red) < 2) {
            changedPlayer.team == Team.RED ? teamRedStats.push(changedPlayer) : teamBlueStats.push(changedPlayer);
        }
    }
};

room.onPlayerLeave = function (player) {
    setTimeout(() => {
        if (!kickFetchVariable) {
            webhookQueue.send(player, "", "leave", { 
                currentPlayers: playersAll.length, 
                maxPlayers, 
                auth: authArray[player.id] 
            });
        } else kickFetchVariable = false;
    }, 10);

    ///////////////////////////////////////////
    // Restar elo por salir en plena partida //
    //  Guardar posicion de jugador para otro //
    ///////////////////////////////////////////

    if (player.id !== lastVotekick) {
        if (
            gameState !== State.STOP &&
            currentStadium === 'futsalx3' &&
            players.length - AFKSet.size >= 2 * teamSize + 1 &&
            (player.team === Team.RED || player.team === Team.BLUE)
        ) {
            const equipo = player.team === Team.RED ? 'red' : 'blue';
            playerExitPositions[equipo].push({ position: player.position });

            let statsRaw = localStorage.getItem(authArray[player.id]?.[0]);
            if (statsRaw) {
                let stats = JSON.parse(statsRaw);
                stats.elo = (stats.elo || 1000) - 10;
                if (stats.elo < 0) stats.elo = 0;
                localStorage.setItem(authArray[player.id][0], JSON.stringify(stats));

                room.sendAnnouncement(
                    `📉 ${player.name} perdió 10 ELO por abandonar la sala. Nuevo ELO: ${stats.elo}`,
                    null,
                    0xFF4500,
                    'bold',
                    HaxNotification.CHAT
                );
            }
        }
    } else {
        lastVotekick = null;
    }

    votekickSystem.onPlayerLeave(player);
    handleLineupChangeLeave(player);
    checkCaptainLeave(player);
    updateTeams();
    updateAdmins();
    handlePlayersLeave();
};

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    kickFetchVariable = true;
    if (roomWebhook != '') {
        var stringContent = `[${getDate()}] ⛔ ${ban ? 'BAN' : 'KICK'} (${playersAll.length}/${maxPlayers})\n` +
            `**${kickedPlayer.name}** [${authArray[kickedPlayer.id][0]}] {${authArray[kickedPlayer.id][1]}} fue ${ban ? 'baneado' : 'expulsado'}` +
            `${byPlayer != null ? ' por **' + byPlayer.name + '** [' + authArray[byPlayer.id][0] + '] {' + authArray[byPlayer.id][1] + '}' : ''}`;

        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }

    if ((ban && ((byPlayer != null &&
        (byPlayer.id == kickedPlayer.id || getRole(byPlayer) < Role.MASTER)) || getRole(kickedPlayer) == Role.MASTER)) || disableBans
    ) {
        room.clearBan(kickedPlayer.id);
        return;
    }

    if (byPlayer != null && getRole(byPlayer) < Role.ADMIN_PERM) {
        room.sendAnnouncement(
            '¡No tienes permiso para expulsar o banear jugadores!',
            byPlayer.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setPlayerAdmin(byPlayer.id, false);
        return;
    }

    if (ban) {
        if (!reason) {
            room.sendAnnouncement('Debes de especificar una razon para banear.', byPlayer.id, warningColor, null, HaxNotification.MENTION);
            return;
        }
        banList.push([kickedPlayer.name, kickedPlayer.id, kickedPlayer.conn, reason]);
        if (bansWebhook != '') {
            var banMessage = {
                content: `<@&${idadminrol}>`,
                embeds: [{
                    title: "🚫 Nuevo baneo",
                    color: announcementColor,
                    fields: [
                        {
                            name: "👤 Jugador",
                            value: `${kickedPlayer.name}`,
                            inline: true
                        },
                        {
                            name: "🛡️ Moderador",
                            value: `${byPlayer.name}`,
                            inline: true
                        },
                        {
                            name: "📄 Razón",
                            value: `${reason}`,
                            inline: false
                        },
                        {
                            name: "🔒 Datos",
                            value: `**Baneado (conn):** ${authArray[kickedPlayer.id][1]}\n**Baneador (conn):** ${authArray[byPlayer.id][1]}`,
                            inline: false
                        }
                    ],
                    footer: { text: `Sala: ${roomName}` },
                    timestamp: new Date()
                }]
            };
            fetch(bansWebhook, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(banMessage)
            });
        }
    }
};

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    const filterResult = sanitizeMessage(message);
    if (filterResult.shouldBlock) {
        room.sendAnnouncement(
            `Mensaje bloqueado: No se permiten enlaces ni contenido malicioso.`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return false;
    }
    if (gameState !== State.STOP && player.team != Team.SPECTATORS) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
    let msgArray = message.split(/ +/);

    const sanitizedMessage = filterResult.message;
    if (webhookQueue.isOperational) {
        webhookQueue.send(player, sanitizedMessage, "chat");
    }

    if (msgArray[0][0] == '!') {
        let command = getCommand(msgArray[0].slice(1).toLowerCase());
        if (command != false && commands[command].roles <= getRole(player)) {
            safeExecute(() => commands[command].function(player, message));
        } else {
            room.sendAnnouncement(
                `El comando que intentaste usar no existe para ti. Por favor, escribe '!help' para ver los comandos disponibles para ti.`,
                player.id,
                errorColor,
                'bold',
                HaxNotification.CHAT
            );
        }
        return false;
    }
    if (msgArray[0].toLowerCase() == 't') {
        teamChat(player, message);
        return false;
    }
    if (msgArray[0].substring(0, 2) === '@@') {
        playerChat(player, message);
        return false;
    }
    if (chooseMode && teamRed.length * teamBlue.length != 0) {
        var choosingMessageCheck = chooseModeFunction(player, message);
        if (choosingMessageCheck) return false;
    }
    if (slowMode > 0) {
        var filter = slowModeFunction(player, message);
        if (filter) return false;
    }
    customavatar(player, message);
    if (!player.admin && muteArray.getByAuth(authArray[player.id][0]) != null) {
        room.sendAnnouncement(
            `Estas muteado !`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        return false;
    }

    if (localStorage.getItem(authArray[player.id]?.[0])) {
        let stats = JSON.parse(localStorage.getItem(authArray[player.id][0]));

        const nivel = stats.nivel || 0;
        const role = getRole(player);
        let cargo = "";
        let rango = "";
        let chatColor = "0xFFFFFF";

        switch (role) {
            case Role.MASTER: cargo = "[Maestro]"; break;
            case Role.ADMIN_PERM: cargo = "[MOD]"; break;
            case Role.VIP: cargo = "[💠 VIP]"; break;
        }

        rango = (stats.rolcustom?.activo && stats.rolcustom.nombre?.length >= 4)
            ? stats.rolcustom.nombre
            : `🇱🇻 ${nivel}`;

        const colorMap = {
            0: "0xCCCCCC",
            1: "0x87CEFA",
            2: "0x7CFC00",
            3: "0xFFA500",
            4: "0xFF69B4",
            5: "0x1E90FF",
            6: "0x00FA9A",
            7: "0xEE82EE",
            8: "0xFFD700",
            9: "0xDC143C"
        };
        chatColor = colorMap[nivel % 10] || "0xFFFFFF";

        const finalMsg = `${rango} ❖${cargo ? ' ' + cargo : ''} ${player.name} : ${message}`;
        room.sendAnnouncement(finalMsg, null, parseInt(chatColor), null);
        return false;

    } else {
        room.sendAnnouncement(`👶 Nuevo ❖ ${player.name} : ${message}`, null, 0xAAAAAA, null);
        return false;
    };
};

function sanitizeMessage(message) {
    let sanitizedMsg = message
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    const urlPattern = /(https?:\/\/[^\s]+)/gi;
    if (urlPattern.test(sanitizedMsg)) {
        return { message: sanitizedMsg, shouldBlock: true };
    }

    return { message: sanitizedMsg, shouldBlock: false };
}

function customavatar(player, message) {
    const avatarMap = {
        "q": "😲",
        "1": "😱",
        "ez": "🥱",
        "gol": "⚽",
        "da": "🤬",
        "x": "🤬",
        "?": "❓",
        " ": "🙋‍♂️",
        "so": "🧏‍♂️",
        "aqui": "🙋‍♂️",
        "pasa": "🙋‍♂️",
        "pass": "🙋‍♂️",
        "lag": "🦆"
    };

    const avatar = avatarMap[message];
    if (avatar) {
        room.setPlayerAvatar(player.id, avatar);
        setTimeout(() => {
            room.setPlayerAvatar(player.id, player.avatar);
        }, 750);
    }
}

room.onPlayerActivity = function (player) {
    if (gameState !== State.STOP) {
        let pComp = getPlayerComp(player);
        if (pComp != null) pComp.inactivityTicks = 0;
    }
};

let kickOff = null;

function cancelKickOffTimer() {
    if (kickOff) {
        clearTimeout(kickOff);
        kickOff = null;
    }
}

function kickOffTimer() {
    cancelKickOffTimer();

    const players = room.getPlayerList();
    const teamRed = players.filter(p => p.team === Team.RED);
    const teamBlue = players.filter(p => p.team === Team.BLUE);

    if (
        gameState !== State.PLAY ||
        playSituation !== Situation.KICKOFF ||
        currentStadium !== 'futsalx2' ||
        teamRed.length < 1 || 
        teamBlue.length < 1
    ) return;

    kickOff = setTimeout(() => {
        kickOff = null;

        const players = room.getPlayerList();
        const teamRed = players.filter(p => p.team === Team.RED);
        const teamBlue = players.filter(p => p.team === Team.BLUE);

        if (
            gameState !== State.PLAY ||
            playSituation !== Situation.KICKOFF ||
            currentStadium !== 'futsalx2' ||
            teamRed.length < 1 || 
            teamBlue.length < 1
        ) return;

        const ball = room.getDiscProperties(0);
        if (!ball) return;

        if (ball.x === 0 && ball.y === 0) {
            room.sendAnnouncement("⏱️ Saque automático en 3 segundos...", null, 0xFFFF00);

            setTimeout(() => {
                const players = room.getPlayerList();
                const teamRed = players.filter(p => p.team === Team.RED);
                const teamBlue = players.filter(p => p.team === Team.BLUE);

                if (
                    gameState === State.PLAY &&
                    playSituation === Situation.KICKOFF &&
                    currentStadium === 'futsalx2' &&
                    teamRed.length >= 1 && 
                    teamBlue.length >= 1
                ) {
                    room.setDiscProperties(0, { yspeed: 0.001 });
                    room.sendAnnouncement("⚽ Saque automático ejecutado.", null, 0xFFFF00);
                }
            }, 3000);
        }
    }, 15000);
}

room.onPlayerBallKick = function (player) {
    if (playSituation != Situation.GOAL) {
        var ballPosition = room.getBallPosition();
        if (game.touchArray.length == 0 || player.id != game.touchArray[game.touchArray.length - 1].player.id) {
            if (playSituation == Situation.KICKOFF) playSituation = Situation.PLAY;
            lastTeamTouched = player.team;
            game.touchArray.push(
                new BallTouch(
                    player,
                    game.scores.time,
                    getGoalGame(),
                    ballPosition
                )
            );
            lastTouches[0] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 1,
                getGoalGame()
            );
            lastTouches[1] = checkGoalKickTouch(
                game.touchArray,
                game.touchArray.length - 2,
                getGoalGame()
            );
        }
    }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    clearTimeout(startTimeout);
    uniformesaleatorios();
    if (byPlayer != null) clearTimeout(stopTimeout);
    game = new Game();
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    gameState = State.PLAY;
    endGameVariable = false;
    goldenGoal = false;
    playSituation = Situation.KICKOFF;
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    teamRedStats = [];
    teamBlueStats = [];
    if (teamRed.length == teamSize && teamBlue.length == teamSize) {
        for (var i = 0; i < teamSize; i++) {
            teamRedStats.push(teamRed[i]);
            teamBlueStats.push(teamBlue[i]);
        }
    }
    calculateStadiumVariables();
};

room.onGameStop = function (byPlayer) {
    cancelKickOffTimer();
    clearTimeout(stopTimeout);
    clearTimeout(unpauseTimeout);
    if (byPlayer != null) clearTimeout(startTimeout);
    game.rec = room.stopRecording();
    if (
        !cancelGameVariable && game.playerComp[0].length + game.playerComp[1].length > 0 &&
        (
            (game.scores.timeLimit != 0 &&
                ((game.scores.time >= 0.5 * game.scores.timeLimit &&
                    game.scores.time < 0.75 * game.scores.timeLimit &&
                    game.scores.red != game.scores.blue) ||
                    game.scores.time >= 0.75 * game.scores.timeLimit)
            ) ||
            endGameVariable
        )
    ) {
        fetchSummaryEmbed(game);
        if (fetchRecordingVariable) {
            setTimeout((gameEnd) => { fetchRecording(gameEnd); }, 500, game);
        }
    }
    playerExitPositions = {
        red: [],
        blue: []
    };
    usosBanquear = { [Team.RED]: {}, [Team.BLUE]: {} };
    cancelGameVariable = false;
    comandoUsadoEstaPartida = false;
    gameState = State.STOP;
    playSituation = Situation.STOP;
    updateTeams();
    handlePlayersStop(byPlayer);
    handleActivityStop();
    kickOffTimer();
};

room.onGamePause = function (byPlayer) {
    if (mentionPlayersUnpause && gameState == State.PAUSE) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `⏸ Juego pausado por ${byPlayer.name}`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `⏸ Juego pausado`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }
    clearTimeout(unpauseTimeout);
    gameState = State.PAUSE;
};

room.onGameUnpause = function (byPlayer) {
    unpauseTimeout = setTimeout(() => {
        gameState = State.PLAY;
    }, 2000);

    if (mentionPlayersUnpause) {
        if (byPlayer != null) {
            room.sendAnnouncement(
                `▶ Juego reanudado por ${byPlayer.name}`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        } else {
            room.sendAnnouncement(
                `▶ Juego reanudado`,
                null,
                defaultColor,
                'bold',
                HaxNotification.NONE
            );
        }
    }

    if (
        (teamRed.length == teamSize && teamBlue.length == teamSize && chooseMode) ||
        (teamRed.length == teamBlue.length && teamSpec.length < 2 && chooseMode)
    ) {
        deactivateChooseMode();
    }
};

room.onTeamGoal = function (team) {
    cancelKickOffTimer();
    const scores = room.getScores();
    game.scores = scores;
    playSituation = Situation.GOAL;
    ballSpeed = getBallSpeed();

    const attribution = getGoalAttribution(team);
    const scorer = attribution[0];
    const assist = attribution[1];
    
    var goalString = getGoalString(team); 

    for (let player of teamRed) {
        var playerComp = getPlayerComp(player);
        team == Team.RED ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }
    for (let player of teamBlue) {
        var playerComp = getPlayerComp(player);
        team == Team.BLUE ? playerComp.goalsScoredTeam++ : playerComp.goalsConcededTeam++;
    }

    room.sendAnnouncement(
        goalString,
        null,
        team == Team.RED ? redColor : blueColor,
        null,
        HaxNotification.CHAT
    );

    narrateGoal(scorer, assist); 
    webhookQueue.send(null, goalString, "goal");
    playGoalAnimation(team);
    
    if ((scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit)) || goldenGoal) {
        endGame(team);
        goldenGoal = false;
        stopTimeout = setTimeout(() => {
            room.stopGame();
        }, 1000);
    }
};

function narrateGoal(striker, assist) {
    if (!striker) {
        room.sendAnnouncement(`[🎤] ¡Gol para el equipo ${team === Team.RED ? 'rojo' : 'azul'}!`, null, 0xA3FF00, null, HaxNotification.CHAT);
        return;
    }

    const pCompStriker = getPlayerComp(striker);
    const pCompAssist = assist ? getPlayerComp(assist) : null;
    const playerGoals = getGoalsPlayer(pCompStriker);
    const ownGoals = getOwnGoalsPlayer(pCompStriker);
    const playerAssists = assist ? getAssistsPlayer(pCompAssist) : 0;
    
    let narration = '';
    const strikerName = striker.name;
    const assistName = assist ? assist.name : 'un compañero';

    if (ownGoals > 0) {
        const ownGoalNarrations = [
            `[🎤] ¡Ay! ¡Gol en propia puerta de ${strikerName}!`,
            `[🎤] Infortunio para ${strikerName}, marca en propia... ¡Qué jugada desafortunada!`,
            `[🎤] ¡Autogol! ${strikerName} anota para el equipo contrario.`,
            `[🎤] ¡Qué fallo! Un error de ${strikerName} que termina en gol en propia puerta.`
        ];
        narration = ownGoalNarrations[Math.floor(Math.random() * ownGoalNarrations.length)];
    }
    else if (assist) {
        const mixedNarrations = [
            `[🎤] ¡Gol de ${strikerName}! Asistencia de ${assistName}.`,
            `[🎤] Gran jugada combinada. ¡${assistName} asistió a ${strikerName} para el gol!`,
            `[🎤] La conexión entre ${assistName} y ${strikerName} da sus frutos. ¡Golazo!`,
            `[🎤] Con la asistencia de ${assistName}, ${strikerName} marca para su equipo.`
        ];
        narration = mixedNarrations[Math.floor(Math.random() * mixedNarrations.length)];
    }
    else {
        if (playerGoals === 1) {
            const firstGoalNarrations = [
                `[🎤] ¡Gol de ${strikerName}! ¡El primero del partido!`,
                `[🎤] ${strikerName} abre el marcador con un gran gol.`,
                `[🎤] ¡Qué golazo de ${strikerName}!`,
                `[🎤] ${strikerName} demuestra su talento con el primer gol del encuentro.`
            ];
            narration = firstGoalNarrations[Math.floor(Math.random() * firstGoalNarrations.length)];
        } else if (playerGoals === 2) {
            const secondGoalNarrations = [
                `[🎤] ¡Doblete de ${strikerName}! ¡No para de anotar!`,
                `[🎤] ¡Segundo gol de ${strikerName}! ¡Increíble!`,
                `[🎤] ${strikerName} marca su segundo del partido.`
            ];
            narration = secondGoalNarrations[Math.floor(Math.random() * secondGoalNarrations.length)];
        } else if (playerGoals >= 3) {
            const hatTrickNarrations = [
                `[🎤] ¡Hat-trick de ${strikerName}! ¡El partido es suyo!`,
                `[🎤] ¡Triplete de ${strikerName}! ¡Qué máquina de hacer goles!`,
                `[🎤] Tres goles en el partido para ${strikerName}. ¡Impresionante!`
            ];
            narration = hatTrickNarrations[Math.floor(Math.random() * hatTrickNarrations.length)];
        }
    }
    
    if (narration === '') {
        narration = `[🎤] ¡Gol de ${strikerName}!`;
    }

    room.sendAnnouncement(narration, null, 0xA3FF00, null, HaxNotification.CHAT);
}

function playGoalAnimation(scoringTeam) {
    const attribution = getGoalAttribution(scoringTeam);
    const scorerId = attribution[0]?.id ?? null;
    const assistId = attribution[1]?.id ?? null;
    const rivalTeam = scoringTeam === Team.RED ? Team.BLUE : Team.RED;
    const rivalGKId = getGK(rivalTeam)?.player?.id ?? null;

    function getStatsAvatar(playerId, type) {
        const stored = localStorage.getItem(authArray[playerId]?.[0]);
        if (!stored) return null;
        const stats = JSON.parse(stored);
        const value = type === 'goal' ? stats.goals : stats.assists;
        if (!value || value === 0 || value > 99) return null;
        return value.toString();
    }

    function animatePlayer(playerId, baseAvatars, statsAvatar) {
        const avatars = [...baseAvatars];
        if (statsAvatar) avatars.push({ avatar: statsAvatar });
        const delay = 5000 / avatars.length;
        let frameIndex = 0;
        function frame() {
            if (frameIndex < avatars.length) {
                room.setPlayerAvatar(playerId, avatars[frameIndex].avatar);
                frameIndex++;
                setTimeout(frame, delay);
            } else {
                room.setPlayerAvatar(playerId, null);
            }
        }
        frame();
    }

    if (scorerId) {
        const player = room.getPlayerList().find(p => p.id === scorerId);
        if (player) {
            room.setPlayerDiscProperties(scorerId, { radius: isVIP(player) ? 60 : 30 });
            const statsAvatar = getStatsAvatar(scorerId, 'goal');
            animatePlayer(scorerId, [{ avatar: "⚽" }, { avatar: "👽" }, { avatar: "🦿" }], statsAvatar);
        }
    }

    if (assistId) {
        const player = room.getPlayerList().find(p => p.id === assistId);
        if (player) {
            room.setPlayerDiscProperties(assistId, { radius: 20 });
            const statsAvatar = getStatsAvatar(assistId, 'assist');
            animatePlayer(assistId, [{ avatar: "👟" }, { avatar: "🧏‍♀️" }, { avatar: "👀" }], statsAvatar);
        }
    }

    if (rivalGKId) {
        const player = room.getPlayerList().find(p => p.id === rivalGKId);
        if (player) {
            room.setPlayerDiscProperties(rivalGKId, { radius: 5 });
            animatePlayer(rivalGKId, [{ avatar: "🤡" }, { avatar: "🥺" }, { avatar: "💩" }], null);
        }
    }
}

room.onPositionsReset = function () {
    lastTouches = Array(2).fill(null);
    lastTeamTouched = Team.SPECTATORS;
    playSituation = Situation.KICKOFF;
    kickOffTimer();
};

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
    console.log(`${url}\nmasterPassword : ${masterPassword}`);
    roomLink = url;
    if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] 🔗 LINK ${url}\nmasterPassword : ${masterPassword}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
    if (!changedPlayer.admin && getRole(changedPlayer) >= Role.ADMIN_TEMP) {
        room.setPlayerAdmin(changedPlayer.id, true);
        return;
    }
    updateAdmins(byPlayer != null && !changedPlayer.admin && changedPlayer.id == byPlayer.id ? changedPlayer.id : 0);
};

room.onKickRateLimitSet = function (min, rate, burst, byPlayer) {
    if (byPlayer != null) {
        room.sendAnnouncement(
            `No está permitido cambiar el límite de kickrate. Debe permanecer en "6-0-0".`,
            player.id,
            errorColor,
            'bold',
            HaxNotification.CHAT
        );
        room.setKickRateLimit(6, 0, 0);
    }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {
    if (byPlayer !== null) {
        if (getRole(byPlayer) < Role.MASTER && currentStadium != 'other') {
            room.sendAnnouncement(
                `No puedes cambiar el estadio manualmente. Usa los comandos de estadio.`,
                byPlayer.id,
                errorColor,
                'normal',
                HaxNotification.CHAT
            );
            stadiumCommand(emptyPlayer, `!${currentStadium}`);
        } else {
            room.sendAnnouncement(
                `✅ Mapa cambiado. Usa los comandos de estadio cuando termines.`,
                byPlayer.id,
                infoColor,
                'normal',
                HaxNotification.CHAT
            );
            currentStadium = 'other';
            defmode = false;
        }
    }
    checkStadiumVariable = true;
};

var teams = [
    { ID: 1, shortName: "trn", longName: "KF Tirana", country: "Albania", uniform: [{ angle: 0, mainColor: [0x0059AB, 0xFFFFFF, 0x0059AB], avatarColor: 0xFFCA03 }, { angle: 0, mainColor: [0xFFCA03], avatarColor: 0x0059AB }] },
    { ID: 2, shortName: "boca", longName: "Club Atlético Boca Juniors", country: "Argentina", uniform: [{ angle: 0, mainColor: [0x103F79, 0xF3B229, 0x103F79], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x103F79 }] },
    { ID: 3, shortName: "rvp", longName: "Club Atlético River Plate", country: "Argentina", uniform: [{ angle: 30, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFF0000 }] },
    { ID: 4, shortName: "mlb", longName: "Melbourne City FC", country: "Australia", uniform: [{ angle: 0, mainColor: [0x7AB2E1], avatarColor: 0xE31934 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xE31934 }] },
    { ID: 5, shortName: "slz", longName: "FC Red Bull Salzburg", country: "Austria", uniform: [{ angle: 15, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 15, mainColor: [0x000080, 0xFFFF00, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 6, shortName: "sgrz", longName: "SK Sturm Graz", country: "Austria", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0x00C000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0x00C000 }] },
    { ID: 7, shortName: "bate", longName: "FK BATE Borisov", country: "Belarus", uniform: [{ angle: 0, mainColor: [0xFFFF00, 0x0080FF, 0xFFFF00], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFFFF00], avatarColor: 0x0080FF }] },
    { ID: 8, shortName: "gml", longName: "FK Gomel", country: "Belarus", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x00C000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x00FF00, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 9, shortName: "clb", longName: "Club Brugge KV", country: "Belgium", uniform: [{ angle: 0, mainColor: [0x000000, 0x0000FF, 0x000000], avatarColor: 0xFFFFFF }, { angle: 45, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x0000FF }] },
    { ID: 10, shortName: "gnt", longName: "KAA Gent", country: "Belgium", uniform: [{ angle: 0, mainColor: [0x0000FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFF00], avatarColor: 0x0000FF }] },
    { ID: 11, shortName: "gnk", longName: "KRC Genk", country: "Belgium", uniform: [{ angle: 0, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0x0000FF }] },
    { ID: 12, shortName: "ant", longName: "Royal Antwerp FC", country: "Belgium", uniform: [{ angle: 90, mainColor: [0xC00000, 0xFF0000, 0xC00000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFF00, 0xFFFF00, 0x000000], avatarColor: 0xFF0000 }] },
    { ID: 13, shortName: "and", longName: "RSC Anderlecht", country: "Belgium", uniform: [{ angle: 0, mainColor: [0x8000FF, 0x400080, 0x8000FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x8000FF }] },
    { ID: 14, shortName: "fla", longName: "CR Flamengo", country: "Brazil", uniform: [{ angle: 90, mainColor: [0x000000, 0xFF0000, 0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xFF0000 }] },
    { ID: 15, shortName: "san", longName: "Santos FC", country: "Brazil", uniform: [{ angle: 0, mainColor: [0xC00000, 0xFF4000, 0xC00000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFF4000, 0xC00000], avatarColor: 0x000000 }] },
    { ID: 16, shortName: "sao", longName: "São Paulo FC", country: "Brazil", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xE0E0E0, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFFFF00 }] },
    { ID: 17, shortName: "cor", longName: "SC Corinthians Paulista", country: "Brazil", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0x808080 }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0x008000 }] },
    { ID: 18, shortName: "pal", longName: "SE Palmeiras", country: "Brazil", uniform: [{ angle: 90, mainColor: [0x008000, 0xFFFFFF, 0x008000], avatarColor: 0xFFFFC0 }, { angle: 0, mainColor: [0xFFFFFF, 0x008000, 0xFFFFFF], avatarColor: 0xFFFFC0 }] },
    { ID: 19, shortName: "lud", longName: "PFK Ludogorets Razgrad", country: "Bulgaria", uniform: [{ angle: 75, mainColor: [0x008000, 0xFFFFFF, 0x008000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x008000], avatarColor: 0xFFFFFF }] },
    { ID: 20, shortName: "bei", longName: "Beijing Guoan FC", country: "China", uniform: [{ angle: 0, mainColor: [0x00C000, 0x008000, 0x00C000], avatarColor: 0xFFFF00 }, { angle: 0, mainColor: [0x80FF00, 0xFFFFFF, 0x80FF00], avatarColor: 0xFFFF00 }] },
    { ID: 21, shortName: "gua", longName: "Guangzhou FC", country: "China", uniform: [{ angle: 90, mainColor: [0xFF4000, 0xFFFFFF, 0xFF4000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFF00, 0x808080, 0xFFFF00], avatarColor: 0xFFFFFF }] },
    { ID: 22, shortName: "zag", longName: "GNK Dinamo Zagreb", country: "Croatia", uniform: [{ angle: 45, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFF8000, 0xFFFF00, 0xFFFF00], avatarColor: 0x0000FF }] },
    { ID: 23, shortName: "sppr", longName: "Sparta Prague", country: "Czechia", uniform: [{ angle: 0, mainColor: [0x800000, 0xFFFFFF, 0x000000], avatarColor: 0xFFC000 }, { angle: 0, mainColor: [0xFFFFFF, 0x800000, 0xFFFFFF], avatarColor: 0xFFC000 }] },
    { ID: 24, shortName: "plz", longName: "FC Viktoria Plzeň", country: "Czechia", uniform: [{ angle: 0, mainColor: [0x0000FF, 0xFF0000, 0x0000FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x0000FF, 0xFF0000], avatarColor: 0xFFFFFF }] },
    { ID: 25, shortName: "sgm", longName: "SK Sigma Olomouc", country: "Czechia", uniform: [{ angle: 0, mainColor: [0x4080C0, 0xFFFFFF, 0x4080C0], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFF0000, 0xC00000, 0xFF0000], avatarColor: 0x0000FF }] },
    { ID: 26, shortName: "slpr", longName: "SK Slavia Prague", country: "Czechia", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x0060C0, 0x0080FF], avatarColor: 0x000000 }] },
    { ID: 27, shortName: "bro", longName: "Brøndby IF", country: "Denmark", uniform: [{ angle: 90, mainColor: [0xFFFF00, 0x0000FF, 0x0000FF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x404040, 0x808080, 0x404040], avatarColor: 0xFFFF00 }] },
    { ID: 28, shortName: "cop", longName: "Copenhagen FC", country: "Denmark", uniform: [{ angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x0000FF }, { angle: 90, mainColor: [0x000080, 0x000000, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 29, shortName: "mid", longName: "FC Midtjylland", country: "Denmark", uniform: [{ angle: 90, mainColor: [0x000000, 0x000000, 0xFFFFFF], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x804080, 0x000080, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 30, shortName: "nrs", longName: "FC Nordsjælland", country: "Denmark", uniform: [{ angle: 0, mainColor: [0xFF0000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x0080FF], avatarColor: 0xFFFFFF }] },
    { ID: 31, shortName: "alh", longName: "Al Ahly", country: "Egypt", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0xC0C000 }, { angle: 90, mainColor: [0xC0C0C0, 0x000000, 0xC0C000], avatarColor: 0xC0C000 }] },
    { ID: 32, shortName: "mon", longName: "AS Monaco FC", country: "France", uniform: [{ angle: 120, mainColor: [0xFF0000, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xC0C000 }] },
    { ID: 33, shortName: "asse", longName: "AS Saint-Étienne", country: "France", uniform: [{ angle: 90, mainColor: [0x00C000, 0xFFFFFF, 0x00C000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x00C000, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: 34, shortName: "lil", longName: "Lille OSC", country: "France", uniform: [{ angle: 90, mainColor: [0xFF0000, 0x000080, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0xFFFFFF, 0x000000], avatarColor: 0x000080 }] },
    { ID: 35, shortName: "ol", longName: "Olympique Lyonnais", country: "France", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0x0000FF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFF0000], avatarColor: 0x0000FF }] },
    { ID: 36, shortName: "mar", longName: "Olympique Marseille", country: "France", uniform: [{ angle: 0, mainColor: [0x00C0FF, 0xFFFFFF, 0x00C0FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x404080, 0x202040, 0x00C0FF], avatarColor: 0xFFFFFF }] },
    { ID: 37, shortName: "psg", longName: "Paris Saint Germain FC", country: "France", uniform: [{ angle: 0, mainColor: [0x000080], avatarColor: 0xFF0000 }, { angle: 0, mainColor: [0xFFFFFF, 0xFFFFFF, 0x000080], avatarColor: 0xFF0000 }] },
    { ID: 38, shortName: "lev", longName: "Bayer 04 Leverkusen", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFF0000, 0x000000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0xFF0000 }] },
    { ID: 39, shortName: "bay", longName: "Bayern Munchen", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xC00000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xC0C000 }] },
    { ID: 40, shortName: "dor", longName: "Borussia Dortmund", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFFFF00, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFF00 }] },
    { ID: 41, shortName: "sch", longName: "FC Schalke 04", country: "Germany", uniform: [{ angle: 90, mainColor: [0x0000FF, 0xFFFFFF, 0x0000FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x000080, 0xFFFFFF], avatarColor: 0x00FFFF }] },
    { ID: 42, shortName: "lei", longName: "RB Leipzig", country: "Germany", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0xFF0000, 0xFF0000], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0x000000], avatarColor: 0xC0C000 }] },
    { ID: 43, shortName: "wol", longName: "VfL Wolfsburg", country: "Germany", uniform: [{ angle: 0, mainColor: [0x00FF00], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x00FF00, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 44, shortName: "aek", longName: "AEK", country: "Greece", uniform: [{ angle: 45, mainColor: [0x000000, 0xFFFF00, 0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0xFFFF00, 0xFFFF00], avatarColor: 0xFFFFFF }] },
    { ID: 45, shortName: "oly", longName: "Olympiacos", country: "Greece", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xC0C0C0, 0xFFFFFF, 0xC0C0C0], avatarColor: 0x000000 }] },
    { ID: 46, shortName: "pan", longName: "Panathinaikos FC", country: "Greece", uniform: [{ angle: 0, mainColor: [0x00C060], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x00C060 }] },
    { ID: 47, shortName: "paok", longName: "PAOK", country: "Greece", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0x008080 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 48, shortName: "btj", longName: "Beitar Jerusalem FC", country: "Israel", uniform: [{ angle: 0, mainColor: [0x000000, 0xFFFF00, 0x000000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFF00 }] },
    { ID: 49, shortName: "hbe", longName: "Hapoel Be'er Sheva FC", country: "Israel", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xE0E0E0, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xFF0000 }] },
    { ID: 50, shortName: "mch", longName: "Maccabi Haifa FC", country: "Israel", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x008000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x404040, 0x000000, 0x404040], avatarColor: 0xFFFFFF }] },
    { ID: 51, shortName: "mca", longName: "Maccabi Tel Aviv FC", country: "Israel", uniform: [{ angle: 90, mainColor: [0xFFFF00, 0x0000FF, 0xFFFF00], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000000, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }] },
    { ID: 52, shortName: "mil", longName: "AC Milan", country: "Italy", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x000000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFEDCBA], avatarColor: 0x800000 }] },
    { ID: 53, shortName: "rom", longName: "AS Roma FC", country: "Italy", uniform: [{ angle: 90, mainColor: [0xC00000, 0xFFC000, 0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0x0000C0, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 54, shortName: "int", longName: "FC Internazionale Milano", country: "Italy", uniform: [{ angle: 0, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x0000FF, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 55, shortName: "juv", longName: "Juventus FC", country: "Italy", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xFFFF00 }, { angle: 0, mainColor: [0x404040], avatarColor: 0xFFFF00 }] },
    { ID: 56, shortName: "nap", longName: "SSC Napoli", country: "Italy", uniform: [{ angle: 90, mainColor: [0x0080FF, 0xFFFFFF, 0x0080FF], avatarColor: 0x000080 }, { angle: 0, mainColor: [0x808000, 0xFFFFFF, 0x808000], avatarColor: 0x000080 }] },
    { ID: 57, shortName: "tor", longName: "Torino FC", country: "Italy", uniform: [{ angle: 90, mainColor: [0x800000, 0xFFFFFF, 0x000000], avatarColor: 0xFFC000 }, { angle: 45, mainColor: [0xFFFFFF, 0x800000, 0xFFFFFF], avatarColor: 0xFFC000 }] },
    { ID: 58, shortName: "ksh", longName: "Kashima Antlers", country: "Japan", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xC0C0C0, 0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xC0C0C0, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xFF0000 }] },
    { ID: 59, shortName: "kws", longName: "Kawasaki Frontale", country: "Japan", uniform: [{ angle: 90, mainColor: [0x0080FF, 0x0080FF, 0x000040], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xC0C0C0, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x0080FF }] },
    { ID: 60, shortName: "tig", longName: "Tigres UANL", country: "Mexico", uniform: [{ angle: 0, mainColor: [0xFFC000], avatarColor: 0x0000FF }, { angle: 0, mainColor: [0xC0D0E0], avatarColor: 0xFFC000 }] },
    { ID: 61, shortName: "ajx", longName: "AFC AJAX", country: "Netherlands", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 62, shortName: "az", longName: "AZ Alkmaar", country: "Netherlands", uniform: [{ angle: 60, mainColor: [0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x404040, 0x000000, 0x404040], avatarColor: 0xFFFFFF }] },
    { ID: 63, shortName: "twe", longName: "FC Twente", country: "Netherlands", uniform: [{ angle: 0, mainColor: [0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0xC00000, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 64, shortName: "fey", longName: "Feyenoord", country: "Netherlands", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF], avatarColor: 0x202020 }, { angle: 0, mainColor: [0xC0C0C0, 0x808080], avatarColor: 0xFFFFFF }] },
    { ID: 65, shortName: "psv", longName: "PSV Eindhoven", country: "Netherlands", uniform: [{ angle: 90, mainColor: [0xFF0000, 0x000000, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0x203040], avatarColor: 0xA0E0A0 }] },
    { ID: 66, shortName: "mol", longName: "Molde FK", country: "Norway", uniform: [{ angle: 90, mainColor: [0x0000FF, 0xFFFFFF, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x0000FF, 0x0000FF], avatarColor: 0x000000 }] },
    { ID: 67, shortName: "tro", longName: "Tromsø IL", country: "Norway", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFC000, 0xFF0000], avatarColor: 0xFFC000 }, { angle: 0, mainColor: [0x000000, 0xFFC000, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 68, shortName: "lgw", longName: "Legia Warszawa", country: "Poland", uniform: [{ angle: 150, mainColor: [0xFFFFFF, 0xFFFFFF, 0x008000], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x00C000, 0x008000, 0x008000], avatarColor: 0xFFFFFF }] },
    { ID: 69, shortName: "lpz", longName: "KKS Lech Poznań", country: "Poland", uniform: [{ angle: 0, mainColor: [0x0000C0, 0x000080, 0x0000C0], avatarColor: 0xFFFF00 }, { angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x0000FF }] },
    { ID: 70, shortName: "por", longName: "FC Porto", country: "Portugal", uniform: [{ angle: 0, mainColor: [0x0000FF, 0xFFFFFF, 0x0000FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0x000000, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 71, shortName: "bra", longName: "SC Braga", country: "Portugal", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0x006030], avatarColor: 0xC0C000 }] },
    { ID: 72, shortName: "ben", longName: "SL Benfica", country: "Portugal", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }] },
    { ID: 73, shortName: "spo", longName: "Sporting CP", country: "Portugal", uniform: [{ angle: 90, mainColor: [0x00C000, 0xFFFFFF, 0x00C000], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0xC0FF00, 0x000000, 0xC0FF00], avatarColor: 0x00C000 }] },
    { ID: 74, shortName: "clj", longName: "CFR Cluj", country: "Romania", uniform: [{ angle: 0, mainColor: [0x800000, 0xFFFFFF, 0x800000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x800000 }] },
    { ID: 75, shortName: "fcsb", longName: "FCSB", country: "Romania", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x0000FF, 0xFF0000], avatarColor: 0xFFFF00 }, { angle: 90, mainColor: [0xFFFFFF, 0xA0C0E0, 0xFFFFFF], avatarColor: 0xFFC000 }] },
    { ID: 76, shortName: "dym", longName: "FC Dynamo Moscow", country: "Russia", uniform: [{ angle: 0, mainColor: [0x0080FF], avatarColor: 0xC0C000 }, { angle: 90, mainColor: [0xFFFFFF], avatarColor: 0x0080FF }] },
    { ID: 77, shortName: "kra", longName: "FC Krasnodar", country: "Russia", uniform: [{ angle: 0, mainColor: [0x000000, 0x008000, 0x000000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x008080, 0x00FFFF, 0x00FFFF], avatarColor: 0x000000 }] },
    { ID: 78, shortName: "spa", longName: "FC Spartak Moscow", country: "Russia", uniform: [{ angle: 60, mainColor: [0xC00000, 0xFFFFFF, 0xC00000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: 79, shortName: "znt", longName: "FK Zenit", country: "Russia", uniform: [{ angle: 0, mainColor: [0x0080FF], avatarColor: 0xC0C000 }, { angle: 90, mainColor: [0xFFFFFF], avatarColor: 0x0080FF }] },
    { ID: 80, shortName: "lkm", longName: "Lokomotiv Moscow", country: "Russia", uniform: [{ angle: 90, mainColor: [0x008000, 0xFF0000, 0x008000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x008000 }] },
    { ID: 81, shortName: "cska", longName: "PFC CSKA Moscow", country: "Russia", uniform: [{ angle: 90, mainColor: [0xC00030, 0x3000C0, 0x3000C0], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0xC0C0C0, 0xFFFFFF, 0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: 82, shortName: "cel", longName: "Celtic FC", country: "Scotland", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x00C000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x008000], avatarColor: 0xC0C000 }] },
    { ID: 83, shortName: "ran", longName: "Glasgow Rangers", country: "Scotland", uniform: [{ angle: 90, mainColor: [0x0080FF, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x000000, 0x000000, 0xFF0000], avatarColor: 0xFFFFFF }] },
    { ID: 84, shortName: "crv", longName: "FK Crvena Zvezda", country: "Serbia", uniform: [{ angle: 55, mainColor: [0xFFFFFF, 0xFF0000, 0xFF0000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x003030], avatarColor: 0xFFFFFF }] },
    { ID: 85, shortName: "par", longName: "FK Partizan Belgrade", country: "Serbia", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000000, 0x000000], avatarColor: 0x808080 }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x000000 }] },
    { ID: 86, shortName: "bil", longName: "Athletic Bilbao", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x80FF80], avatarColor: 0x000000 }] },
    { ID: 87, shortName: "atm", longName: "Atlético Madrid", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0xFF0000, 0xFF0000], avatarColor: 0xFFFFFF }] },
    { ID: 88, shortName: "bar", longName: "FC Barcelona", country: "Spain", uniform: [{ angle: 0, mainColor: [0x004D98, 0xA50044, 0x004D98], avatarColor: 0xFFED02 }, { angle: 0, mainColor: [0xD0C0E0], avatarColor: 0xFFFFFF }] },
    { ID: 89, shortName: "rma", longName: "Real Madrid CF", country: "Spain", uniform: [{ angle: 135, mainColor: [0xFFFFFF, 0x004996, 0xFFFFFF], avatarColor: 0xFCBF00 }, { angle: 90, mainColor: [0x004996], avatarColor: 0xFCBF00 }] },
    { ID: 90, shortName: "sev", longName: "Sevilla FC", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }] },
    { ID: 91, shortName: "val", longName: "Valencia CF", country: "Spain", uniform: [{ angle: 0, mainColor: [0xFFDF1C, 0xEE3524, 0xFFDF1C], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xC00000], avatarColor: 0xFFDF1C }] },
    { ID: 92, shortName: "aik", longName: "AIK Stockholm", country: "Sweden", uniform: [{ angle: 0, mainColor: [0x003155, 0xFFEE00, 0x003155], avatarColor: 0xC9AD00 }, { angle: 0, mainColor: [0xFFEE00], avatarColor: 0x000000 }] },
    { ID: 93, shortName: "mal", longName: "Malmö FF", country: "Sweden", uniform: [{ angle: 90, mainColor: [0x2F97DA, 0xFFFFFF, 0x2F97DA], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x174B6D], avatarColor: 0x2F97DA }] },
    { ID: 94, shortName: "bas", longName: "FC Basel", country: "Switzerland", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x0000FF], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0xFFFFFF], avatarColor: 0x0000FF }] },
    { ID: 95, shortName: "zur", longName: "Zurich FK", country: "Switzerland", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 96, shortName: "bjk", longName: "Beşiktaş JK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 97, shortName: "brs", longName: "Bursaspor SK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x02863A, 0xFFFFFF, 0x02863A], avatarColor: 0x000000 }, { angle: 135, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x02863A }] },
    { ID: 98, shortName: "fb", longName: "Fenerbahçe SK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x000080, 0xFFFF00, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xE0E0C0, 0xC0C0A0, 0xE0E0C0], avatarColor: 0x000080 }] },
    { ID: 99, shortName: "gs", longName: "Galatasaray SK", country: "Turkey", uniform: [{ angle: 45, mainColor: [0xFDB912, 0xA90432], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFDB912 }] },
    { ID: 100, shortName: "bsk", longName: "Istanbul Başakşehir FK", country: "Turkey", uniform: [{ angle: 90, mainColor: [0xFF8000, 0x000080, 0xFF8000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0xFF8000, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 101, shortName: "ts", longName: "Trabzonspor SK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x800000, 0x0080FF, 0x800000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0x0000C0, 0x000080], avatarColor: 0xFFFFFF }] },
    { ID: 102, shortName: "ars", longName: "Arsenal FC", country: "UK", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x808000 }, { angle: 0, mainColor: [0xFFFF80], avatarColor: 0x000000 }] },
    { ID: 103, shortName: "che", longName: "Chelsea FC", country: "UK", uniform: [{ angle: 0, mainColor: [0x034694], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFF00, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }] },
    { ID: 104, shortName: "liv", longName: "Liverpool FC", country: "UK", uniform: [{ angle: 0, mainColor: [0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFEDCBA, 0x000000, 0xFEDCBA], avatarColor: 0xFFFFFF }] },
    { ID: 105, shortName: "mu", longName: "Manchester United FC", country: "UK", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0x000000], avatarColor: 0xFFFF00 }, { angle: 90, mainColor: [0x00C0FF, 0x0080FF, 0x00C0FF], avatarColor: 0xFF0000 }] },
    { ID: 106, shortName: "mc", longName: "Manchester City FC", country: "UK", uniform: [{ angle: 0, mainColor: [0x00C0FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x00C0FF }] },
    { ID: 107, shortName: "tot", longName: "Tottenham Hotspur FC", country: "UK", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000080, 0x000080], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x000080, 0x000040, 0x000040], avatarColor: 0xFFFFFF }] },
    { ID: 108, shortName: "dyk", longName: "Dynamo Kyiv", country: "Ukraine", uniform: [{ angle: 90, mainColor: [0x176FC1, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xBF851E }, { angle: 90, mainColor: [0x176FC1, 0x000040, 0x000040], avatarColor: 0xBF851E }] },
    { ID: 109, shortName: "krp", longName: "Karpaty Lviv", country: "Ukraine", uniform: [{ angle: 0, mainColor: [0x037B4F], avatarColor: 0xEAB306 }, { angle: 90, mainColor: [0xFFFFFF, 0x037B4F, 0x037B4F], avatarColor: 0xEAB306 }] },
    { ID: 110, shortName: "mtl", longName: "Metallist Kharkiv", country: "Ukraine", uniform: [{ angle: 0, mainColor: [0xFFC000], avatarColor: 0x000080 }, { angle: 0, mainColor: [0x000080], avatarColor: 0xFFC000 }] },
    { ID: 111, shortName: "don", longName: "Shakhtar Donetsk", country: "Ukraine", uniform: [{ angle: 90, mainColor: [0xFF8000, 0x000000, 0xFF8000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0xFF8000, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 112, shortName: "lag", longName: "LA Galaxy", country: "USA", uniform: [{ angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x000080 }, { angle: 0, mainColor: [0x000000, 0x008000, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 113, shortName: "arg", longName: "Argentina", country: "Argentina", uniform: [{ angle: 180, mainColor: [0x38ADBA, 0xFFFFFF, 0x38ADBA], avatarColor: 0x000000 }] },
    { ID: 114, shortName: "bra", longName: "Brasil", country: "Brasil", uniform: [{ angle: 180, mainColor: [0xCCCC33, 0xCCCC33, 0xCCCC33], avatarColor: 0x3FA82A }] },
    { ID: 115, shortName: "ger", longName: "Alemania", country: "Alemania", uniform: [{ angle: 90, mainColor: [0x0A0A0A, 0xDB0B0B, 0xFFFF14], avatarColor: 0xFFFFFF }] },
    { ID: 116, shortName: "can", longName: "Canadá", country: "Canadá", uniform: [{ angle: 180, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }] },
    { ID: 117, shortName: "usa", longName: "Estados Unidos", country: "Estados Unidos", uniform: [{ angle: 180, mainColor: [0x35207A, 0x35207A, 0x35207A], avatarColor: 0xFFFFFF }] },
    { ID: 118, shortName: "ita", longName: "Italia", country: "Italia", uniform: [{ angle: 180, mainColor: [0xFFFFFF], avatarColor: 0xC7AE32 }] },
    { ID: 119, shortName: "esp", longName: "España", country: "España", uniform: [{ angle: 90, mainColor: [0xAA151B, 0xF1C40F, 0xAA151B], avatarColor: 0x000000 }] },
    { ID: 120, shortName: "fra", longName: "Francia", country: "Francia", uniform: [{ angle: 90, mainColor: [0x484485], avatarColor: 0xC9B81E }] },
    { ID: 121, shortName: "mex", longName: "México", country: "México", uniform: [{ angle: 180, mainColor: [0x5D785F], avatarColor: 0xFFFFFF }] },
    { ID: 122, shortName: "eng", longName: "Inglaterra", country: "Inglaterra", uniform: [{ angle: 180, mainColor: [0xFFFFFF], avatarColor: 0x404294 }] },
    { ID: 123, shortName: "ned", longName: "Países Bajos", country: "Países Bajos", uniform: [{ angle: 180, mainColor: [0x21468B, 0xFFFFFF, 0xF77F00], avatarColor: 0xCCC054 }] },
    { ID: 124, shortName: "por", longName: "Portugal", country: "Portugal", uniform: [{ angle: 0, mainColor: [0x006400, 0x006400, 0x006400], avatarColor: 0xFFFFFF }] },
    { ID: 125, shortName: "dor", longName: "Dortmund", country: "Alemania", uniform: [{ angle: 45, mainColor: [0xD5E825, 0xD5E825, 0x000000], avatarColor: 0xFFFFFF }] },
    { ID: 126, shortName: "bar", longName: "Barcelona", country: "España", uniform: [{ angle: 0, mainColor: [0x263199, 0x99251D], avatarColor: 0xD2FF3D }] },
    { ID: 127, shortName: "rm", longName: "Real Madrid", country: "España", uniform: [{ angle: 45, mainColor: [0xFFFFFF, 0x353778, 0xFFFFFF], avatarColor: 0xB3D934 }] },
    { ID: 128, shortName: "atm", longName: "Atlético de Madrid", country: "España", uniform: [{ angle: 0, mainColor: [0x7B2235, 0xFFF0F0, 0x7B2235], avatarColor: 0x221D53 }] },
    { ID: 129, shortName: "juv", longName: "Juventus", country: "Italia", uniform: [{ angle: 180, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xDAA520 }] },
    { ID: 130, shortName: "im", longName: "Inter Miami", country: "Estados Unidos", uniform: [{ angle: 0, mainColor: [0xCF89ED], avatarColor: 0x000000 }] },
    { ID: 131, shortName: "pal", longName: "Palmeiras", country: "Brasil", uniform: [{ angle: 0, mainColor: [0x278A34], avatarColor: 0xC4B845 }] },
    { ID: 132, shortName: "mc", longName: "Manchester City", country: "Inglaterra", uniform: [{ angle: 0, mainColor: [0x9ACBE9], avatarColor: 0xFCFCFC }] }
];

function uniformesaleatorios() {
    const team1Uniforms = teams.find(t => t.ID === 1).uniform;
    const team2Uniforms = teams.find(t => t.ID === 2).uniform;

    const uniform1 = team1Uniforms[Math.floor(Math.random() * team1Uniforms.length)];
    const uniform2 = team2Uniforms[Math.floor(Math.random() * team2Uniforms.length)];

    room.setTeamColors(1, uniform1.angle, uniform1.avatarColor, uniform1.mainColor);
    room.setTeamColors(2, uniform2.angle, uniform2.avatarColor, uniform2.mainColor);
}

let redLine = -400;
let blueLine = 400;
let maxDefenders = 3;
let redDefenders = [];
let blueDefenders = [];
let attackers = [[], []];

function handleDef() {
    let oldDefenders = [JSON.stringify(redDefenders.map((p) => p.id)), JSON.stringify(blueDefenders.map((p) => p.id))];
    redDefenders = redDefenders.filter(p => room.getPlayer(p.id) !== null && room.getPlayer(p.id).team == 1);
    blueDefenders = blueDefenders.filter(p => room.getPlayer(p.id) !== null && room.getPlayer(p.id).team == 2);
    if (oldDefenders[0] != JSON.stringify(redDefenders.map((p) => p.id)) && redDefenders.length < maxDefenders) {
        for (let j = 0; j < attackers[0].length; j++) {
            room.setPlayerDiscProperties(attackers[0][j].id, { cGroup: room.CollisionFlags.red });
        }
    }
    if (oldDefenders[1] != JSON.stringify(blueDefenders.map((p) => p.id)) && blueDefenders.length < maxDefenders) {
        for (let j = 0; j < attackers[1].length; j++) {
            room.setPlayerDiscProperties(attackers[1][j].id, { cGroup: room.CollisionFlags.blue });
        }
    }
    let arr = [[], []];
    for (let i = 0; i < teamRed.length; i++) {
        if (teamRed[i].position !== null && teamRed[i].position.x <= redLine + playerRadius - 0.01) {
            if (redDefenders.find(a => a.id == teamRed[i].id) === undefined) {
                arr[0].push(teamRed[i]);
            }
        }
        else {
            if (redDefenders.find(a => a.id == teamRed[i].id) !== undefined) {
                redDefenders = redDefenders.filter(a => a.id !== teamRed[i].id);
                if (redDefenders.length < maxDefenders) {
                    for (let j = 0; j < attackers[0].length; j++) {
                        room.setPlayerDiscProperties(attackers[0][j].id, { cGroup: room.CollisionFlags.red });
                    }
                }
            }
        }
    }
    arr[0].sort((a, b) => a.position.x - b.position.x);
    for (let i = 0; i < arr[0].length; i++) {
        if (redDefenders.length < maxDefenders) {
            redDefenders.push(arr[0][i]);
            if (redDefenders.length === maxDefenders) {
                attackers[0] = teamRed.filter(a => !redDefenders.map(b => b.id).includes(a.id));
                attackers[0].forEach(a => {
                    room.setPlayerDiscProperties(a.id, { cGroup: room.CollisionFlags.red | room.CollisionFlags.c0 });
                });
                break;
            }
        }
    }
    for (let i = 0; i < teamBlue.length; i++) {
        if (teamBlue[i].position !== null && teamBlue[i].position.x >= blueLine - playerRadius + 0.01) {
            if (blueDefenders.find(a => a.id == teamBlue[i].id) === undefined) {
                arr[1].push(teamBlue[i]);
            }
        }
        else {
            if (blueDefenders.find(a => a.id == teamBlue[i].id) !== undefined) {
                blueDefenders = blueDefenders.filter(a => a.id !== teamBlue[i].id);
                if (blueDefenders.length < maxDefenders) {
                    for (let j = 0; j < attackers[1].length; j++) {
                        room.setPlayerDiscProperties(attackers[1][j].id, { cGroup: room.CollisionFlags.blue });
                    }
                }
            }
        }
    }
    arr[1].sort((a, b) => a.position.x - b.position.x);
    for (let i = 0; i < arr[1].length; i++) {
        if (blueDefenders.length < maxDefenders) {
            blueDefenders.push(arr[1][i]);
            if (blueDefenders.length === maxDefenders) {
                attackers[1] = teamBlue.filter(a => !blueDefenders.map(b => b.id).includes(a.id));
                attackers[1].forEach(a => {
                    room.setPlayerDiscProperties(a.id, { cGroup: room.CollisionFlags.blue | room.CollisionFlags.c1 });
                });
                break;
            }
        }
    }
}

var announcements = [
    "¿Sabías que puedes usar !help para ver todos los comandos?\n¡Úsalo si tienes dudas!",
    "Usa !afk solo en los primeros 30s de la partida\nSi no estás en cancha, no hay límite.",
    "Recuerda que tu ELO añadido después de una partida\ndepende de tu rendimiento y contribuciones.",
    "Consulta tus estadísticas con !me\nMira tu nivel y ELO con !myelo",
    "Top jugadores usan !tops para ver los mejores en cada categoría\nPara individuales usa !<estadística>",
    "Cambia tu nombre en el ranking con !rename\nEsto oculta quién eres en realidad",
    "¿Quieres cambiar tu uniforme o iniciar votación?\nUsa !uni y comienza votación\nO cambia si eres capitán",
    "Mira la lista de jugadores AFK con !afks\nEvita perder el pick o elo",
    "Muestra tus estadísticas a todos con !showme\n¡Comparte tu progreso con tus amigos!",
    "Consulta los VIPs actuales con !vips\nRecuerda que puedes estar aquí igual.. !vip",
    "Obtén el link del Discord con !discord\nÚnete a la comunidad y participa en eventos y la liga",
    "Usa el comando !votekick para iniciar una votación\nEl mal uso será sancionado",
    "Usa el comando !vote para votar en la votación actual\nVotar en votekicks indebidos será sancionado"
];

var currentAnnouncementIndex = 0;
var intervalTime = 75000;

function sendAnnouncement(message) {
    const lines = message.split('\n');
    const maxLineLength = Math.max(...lines.map(line => line.length));
    const padding = ' '.repeat(5);
    let fullAnnouncement = '';

    lines.forEach(line => {
        const totalCenteringPadding = maxLineLength - line.length;
        const leftCenteringPadding = Math.floor(totalCenteringPadding / 2);
        const rightCenteringPadding = totalCenteringPadding - leftCenteringPadding;

        const centeredLine = ' '.repeat(leftCenteringPadding) + line + ' '.repeat(rightCenteringPadding);

        fullAnnouncement += padding + centeredLine + '\n';
    });
    
    room.sendAnnouncement(fullAnnouncement, null, 0x87CEEB, 'bold', HaxNotification.NONE);
}

setInterval(() => {
    sendAnnouncement(announcements[currentAnnouncementIndex]);
    currentAnnouncementIndex = (currentAnnouncementIndex + 1) % announcements.length;
}, intervalTime);

const sanitize = text => String(text).replace(/['"]/g, '`').slice(0, 1900);

const logError = (title, details) => {
    if (!errorWebhook) return console.error("Webhook de errores no definido.");
    fetch(errorWebhook, {
        method: 'POST',
        body: JSON.stringify({ content: `🚨 ${title}\n${details}`, username: 'Error Logger' }),
        headers: { 'Content-Type': 'application/json' }
    }).catch(e => console.error('Error al enviar al webhook:', e));
};

function safeExecute(fn, ctx = null, args = []) {
    try { return fn.apply(ctx, args); }
    catch (err) {
        logError('ERROR EN FUNCIÓN', `**Función:** \`${fn.name || 'anonima'}\`\n**Mensaje:** \`${sanitize(err.message)}\`\n**Stack:** \`\`\`${sanitize(err.stack)}\`\`\``);
    }
}

window.onerror = (msg, src, line, col, err) => {
    logError('ERROR GLOBAL', `**Mensaje:** \`${sanitize(msg)}\`\n**Fuente:** \`${sanitize(src)}\`\n**Línea:** ${line}, **Columna:** ${col}\n**Stack:** \`\`\`${sanitize(err?.stack || 'No disponible')}\`\`\``);
    return true;
};

window.onunhandledrejection = e => {
    const r = e.reason;
    logError('PROMESA RECHAZADA', r instanceof Error ?
        `**Mensaje:** \`${sanitize(r.message)}\`\n**Stack:** \`\`\`${sanitize(r.stack)}\`\`\`` :
        `**Razón:** \`${sanitize(JSON.stringify(r))}\``);
    e.preventDefault();
};

['setTimeout', 'setInterval'].forEach(fnName => {
    const original = window[fnName];
    window[fnName] = (fn, delay, ...args) => original(() => safeExecute(fn, null, args), delay);
});

const originalAddEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function (type, listener, options) {
    return originalAddEventListener.call(this, type, (...args) => safeExecute(listener, this, args), options);
};

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getGameStats();
    handleActivity();
    if (defmode) {
        handleDef();
    }
};