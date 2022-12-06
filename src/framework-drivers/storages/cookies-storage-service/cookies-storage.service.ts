export const getCookiesValueByKey = function (key: string): string {
    return document.cookie.split('; ').reduce((reducer, value) => {
        const parts = value.split('=')
        return parts[0] === key ? decodeURIComponent(parts[1]) : reducer;
    }, '')
}

export const setCookieValue = function (key: string, value: string | number | boolean, days = 7, path = '/'): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = key + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

export const unsetCookieByKey = function (name: string, path: string): void {
  setCookieValue(name, '', -1, path)
}

