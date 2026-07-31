// utils/BackendURL.jsx
const normalizeBackendUrl = (url) => {
  const fallbackUrl = 'http://localhost:8000';
  const rawUrl = (url || fallbackUrl).trim();
  const withProtocol = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;

  return withProtocol.replace(/\/+$/, '');
};

const isAbsoluteUrl = (url) => /^(https?:|data:|blob:)/i.test(url);

const backendUrl = normalizeBackendUrl(
  import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_API_URL
);

export const getAssetUrl = (assetPath) => {
  if (!assetPath) return null;

  const normalizedPath = assetPath.trim();
  if (!normalizedPath) return null;
  if (isAbsoluteUrl(normalizedPath)) return normalizedPath;

  const pathWithSlash = normalizedPath.startsWith('/')
    ? normalizedPath
    : `/${normalizedPath}`;

  return `${backendUrl}${pathWithSlash}`;
};

export default backendUrl;
