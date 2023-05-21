import uvicorn
import socket

#Pega o IP da máquina
hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname)

#Inicia o servidor no host e porta especificados
if __name__ == "__main__":
    uvicorn.run("api_web:app", host=f'{IPAddr}', port=5000, reload=True)
