interface ConentSource {
  conent: string;
  soure: string;
}


export default interface Planet {
  name: string;
  content: ConentSource;
  structure: ConentSource;
  geology: ConentSource;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

