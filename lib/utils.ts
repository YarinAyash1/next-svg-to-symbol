import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getItemDate = (date: string): string => {
  const currentDate = new Date(date);
  const dateString: string = currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  });
  const timeString: string = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return `${dateString} ${timeString}`;
}

export const getUuid = (): string => {
  return 'svg-xxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0;
    let v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const buildHtml = (rawSymbolCode: string, uuid: string) => {
  let symbol = rawSymbolCode
      .replace(/<title>.*<\/title>\s/, '');

  const icon = `
    <svg class="${uuid}">
        <use xlink:href="#${uuid}" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
    </svg>`;


  let symbolCode = symbol.split('\n');
  symbolCode.shift();
  symbolCode.pop();

  return {
    symbol,
    icon,
    symbolExample: symbolCode.join('\n')
  };
}
