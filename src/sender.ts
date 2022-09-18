import {create, Whatsapp, Message, SocketState} from "venom-bot"


class Sender {
    private client : Whatsapp

    constructor(){
        this.initialize()

    }
    async sendText(to:string, body: string) {
        await this.client.sendText(to, body)
        await this.client.sendImage(to,'images/image1.jpg')
        
    }
    private initialize(){

        const qr = (base64Qrimg: string) => {
        

        }

        const status = (statusSession: string, session: string) => {
        }

        const start = (client: Whatsapp) => {
            this.client = client

        }
 
        create('ws-sender-dev', qr)
        .then((client) => start(client))
        .catch((error) => console.error(error));
    }
}

export default Sender