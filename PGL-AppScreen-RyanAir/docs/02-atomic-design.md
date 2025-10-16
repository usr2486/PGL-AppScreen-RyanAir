
# 2) Atomic Design aplicado

- **Átomos**: `Pill`, `IconBadge` (texto/forma/ícono básicos).  
- **Moléculas**: `ActionTile`, `InfoCard` (combinan íconos + texto + contenedores).  
- **Organismos**: `HeaderBar`, `Banner`, `QuickActions`, `BottomTabs` (secciones completas).  
- **Pantallas**: `HomeScreen` compone organismos y moléculas.

Racional: facilita reutilización (por ejemplo, `ActionTile` se usa 3 veces) y mantenimiento.
