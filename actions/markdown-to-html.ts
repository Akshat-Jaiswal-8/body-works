// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import 'tailwindcss/tailwind.css';

const rules = [
  //header rules
  [/#{6}\s?([^\n]+)/g, "<h6 style='font-size: 5px'>$1</h6>"],
  [/#{5}\s?([^\n]+)/g, "<h5 style='font-size: 10px'>$1</h5>"],
  [/#{4}\s?([^\n]+)/g, "<h4 style='font-size: 20px'>$1</h4>"],
  [/#{3}\s?([^\n]+)/g, "<h3 style='font-size: 30px'>$1</h3>"],
  [/#{2}\s?([^\n]+)/g, '<h2>$1</h2>'],
  [/#{1}\s?([^\n]+)/g, '<h1>$1</h1>'],

  //bold, italics and paragraph rules
  [/\*\*\s?([^\n]+)\*\*/g, '<b>$1</b>'],
  [/\*\s?([^\n]+)\*/g, '<i>$1</i>'],
  [/__([^_]+)__/g, '<b>$1</b>'],
  [/_([^_`]+)_/g, '<i>$1</i>'],
  [/([^\n]+\n?)/g, '<p>$1</p>'], //xs:text-sm text-xs mb-6

  //Lists
  [/([^\n]+)(\+)([^\n]+)/g, '<ul><li>$3</li></ul>'],
  [/([^\n]+)(\*)([^\n]+)/g, '<ul><li>$3</li></ul>'],
];

export const markdownToHtml = (text: string) => {
  let html: string = text;
  rules.forEach(([rule, template]) => {
    html = html.replace(rule, template);
  });
  return html;
};
