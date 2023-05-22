from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from starlette.responses import HTMLResponse
from sqlalchemy import create_engine, Column, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from passlib.hash import pbkdf2_sha256


# Configurar a conexão com o banco de dados
engine = create_engine('mysql+mysqlconnector://<username>:<password>@<host>/<database>')
Session = sessionmaker(bind=engine)
Base = declarative_base()


# Definir uma classe de modelo para a tabela de usuários
class User(Base):
    __tablename__ = 'users'

    email = Column(String, primary_key=True)
    password = Column(String)



app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

#Rota para a página inicial com uma função async que renderiza o template index.html
@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse("/index.html", {"request": request})

@app.post("/cadastrar")
async def cadastrar(request: Request):
    form_data = await request.form()
    
    nome = form_data.get("nome")
    email = form_data.get("email")
    senha = form_data.get("senha")
    # Etc. - você pode obter outros campos do formulário da mesma maneira

    parse_senha = pbkdf2_sha256.hash(senha)
    
    # Aqui você pode fazer a lógica para armazenar os valores em um arquivo de texto
    with open("dados.txt", "a") as file:
        file.write(f"Nome: {nome}\n")
        file.write(f"Email: {email}\n")
        file.write(f"Hash: {parse_senha}\n")
        file.write("\n")

    response_content = f'<script> alert("Cadastro realizado com sucesso!"); window.location.href = "/";</script>'

    return HTMLResponse(content=response_content, status_code=200)

# Rota para o endpoint de login
@app.post("/login")
async def login(request: Request):
    form_data = await request.form()

    email = form_data.get("email")
    password = form_data.get("senha")

    # Conectar ao banco de dados
    session = Session()

    # Buscar o usuário com o email fornecido
    user = session.query(User).filter_by(email=email).first()

    if user:
        # Verificar se a senha fornecida corresponde ao hash armazenado no banco de dados
        if pbkdf2_sha256.verify(password, user.password):
            # Login bem-sucedido
            return {"message": "Login realizado com sucesso!"}
        else:
            # Senha incorreta
            return {"message": "Senha incorreta."}
    else:
        # Usuário não encontrado
        return {"message": "Usuário não encontrado."}
