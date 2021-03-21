# KAVAK Clon

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._




### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

_Base de datos
* SQL Server Management Studio 18

_Back End 
* Visual Studio Developer 2019
* Microsoft.AspNetCore.Authentication.JwtBearer" Version="5.0.4"
* Microsoft.EntityFrameworkCore" Version="5.0.4"
* Microsoft.EntityFrameworkCore.SqlServer" Version="5.0.4"
* Microsoft.EntityFrameworkCore.Tools" Version="5.0.4"

_Front End
* Angular CLI 11.2.5
* Node js 14.16.0
* Visual Studio Code
![image](https://user-images.githubusercontent.com/55564749/111920434-8cdb4b80-8a54-11eb-8cd6-c2c37ee4078a.png)


### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Primero te descargas la base de datos del repositorio el archivo Kavak.bacpac
![image](https://user-images.githubusercontent.com/55564749/111925545-ee101880-8a6e-11eb-86cf-40c7d5e1b507.png)

_Al darle click derecho en tus bases de datos importas la descargada
![image](https://user-images.githubusercontent.com/55564749/111925384-4d215d80-8a6e-11eb-97c8-8e9456f212d7.png)
![image](https://user-images.githubusercontent.com/55564749/111925412-662a0e80-8a6e-11eb-8f92-630dba47e7cf.png)
_Para evitar errores colocale de nombre "KavakDB"
![image](https://user-images.githubusercontent.com/55564749/111925437-81951980-8a6e-11eb-9981-565c313624fd.png)

_ y listo tendras la base completa en tu local
![image](https://user-images.githubusercontent.com/55564749/111925495-b30de500-8a6e-11eb-812f-39ab35f24282.png)



_Tras clonar el repositorio tendras una carpeta 

![image](https://user-images.githubusercontent.com/55564749/111920563-50f4b600-8a55-11eb-90c3-52550ec48c21.png)


_Empecemos con la api debemos abrir el archivo backend.sln con Visual Studio 2019

![image](https://user-images.githubusercontent.com/55564749/111920602-7da8cd80-8a55-11eb-9721-6d7ec9f1a3e5.png)

_y si tenemos instalado correctamente el sdk y las versiones de .net y entity framework al ejecutar el IIS
![image](https://user-images.githubusercontent.com/55564749/111921049-19d3d400-8a58-11eb-887c-3d8d13404aed.png)

_ Listo la api ya estara ejecutandose
![image](https://user-images.githubusercontent.com/55564749/111921074-33751b80-8a58-11eb-83ec-f929112eef4e.png)



_Para el front end en la misma carpeta vas a tener lo siguiente

![image](https://user-images.githubusercontent.com/55564749/111920656-be084b80-8a55-11eb-8cd3-5d38cc9dc777.png)

_Esa carpeta debemos abrila con Visual Studio Code 

![image](https://user-images.githubusercontent.com/55564749/111920680-ea23cc80-8a55-11eb-992f-294e42b265e0.png)

_Ahora para correr nuestro front en local host en una terminal de VSC vamos a escribir el siguiente comando

```
ng serve --o
```
![image](https://user-images.githubusercontent.com/55564749/111920758-60c0ca00-8a56-11eb-87ca-4c189d06d415.png)

_y ya tendras corriendo el front en tu local

![image](https://user-images.githubusercontent.com/55564749/111920764-72a26d00-8a56-11eb-83ec-59b3c6a74c43.png)


## Despliegue 📦

_Proximamente Azure Devops


## Autores ✒️
Desarrolladores Back-End
* Zaldivar Rodriguez Angel Eduardo
* Joel Aldecua 

Desarrolladores Front-End
* Mauricio de Leon Mercado
* Jose Manuel Cazan Segura
* Saulo Jesus Sanchez Dzul 


