export const getCookie = (cookies: Record<string, string>, name: string) => {
  const count = cookies[name] ? parseInt(cookies[name], 10) : 0;
  if (count > 0) {
    const sortedCookieKeys = Object.keys(cookies).filter(k => {
      const split = k.split(/_(\d{2})$/).filter(Boolean);
      const index = split[1] ? parseInt(split[1], 10) : null;
      return (
        split[0] === name
        && index !== null
        && index < count
      );
    });
    sortedCookieKeys.sort();
    return sortedCookieKeys.map(k => cookies[k]).join('');
  }
  return undefined;
}