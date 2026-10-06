# Contexto para Claude Code

Proyecto: prototipo navegable del sistema web de **Antonia Centro de Estética** (Calama), local de uñas, lifting/pestañas
y depilación con tres sucursales (Mall Plaza Calama, Vargas, J. A. Espinosa). Proyecto Integrado TIHV43, INACAP Calama.
Equipo: Edson Peralta (diseño de interfaces), Cristian Salgado y José Flores. Todo el contenido va en español de Chile.

## Alcance del equipo
Solo los módulos de **Reservas** y **RR.HH.** (asistencia, especialistas y comisiones). Ventas y caja, Inventario y
Reportes son de otros equipos: en el prototipo solo aparecen como enlaces del menú.

## Stack acordado del sistema real
Django 5.2 (Python 3.12), PostgreSQL, MongoDB Atlas para la bitácora, plantillas de Django + Bootstrap 5 + JavaScript.
Este prototipo es HTML estático para que las pantallas se puedan pasar a plantillas de Django casi sin cambios.

## Reglas de negocio que muestra el prototipo
- Roles: Recepcionista (solo su local) y Propietaria (las tres sucursales; única que ve especialistas, comisiones y selector de sucursal).
- La clienta y la especialista no tienen cuenta. De la clienta solo se pide nombre y teléfono, con consentimiento (Ley 19.628).
- Una reserva tiene un solo servicio. Reprogramar modifica la misma reserva. Cancelar exige motivo.
- Si el bloque está ocupado, se sugieren los horarios libres más cercanos.
- Los porcentajes de comisión son de ejemplo (la regla real está pendiente de confirmar con la propietaria).

## Guía de estilo (sección 3.4 del informe)
Texto #1C1917 · acento #BE185D · fondo #FAFAF9 · libre verde, ocupado gris, reprogramada ámbar, cancelada rojo.
Una sola familia sans serif, texto base 16 px, nunca menos de 14 px. Botones y áreas de toque de 44 px.
Un botón principal por pantalla. El estado nunca se indica solo con color (siempre con texto o ícono).
Diseño adaptable: escritorio 1366 px (PC de caja) y celular 375 px (propietaria); en celular la agenda pasa a lista por especialista.

## Archivos
- `*.html`: una pantalla por archivo; el código de pantalla (P-01 a P-08) aparece junto al título y coincide con el informe.
- `static/app.css`: guía de estilo. `static/app.js`: perfil, menú por rol, avisos (?ok=...) y formularios del prototipo.
- Encabezado y menú se repiten en cada archivo: si se cambian, cambiarlos en todos.
- No usar CDN: Bootstrap y los íconos están en `static/`.

## Publicación
GitHub → Vercel (importado como proyecto "Other", sin build). Cada cambio subido a la rama main se publica solo.
