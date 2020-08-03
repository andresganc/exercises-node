
# NODEjs - CURSO NC DE NODE

<br>

## INSTALACIONES

<br>

### Instalacion por NVM ( Node Version Manager )

    - NVM se conoce como Node Version Manager, de manera similar a RVM (Ruby Version Manager) para el lenguaje Ruby. NVM proporciona una opción para la fácil instalación de Node.js. También puede instalar una versión específica de Node.js o varias versiones de Node.js en el mismo sistema usando nvm y usar la versión requerida para la aplicación. Este tutorial lo ayudará a instalar y administrar Node.js usando NVM .

    El NVM predeterminado se instala en el directorio de inicio de los usuarios actuales, por lo que la instalación de nvm con un usuario no será accesible para otro usuario. Los usuarios de Windows pueden visitar nuestro otro tutorial para instalar Nodejs en el sistema Windows .

<br>
    
    Paso 1 - Instala NVM
    En primer lugar, debe instalar NVM en su sistema. Un script Bash está disponible para instalar nvm en su sistema. Use el siguiente comando para instalar NVM en su sistema Linux.

        $ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

    Vuelva a cargar el entorno del sistema con este comando. Establecerá las variables de entorno requeridas para usar nvm en el sistema.

        $ source ~/.profile     ## Debian based systems 
        $ source ~/.bashrc      ## CentOS/RHEL systems 


<br>
    
    Paso 2 - Encuentra la versión disponible de Node.js
    En este punto, ha instalado nvm en su sistema para el usuario actual. Ahora descubra la versión disponible de Node.js para instalar. Use la ls-remoteopción para enumerar versiones.

        $ nvm ls-remote

    Verá una larga lista de versiones disponibles.

        ...
       ...
       v12.16.2   (LTS: Erbium)
       v12.16.3   (LTS: Erbium)
       v12.17.0   (LTS: Erbium)
       v12.18.0   (LTS: Erbium)
       v12.18.1   (LTS: Erbium)
       v12.18.2   (Latest LTS: Erbium)
       ...
       ...
        v14.2.0
        v14.3.0
        v14.4.0
        v14.7.0

<br>

    Paso 3: instalación de Node.js con NVM
    Ahora instale la versión de node.js que necesita usar para ejecutar la aplicación node.js. El siguiente comando instalará node.js 12.16.2 la versión LTS en su sistema.

        $ nvm install v12.18.2

    También puede haber instalado la última versión de Node.js.

        $ nvm install v14.7.0

    Repita el comando anterior con las diferentes versiones de node.js para instalar varias versiones de node.js en su sistema.

<br>

    Paso 4 - Establecer la versión predeterminada de Node.js

    Como ha instalado varias versiones de node.js, puede seleccionar la versión específica de node.js como versión predeterminada utilizada por el sistema y cargarla en el entorno. Utilice el siguiente comando para enumerar la versión instalada actualmente y la versión predeterminada establecida.

        $  nvm list

        ->     v12.18.2
                v14.5.0
                system
        default -> 12 (-> v12.18.2)
        node -> stable (-> v14.5.0) (default)
        stable -> 14.5 (-> v14.5.0) (default)
        iojs -> N/A (default)
        unstable -> N/A (default)
        lts/* -> lts/erbium (-> v12.18.2)
        lts/argon -> v4.9.1 (-> N/A)
        lts/boron -> v6.17.1 (-> N/A)
        lts/carbon -> v8.17.0 (-> N/A)
        lts/dubnium -> v10.21.0 (-> N/A)
        lts/erbium -> v12.18.2


    Puede ver que la versión v12.18.2 de Node.js está configurada como la versión predeterminada. Puede cambiar la versión predeterminada de Node.js. El siguiente comando establecerá 12.18.2 como la versión predeterminada de Node.js.

        $ nvm use v12.18.2

    Ahora verifique la versión activa actual de node.js

        $ node --version

        v12.18.2

<br>

    Paso 5 - ejecutar la aplicación con una versión específica
    Si tiene varias aplicaciones node.js en su sistema y desea ejecutar cada una con una versión específica de node.js. NVM le ofrece una opción para usar una versión de node.js para ejecutar cualquier aplicación. Por ejemplo

        $ nvm run v12.18.2 app.js

<br>

    Step 6 – Remove Unused Node.js Version

    Este comando proporcionará una lista de versiones instaladas de node.js en su sistema.

        $ nvm list

    Puede eliminar cualquier versión no utilizada de su sistema. Utilice el siguiente comando nvm para eliminar Node.js versión 4.9.1 de su sistema.

        $ nvm uninstall v4.9.1