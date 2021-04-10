type Opts = {
  chunkSize?: number;
  write?: (name: string, value: string) => void;
}

export const setCookie = (name: string, value: string, opts: Opts = {}) => {
  const chunkSize = opts.chunkSize ?? 1024;
  const valueChunks: string[] = Array.from(value.match(new RegExp(`.{1,${chunkSize}}`, 'g')) ?? []);
  const cookiesToSet: Record<string, string> = { [name]: String(valueChunks.length) };
  if (opts.write) opts.write(name, cookiesToSet[name]);
  valueChunks.forEach((chunk, index) =>  {
    const stringIndex = String(index).padStart(2, '0');
    const cookieName = `${name}_${stringIndex}`;
    cookiesToSet[cookieName] = chunk;
    if (opts.write) opts.write(cookieName, chunk);
  });
  return cookiesToSet;
}