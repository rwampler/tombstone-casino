
export interface FontConfiguration {
  url: string;
  name: string;
}

export default class FontLoader {
  async load(fonts: FontConfiguration[]): Promise<void> {
    const promises = [];
    for (const config of fonts) {
      const fontFace = new FontFace(config.name, `url(${config.url})`);
      promises.push(fontFace.load());
    }

    const faces = await Promise.all(promises);
    for (const font of faces) {
      document.fonts.add(font);
    }
  }
}