def contar_palabra(frase, palabra):

    frase = frase.lower()
    palabra = palabra.lower()

    palabras = frase.split(" ")

    contador = 0

    for p in palabras:

        if p == palabra:
            contador += 1

    return contador

frase = "Este es un ejemplo de texto con ejemplo de palabra repetida"
palabra_buscada = "ejemplo"

resultado = contar_palabra(frase, palabra_buscada)
print("El número de veces que se encuentra la palabra '{}' en la frase es: {}".format(palabra_buscada, resultado))
