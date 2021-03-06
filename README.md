# Sprint4 - Validacions

Validar un formulari amb JavaScript. Exemple de validació: [Zip Exemple](https://itacademy.barcelonactiva.cat/pluginfile.php/4451/mod_assign/introattachment/0/validation.zip?forcedownload=1)

Nota lliurament. Aquest exercici s'ha de lliurar per **pull request**, tens **dues opcions**:

- Crear les tres carpetes dins del projecte, un per nivell, pujar tot i crear el pull request amb els tres nivells.

- La manera ideal és crear una branca develop, pujant el desenvolupament de cada nivell en un commit diferent. Quan s'acaba, es fa pull request de develop a màster (o main). D'aquesta manera es veuran els avanços en els commits.

##

## Nivell 1

L'objectiu d'aquest apartat serà validar els formularis de la teva web amb javascript. En el cas de que la teva web no tingui algun d'aquest formulari, pots validar-ne un altres. 

Nota: els formularis no es validen amb ALERTS!! 

Pista: utiliza la clase "is-invalid"amb Bootstrap 4.

- **Crear validar un formulari de cerca**:

● Condicions: La paraula introduïda haurà de ser obligatòria i contenir més de 3 caràcters.

- **Crear i validar un formulari de login** (haurà de tenir un camp email i un altre de contrasenya): 

● Condicions: Els camps email i contrasenya hauran de ser obligatoris. El email haurà de seguir
el format estàndard dels email (Hi ha molta documentació)

- **Crear i validar un formulari de registre** (com a mínim haurà de tenir un camp email, contrasenya,  repetició de contrasenya i un desplegable de província).

● Les condicions de validació les deixem a les vostres mans.

Exemple amb la clase de bootstrap **"is-invalid":**

![](./readme/formulari_registre.png)

Nota: els formularis No es podrán validar amb la etiqueta required

![](./readme/fr2.png)

##

## Nivell 2

Crea una **validació al camp contrasenya** que:

- Mínim una majúscula
- Mínim un número
- Mínim 8 caràcters

##

## Nivell 3

Per a ajudar als usuaris, és necessari **indicar amb un missatge el tipus d'error**, col·locat en els inputs que continguin errors.

Per exemple: "les contrasenyes no coincideixen"

##

## Recursos

Exemple de validació: 

[JavaScript Form Validation](https://www.w3schools.com/js/js_validation.asp)
