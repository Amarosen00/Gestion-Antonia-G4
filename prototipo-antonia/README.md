# Prototipo · Antonia Centro de Estética

Prototipo navegable de los módulos de **Reservas** y **Recursos Humanos** (personal y comisiones), desarrollado para el
Informe de diseño de la solución, Proyecto Integrado TIHV43, INACAP Calama.

- **Tecnología:** HTML, Bootstrap 5.3 y JavaScript, sin servidor. Es el mismo enfoque de las plantillas de Django que se usarán en la construcción.
- **Datos:** todos son de ejemplo. El prototipo no guarda reservas ni cambios; solo recuerda el perfil y la sucursal elegidos.
- **Perfiles:** en la pantalla de inicio de sesión se elige *Recepcionista* o *Propietaria* (en el sistema real lo define la cuenta).

## Pantallas

| Código | Pantalla | Archivo | Perfil |
|---|---|---|---|
| P-01 | Inicio de sesión | `index.html` | Ambos |
| P-02 | Agenda del día | `agenda.html` | Ambos |
| P-03 | Nueva reserva (buscar o registrar clienta, historial, horarios sugeridos) | `nueva-reserva.html` | Recepcionista |
| P-04 | Detalle de reserva (reprogramar, cancelar con motivo) | `reserva.html` | Recepcionista |
| P-05 | Asistencia del día (marcar entrada y salida, días trabajados) | `asistencia.html` | Ambos |
| P-06 | Especialistas del local | `especialistas.html` | Propietaria |
| P-07 | Comisiones | `comisiones.html` | Propietaria |
| P-08 | Selector de sucursal | `sucursales.html` | Propietaria |
| — | Ventas y caja, Inventario, Reportes (otros equipos) | `caja.html`, `inventario.html`, `reportes.html` | Ambos |

Atajo para revisar como propietaria sin iniciar sesión: agregar `?rol=propietaria` a cualquier dirección.

## Verlo en el computador

Abrir `index.html` con doble clic (Chrome o Edge). No necesita instalar nada.

## Publicación

El sitio se publica en Vercel desde este repositorio. Cada vez que se sube un cambio a GitHub, Vercel vuelve a publicar
el sitio solo, en uno o dos minutos.
