
# 4) Iconografía

Librería: **@expo/vector-icons** (paquete oficial de Expo). Subconjunto: **FontAwesome5**.

| Nombre del icono | Librería        | Dónde se usa | Imagen |
|------------------|-----------------|--------------|--------|
| `kiwi-bird`      | FontAwesome5    | Logo header  | ![kiwi](../assets/images/icon-kiwi.png) |
| `user-circle`    | FontAwesome5    | myRyanair    | ![user](../assets/images/icon-user.png) |
| `suitcase-rolling` | FontAwesome5  | Bookings     | ![suitcase](../assets/images/icon-suitcase.png) |
| `ticket-alt`     | FontAwesome5    | Boarding Passes | ![ticket](../assets/images/icon-ticket.png) |
| `mug-hot`        | FontAwesome5    | Order To Seat | ![mug](../assets/images/icon-mug.png) |
| `home`           | FontAwesome5    | Tab inferior | ![home](../assets/images/icon-home.png) |

## Implementación de ejemplo
```tsx
import { FontAwesome5 } from "@expo/vector-icons";
<FontAwesome5 name="ticket-alt" size={22} color={colors.ryanairBlue} />
```
