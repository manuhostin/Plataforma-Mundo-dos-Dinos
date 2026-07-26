export function translateDinoField(dino, field, isEnglish) {
  if (!dino || !field) return ''
  if (!isEnglish) return dino[field] ?? ''
  return dino.en?.[field] ?? dino[field] ?? ''
}
