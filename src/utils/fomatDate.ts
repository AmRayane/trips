export function fomatDate(dateToFormat: string): string {
  const date = new Date(dateToFormat);
  return date.toLocaleDateString("fr-FR");
}
