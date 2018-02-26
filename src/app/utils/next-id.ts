let id = new Date().getTime();

export function nextId(): string {
  id++;
  return `_appId_${id}_`;
}
