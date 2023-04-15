def validar_numero_telefono(cadena):

    cadena = cadena.replace(" ", "").replace("-", "")

    if not cadena.isdigit():
        return False

    if len(cadena) != 10:
        return False

    return True

numero_telefono = input("Ingrese el número de teléfono (10 dígitos): ")
if validar_numero_telefono(numero_telefono):
    print("El número de teléfono es válido.")
else:
    print("El número de teléfono no es válido.")
