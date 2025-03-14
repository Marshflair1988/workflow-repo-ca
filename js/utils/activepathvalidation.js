export function isActivePath(currentPath, href) {
  if (
    (href === '/' || href === '/index.html') &&
    (currentPath === '/' || currentPath === '/index.html')
  ) {
    return true;
  }

  if (currentPath === href) {
    return true;
  }

  if (href !== '/' && currentPath.startsWith(href)) {
    return true;
  }

  return false;
}
