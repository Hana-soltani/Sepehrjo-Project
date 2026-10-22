const FILE_URL = process.env.NEXT_PUBLIC_FILE_URL;

export function getFileUrl(path: string | null | undefined) {
  if (!path) {
    return null;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (!FILE_URL) {
    console.error("NEXT_PUBLIC_FILE_URL is not defined");
    return null;
  }

  return `${FILE_URL.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}