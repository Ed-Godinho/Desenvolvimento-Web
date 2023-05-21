from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import json

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

#Rota para a página inicial com uma função async que renderiza o template index.html
@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse("/index.html", {"request": request})

