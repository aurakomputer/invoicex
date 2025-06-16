export function genHash(): string {
  return Math.random().toString(36).substring(2, 15); // Generates a string like 'klk3j2h1k2j3h'
}
