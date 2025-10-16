
# 3) Componente propio: `IconBadge`

Es un **átomo** que combina un icono de `FontAwesome5` con una etiqueta para mostrar el acceso al *myRyanair Portal*.

## Props
- `name: string` → nombre del icono FontAwesome5.
- `label: string` → texto renderizado dentro de la píldora.

## Implementación (fragmento)
```tsx
<View style={styles.container}>
  <FontAwesome5 name={name as any} size={18} color={colors.card} />
  <Text style={styles.label}>{label}</Text>
</View>
```

## Relaciones
Se usa dentro de `HeaderBar` (organismo). El estilo aplica el color corporativo y bordes redondeados.

## Estilos clave
- `backgroundColor: colors.ryanairBlue`
- `borderRadius: 999`
- `paddingVertical/Horizontal` para la forma de píldora.
