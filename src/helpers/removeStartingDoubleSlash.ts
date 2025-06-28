function removeStartingDoubleSlash(text: string) {
  text = text.replace('64x64', '128x128');
  if (text.startsWith('//')) {
    return text.slice(2);
  } else {
    return text;
  }
}

export default removeStartingDoubleSlash;
