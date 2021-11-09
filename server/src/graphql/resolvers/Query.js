import Message from "../../models/Message"

const Query = {
    ping () {
        return "pong!"
    },

    // Funcion asincrona para obtener los resultados
    messages: async () => {
        return await Message.find()
    }
}

export default Query