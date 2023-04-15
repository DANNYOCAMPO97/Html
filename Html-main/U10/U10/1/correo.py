import re

def validar_correo(correo):

    patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    
    if re.match(patron, correo):
        return True
    else:
        return False

correo_usuario = input("Ingresa un correo electrónico: ")

if validar_correo(correo_usuario):
    print("El correo electrónico es válido.")
else:
    print("El correo electrónico no es válido.")
