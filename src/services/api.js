import axios from "axios";

const api = axios.create({ baseUrl: "http://localhost:3333" });

export default api;

// iOS com Emulador: localhost normal
// iOS com Fisico: ip do computador
//  Android com Emulador: locahost:3333 mas tem que rodar (adb reverse tpc:3333 tcp:3333)
// Android com Emulador: 10.0.2.2(Android)
// Android físico: Ip da máquina
