--- 
title: "Habilitar la Ejecución de Scripts en PowerShell en Visual Studio Code"
date: "26-12-2023"
---

## Introducción

Este documento proporciona instrucciones paso a paso para habilitar la ejecución de scripts en PowerShell en Visual Studio Code. La ejecución de scripts puede estar deshabilitada por razones de seguridad, y estos pasos aseguran que se pueda realizar la ejecución sin comprometer la seguridad del sistema.

## Pasos para Habilitar la Ejecución de Scripts en PowerShell

### 1. Verificar el Estado Actual

Abra PowerShell como administrador y ejecute el siguiente comando para verificar el estado actual de la política de ejecución:

```powershell
Get-ExecutionPolicy -list
```

### 2. Habilitar la Ejecución de Scripts

Para habilitar la ejecución de scripts, ejecute el siguiente comando:

```powershell
Set-ExecutionPolicy RemoteSigned -Force
```

Esto establecerá la política de ejecución en "RemoteSigned," permitiendo la ejecución de scripts locales firmados digitalmente y scripts remotos sin firmar.

### 3. Habilitar Machine Policy

Para habilitar la Directiva de Máquina (Machine Policy), siga estos pasos:

```
1.Presione Win + R para abrir el cuadro de diálogo Ejecutar.
2.Escriba gpedit.msc y presione Enter.

```

### 4. Configuración de Directiva de Máquina

Dentro del Editor de Directivas de Grupo Local, navegue a:

```
Configuración del Usuario -> Configuración de Windows -> Configuración de Seguridad -> Directivas Locales -> Opciones de Seguridad

```

Busque la opción "Configuración de Directiva de Máquina: Modo de Autenticación de Usuario" y asegúrese de que esté configurada como "Autenticación de Usuario Clásica."

## Conclusión
Después de completar estos pasos, la ejecución de scripts en PowerShell debería estar habilitada en Visual Studio Code. Estos ajustes equilibran la seguridad del sistema con la flexibilidad necesaria para trabajar eficientemente con scripts en un entorno de desarrollo.